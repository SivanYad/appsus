import {utilService} from '../../../services/util-service.js'
import {storageServices} from '../../../services/async-storage-service.js'
export const notesService = {
    query,
    remove,
    createNote,
    save
}
const NOTES_KEY = 'notesDB'
_createNotes()
function query() {
    return storageServices.query(NOTES_KEY).then(notes=>{
        return notes
    })
}

function remove(noteId) {
    return storageServices.remove(NOTES_KEY, noteId)
}
function save(note) {
    if (note.id) return storageServices.put(NOTES_KEY, note)
    else return storageServices.post(NOTES_KEY, note)
}

function _createNotes() {
   const notes= [{
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            label:'',
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "../../../imgs/img1.png",
            title: "Me and Everyone here"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    },
    {
        id:"n104",

    }
    ]
    let notesFromStorage = utilService.loadFromStorage(NOTES_KEY);
    if (!notesFromStorage || !notesFromStorage.length) {

        utilService.saveToStorage(NOTES_KEY,notes)
    }
    return notes

}

function createNote(noteType,noteInfo){
    const note={
        type: noteType,
        info: noteInfo
    }
    save(note)
    return note
}