import notePreview from "./note-preview.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import { notesService } from "../services/note.service.js";
export default {
    props: ["notes"],
    template: `
      <section class="note-list-container">
              <article class="note" @click.self v-for="(note,idx) in notes" :style="note.style" @click="select(note)">
                  <component :is="note.type"  
                  :info="note.info" :note="note"> 
                </component>
                <button class="remove" @click.stop="remove(note.id)"><i class="fa-solid fa-trash"></i></button>
                <label :for="note.id" @click.stop><i class="fas fa-palette"></i></label>
                <input :id="note.id" type="color" @click.stop class="color-input"  v-model="note.style.backgroundColor" @change.stop="changeColor(note)" >
                <button class="pin"><i class="fas fa-thumbtack"></i></button>
                <button class="copy" @click.stop="copyNote(note)"><i class="fas fa-copy"></i></button>
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

        },
        copyNote(note){
            this.$emit('copyed',note)
        }

    },

    computed: {
      
    },
    unmounted() {}
}