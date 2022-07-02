export default {
    props: ['notes'],
    template: `
 <section >
        <select name="" id="" placeholder="filter by type" @change="onFilter" v-model="filterBy.type">
            <option value="notes">All</option>
            <option value="note-txt">Text</option>
            <option value="note-img">Image</option>
            <option value="note-todos">Todos</option>
        </select>
        <input type="text" @input="onFilter" v-model="filterBy.text">
 </section>
`,
    data() {
        return {
            filterBy:{
                text:'',
                type:'notes'
            }
        };
    },
    created() { this.$emit('filtered',this.filterBy) },
    methods: {
        onFilter(){
            this.$emit('filtered',this.filterBy)


        }
    },
    computed: {},
    unmounted() { },
};