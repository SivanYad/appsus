import listItem from "./list-item.cmp.js";
export default {
    props: ['info'],
    template: `
 <section>
    <ul>{{info.label}}</ul>
    <list-item v-for="todo in info.todos" :todo="todo"/>
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