import {storageServices} from '../../../services/async-storage-service.js'
export const notesService = {
    query,
    remove
}
const NOTES_KEY = 'notesDB'

function query() {
    return storageServices.query(NOTES_KEY).then(notes => {
        if (!notes ||!notes.length) {
            console.log('hi');
            notes = _createNotes()
        }
        return notes
    })
}

function remove(noteId) {
    return storageServices.remove(NOTES_KEY, noteId)
}

function _createNotes() {
   const notes= [{
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
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
    }
    ]
    return notes
}