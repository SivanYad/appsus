import notePreview from "./note-preview.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteBgColor from "./note-bg-color.cmp.js";
export default {
    props: ["notes"],
    template: `
      <section class="notes-list">
              <article @click.self v-for="(note,idx) in notes" :key="note.id" class="note-preview-container" @click="select(note)">
              <component :is="note.type"  
                        :info="note.info" >
                    </component>
                    <button @click.stop="remove(note.id)">🗑</button>
                    <button @click.stop="openModal">🎨</button>
                    <!-- <note-bg-color v-if="showColorModal" :note="note"/> -->
                       
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

    },
    computed: {
        openModal() {
            return this.showColorModal = true
        }
    },
    unmounted() { },
};