import notePreview from "./note-preview.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
export default {
    props: ["notes"],
    template: `
      <section class="notes-list">
              <article @click.self v-for="(note,idx) in notes" :key="note.id" class="note-preview-container" @click="select(note)">
              <component :is="note.type"  
                        :info="note.info" >
                    </component>
                    <button @click.stop="remove(note.id)">🗑</button>
              </article>
      </section>
`,
    components: {
        notePreview,
        noteTxt,
        noteImg,
        noteTodos
    },
    data() {
        return {};
    },
    created() { },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },

    },
    computed: {},
    unmounted() { },
};