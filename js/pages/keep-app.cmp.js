import { notesService } from "../apps/keep/services/note.service.js";
import noteFilter from "../apps/keep/cmps/note-filter.cmp.js";
import noteList from "../apps/keep/cmps/note-list.cmp.js";
import notePreview from "../apps/keep/cmps/note-preview.cmp.js";
import { eventBus } from "../services/eventBus-service.js"
import noteCreator from "../apps/keep/cmps/note-creator.cmp.js";
export default {
    template: `
 <section v-if="notes">
     <note-creator/>
     <note-Filter @filtered="setFilter" :notes="notes"/>
     <note-List :notes="notes"  @selected="selectNote"  @remove="removeNote" />
 </section>
`,
    components: {
        noteFilter,
        noteList,
        notePreview,
        noteCreator
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
        },
        removeNote(id) {
            notesService.remove(id).then(() => {
                console.log('Deleted successfully');
                const idx = this.notes.findIndex((note) => note.id === id);
                this.notes.splice(idx, 1);
                eventBus.emit('show-msg', { txt: 'Deleted successfully', type: 'success' });
            }).catch(err => {
                console.log(err);
                eventBus.emit('show-msg', { txt: 'Error - try again later', type: 'error' });
            })
        },
    },
    computed: {

    },
    unmounted() { },
};
