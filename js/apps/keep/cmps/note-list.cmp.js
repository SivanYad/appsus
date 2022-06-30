import notePreview from "./note-preview.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteBgColor from "./note-bg-color.cmp.js";
import { notesService } from "../services/note.service.js";
export default {
    props: ["notes"],
    template: `
      <section class="note-list-container">
              <article class="note" @click.self v-for="(note,idx) in notes" :key="note.id"  @click="select(note)">
                  <component :is="note.type"  
                  :info="note.info" >
                </component>
                <button @click.stop="remove(note.id)">🗑</button>
                <button @click.stop=""><input type="color"></button>
                
                    
                </article>
            </section>
`,
    components: {
        notePreview,
        noteTxt,
        noteImg,
        noteTodos,
        noteBgColor
    },
    data() {
        return {
            showColorModal: false
        };
    },
    created() { },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
      
        select(note){
            this.$emit('selected',note)
        }

    },

    computed: {
      
    },
    unmounted() {}
}