import { notesService } from "../services/note.service.js";
export default {
    props: ['note','isText'],
    template: `
    <section>
    <form @submit.prevent="updateNoteTypeText">
            <input type="text" v-model="note.info.label">
            <input type="text" v-model="note.info.txt" >
            <button>close</button>
            </form>
    </section>
    `,
    data() {
        return {
            txtData: {
                label: '',
                txt: ''
            }
        };
    },
    created() { },
    methods: {
        updateNoteTypeText() {
           notesService.save(this.note)
           this.$emit('done',this.isText)
          


        }
    },
    computed: {},
    unmounted() { },
};