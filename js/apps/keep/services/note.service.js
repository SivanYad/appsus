import { utilService } from '../../../services/util-service.js'
import { storageServices } from '../../../services/async-storage-service.js'
export const notesService = {
    query,
    remove,
    createNote,
    save
}
const NOTES_KEY = 'notesDB'
_createNotes()
function query(criteria) {
    if (criteria==={}) {
        return storageServices.query(NOTES_KEY).then(notes=>{
            return notes
        })
        
    }
    return storageServices.query(NOTES_KEY).then((notes) => {
        const regex = new RegExp(criteria.text, 'i')
        if (criteria.type === 'notes') {
            notes = notes.filter(note => {
                return regex.test(note.info.label)
            })
        } else {
            notes = notes.filter(note => {
                return regex.test(note.info.label) &&
                    criteria.type === note.type
            })
        }
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
    const notes = [{
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            label: '',
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#9097FE"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "../../../imgs/img1.png",
            label: "Me and Everyone here"
        },
        style: {
            backgroundColor: "#ADF1FF"
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
        },
        style: {
            backgroundColor: "#FFF5B3"
        }
    },
    {
        id: "n104",
        type: "note-todos",
        info: {
            label: "Thing to do after sprint",
            todos: [
                { txt: "Sleep", doneAt: null },
                { txt: "Sleep", doneAt: null },
                { txt: "Sleep", doneAt: null },
                { txt: "And more sleep", doneAt: null },
            ]

        },
        style: {
            backgroundColor: "#FFB8F5"
        }

    }
    ]
    let notesFromStorage = utilService.loadFromStorage(NOTES_KEY);
    if (!notesFromStorage || !notesFromStorage.length) {

        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes

}

function createNote(noteType, noteInfo) {
    const note = {
        type: noteType,
        info: noteInfo,
        style: {
            backgroundColor: "#ffffff"
        }
    }
    save(note)
    return note
}