import { notesService } from "../apps/keep/services/note.service.js";
import noteFilter from "../apps/keep/cmps/note-filter.cmp.js";
import noteList from "../apps/keep/cmps/note-list.cmp.js";
import notePreview from "../apps/keep/cmps/note-preview.cmp.js";
export default {
    template: `
 <section v-if="notes">
    <form @submit.prevent>
        <input type="text">
        <button>list</button>
        <button>img</button>
        <button>video</button>

    </form>
    <pre>{{notes}}</pre>
     <note-Filter @filtered="setFilter" :notes="notes"/>
     <note-List :notes="notes"  @selected="selectNote" />

 </section>
`,
    components: {
        noteFilter,
        noteList,
        notePreview
    },
    data() {
        return {
            notes: null,
            filterBy: null,
            selectedNote: null
        };
    },
    created() {
        notesService.query().then(notes => this.notes = notes)
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        selectNote(note) {
            this.selectedNote = note
        }
    },
    computed: {

    },
    unmounted() { },
};
