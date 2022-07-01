import { notesService } from "../services/note.service.js";
export default {
    template: `
    <section><div v-if="create" class="create-container">
        <input type="text" @click="noteTypeText" placeholder="Write A Text Note">
        <label for="upload-photo">img</label>
        <input type="file" id="upload-photo" @change="uploadImage($event)" @click="noteTypeImg" accept="image/jpeg, image/png, image/jpg"> 
        <button @click="noteTodoText">List</button>
        </div>
        <div v-if="isText">
            <form @submit.prevent="createNoteTypeText">
            <input type="text" placeholder="title" v-model="txtData.label">
            <input type="text"  v-model="txtData.txt">
            <button>close</button>
            </form>
            
        </div>
        <div v-if="isTodo">
            <form @submit.prevent="createNoteTypeTodo">
                <input type="text" v-model="todoData.label">
            <input type="text" v-for="(todo,idx) in todoList" v-model="todoList[idx].txt" @keypress="addTodo(idx)">
            <button>close</button>
            </form>
        </div>
        <div v-if="isImg" class="note">
            <form @submit.prevent="createNoteTypeImg">
            <img v-if="previewImage" :src="previewImage">
            <input type="text">
            </form>
            
        </div>
    </section>
`,
props:['notes'],
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
            },
            todoList:[{txt:''}]
        };
    },
    created() { },
    methods: {
        noteTypeText() {
            this.isText = true
            this.create = null
        },
        noteTypeImg() {
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
            const newNote=notesService.createNote('note-txt',noteInfo)
            this.notes.push(newNote)
            this.create=true
            this.isText=false
            this.txtData={
                label:'',
                txt:''
            }
        
        },
        createNoteTypeTodo(){
            this.todoList.splice(this.todoList.length-1,1)
            const noteInfo={
                label:this.todoData.label,
                todos:this.todoList
            }
            const newNote=notesService.createNote('note-todos',noteInfo)
            this.notes.push(newNote)
            this.create=true
            this.isTodo=false
            this.todoList=[{txt:''}]
            this.todoData= {label:''}

        },
        createNoteTypeImg(){
        

        },
        addTodo(idx){
          if(idx===this.todoList.length-1){
            this.todoList.push({txt:''})
          }
        },


        uploadImage(event) {
            console.log(event);
            const file= event.target.files[0]
            this.previewImage = URL.createObjectURL(file);
        }
    },

    computed: {

    },
    unmounted() { },
}
