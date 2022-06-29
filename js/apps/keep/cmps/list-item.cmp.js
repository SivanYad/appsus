export default {
    props:['todo'],
 template: `
 <li>
    {{todo.txt}}
    <input @click.stop  type="checkBox" v-bind="isDone" >
 </li>
`,

data() {
return {
};
},
created() {},
methods: {
    isDone(){
        if(this.todo.doneAt){
            return checked
        }
    }
},
computed: {},
unmounted() {},
};