import { notesService } from "../apps/keep/services/note.service.js";
import noteFilter from "../apps/keep/cmps/note-filter.cmp.js";
import noteList from "../apps/keep/cmps/note-list.cmp.js";
import notePreview from "../apps/keep/cmps/note-preview.cmp.js";
import { eventBus } from "../services/eventBus-service.js"
import noteCreator from "../apps/keep/cmps/note-creator.cmp.js";
import noteDetails from "../apps/keep/pages/note-details.cmp.js";
import {utilService} from "../services/util-service.js"
import { router } from "../router.js";
export default {
    template: `
 <section v-if="notes">
     <note-filter @filtered="setFilter" :notes="notes"/>
     <note-creator :notes="notes"/>
     <note-details v-if="selectedNote" @doneUpdate="unSelect"  :note="selectedNote"/>
     <!-- <router-view/> -->
     <note-List :notes="notes"  @selected="selectNote"
     @copyed="copyNote"  @remove="removeNote" />
    </section>
`,
    components: {
        noteFilter,
        noteList,
        notePreview,
        noteCreator,
        noteDetails,
    },
    watch: {
        filterBy: {
            handler(newVal, oldVal) {
                const notes = notesService.query(this.filterBy).then(notes => {
                    this.notes = notes
                    return notes
                })

            },
            deep: true
        }
    },
    data() {
        return {
            notes: null,
            filterBy: {},
            selectedNote: null,
            noteId: null
        };
    },
    created() {
        notesService.query(this.filterBy).then(notes => this.notes = notes)
    },
    methods: {
        setFilter(filterBy) {
            // console.log(this.filterBy);
            this.filterBy = filterBy
        },
        selectNote(note) {
            console.log(note);
            this.selectedNote = note
            this.noteId = note.id
            // router.push({ path: `/keep/${this.noteId}` })
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
        copyNote(note) {
            const newNote = JSON.parse(JSON.stringify(note))
            newNote.id = utilService.makeId()
            notesService.save(newNote)
            this.notes.push(newNote)

        },
        unSelect(note) {
            note = false
            this.selectedNote = note

        }
    },
    computed: {

    },
    unmounted() { },
};
