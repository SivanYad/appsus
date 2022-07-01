import notePreview from "./note-preview.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import { notesService } from "../services/note.service.js";
export default {
    props: ["notes"],
    template: `
      <section class="note-list-container">
              <article class="note" @click.self v-for="(note,idx) in notes" :key="note.id" :style="note.style" @click="select(note)">
                  <component :is="note.type"  
                  :info="note.info" :note="note"> 
                </component>
                <button @click.stop="remove(note.id)">🗑</button>
                <input id="color-input" type="color" @click.stop class="color-input"  v-model="note.style.backgroundColor" @change.stop="changeColor(note)" >
                </article>
            </section>
`,
    components: {
        notePreview,
        noteTxt,
        noteImg,
        noteTodos,
        
    },
    data() {
        return {
            showColorModal: false,
            

        };
    },
    created() { },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
      
        select(note){
            this.$emit('selected',note)
        },
        changeColor(note){
            notesService.save(note)
        }

    },

    computed: {
      
    },
    unmounted() {}
}