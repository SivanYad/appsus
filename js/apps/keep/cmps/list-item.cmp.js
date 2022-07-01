import { notesService } from '../../../apps/keep/services/note.service.js'
export default {
    props: ['todo', 'note'],
    template: `
 <li>
    {{todo.txt}}
    <input @click.stop="setTime(todo)" type="checkBox" :checked="todo.doneAt" >
 </li>
`,

    data() {
        return {};
    },
    created() { },
    methods: {
        setTime(todo) {
            if (todo.doneAt) {
                todo.doneAt = null
                notesService.save(this.note)
                console.log(todo);
                console.log(this.note);
            } else {
                todo.doneAt = Date.now()
                notesService.save(this.note)
                console.log(todo);
                console.log(this.note);
            }
        }
    },
    computed: {},
    unmounted() { },
};