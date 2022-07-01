import { notesService } from "../services/note.service.js";
export default {
    props:['note'],
 template: `
 <section>
 <form @submit.prevent="updateNoteTypeTodo">
    <input type="text" v-model="note.label">
            <input  v-for="(todo,idx) in note.todos" v-model="note.info.todos[idx].txt" type="text">
            </form>
 </section>
`,
data() {
return {};
},
created() {},
methods: {
    updateNoteTypeTodo(){
        notesService.save(this.note)
    }
},
computed: {},
unmounted() {},
};