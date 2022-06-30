import { notesService } from "../services/note.service.js";
export default {
    template: `
    <section><div v-if="create" class="create-container">
        <input type="text" @click="noteTypeText" placeholder="Write A Text Note">
        <label for="upload-photo">img</label>
        <input type="file" id="upload-photo" @change="uploadImage($event)" accept="image/jpeg, image/png, image/jpg"> 
        <button @click="noteTodoText">List</button>
        </div>
        <div v-if="isText">
            <form @submit.prevent="createNoteTypeText">
            <input type="text" placeholder="title" v-model="txtData.label">
            <input type="text"  v-model="txtData.txt">
            <button>close</button>
            </form>
            <pre>{{txtData}}</pre>
        </div>
        <div v-if="isTodo">
            <form @submit.prevent="createNoteTypeTodo">
            <input type="text">
            <input type="text">
            <input type="text">
            <button>close</button>
            </form>
        </div>
        <div v-if="isImg">
            <form @submit.prevent="createNoteTypeImg">
            <img src="previewImage">
            <input type="text">
            </form>
            
        </div>
    </section>
`,
    data() {
        return {
            isText: null,
            isTodo: null,
            isImg: null,
            previewImage: null,
            file: null,
            create: true,
            txtData:{
                label:'',
                txt:''
            },
            todoData:{
                label:'',
                todos:{
                    txt:'',
                    doneAt:''
                }
            
            }


        };
    },
    created() { },
    methods: {
        noteTypeText() {
            this.isText = true
            this.create = null
        },
        notetypeImg() {
            this.isImg = true
            this.create = null
        },
        noteTodoText() {
            this.isTodo = true
            this.create = null
        },
        createNoteTypeText(){
            const noteInfo={
                label: this.txtData.label,
                txt:this.txtData.txt
            }
            notesService.createNote('note-txt',noteInfo)
        },
        createNoteTypeTodo(){
            const noteInfo={

            }
        },


        uploadImage(event) {
            console.log(event);
            this.file = event.target.files[0]
            const formData = new FormData();
            formData.append('img', this.file, this.file.name)
            fetch('//ca-upload.com/here/upload.php', {
                method: 'POST',
                body: formData
            }).then(res => res.text()).then((url) => {
                this.previewImage = url
            })
        }
    },

    computed: {

    },
    unmounted() { },
}
