import { notesService } from "../services/note.service.js";
export default {
    props:['note','isTodo'],
 template: `
 <section>
 <form @submit.prevent="updateNoteTypeTodo">
    <input type="text" v-model="note.label">
            <input  v-for="(todo,idx) in note.info.todos" v-model="note.info.todos[idx].txt" type="text">
            <button>close</button>
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
        this.$emit('done',this.isTodo)
    }
},
computed: {},
unmounted() {},
};