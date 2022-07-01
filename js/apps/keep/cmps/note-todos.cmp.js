import listItem from "./list-item.cmp.js";
export default {
    props: ['info','note'],
    template: `
 <section class="note-type-todo">
    <p>{{info.label}}</p>
    <list-item v-for="todo in info.todos" :todo="todo" :note="note"/>
 </section>
`,
    components: {
        listItem
    },
    data() {
        return {
        };
    },
    created() { },
    methods: {
    },
    computed: {},
    unmounted() { },
};