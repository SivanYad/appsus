export default {
    props: ['note'],
    template: `
    <section>
    <form @submit.prevent="updateNoteTypeText">
            <input type="text" v-model="note.info.label">
            <input type="text" v-model="note.info.txt" >
            <button>close</button>
            </form>
    </section>
    `,
    data() {
        return {
            txtData: {
                label: '',
                txt: ''
            }
        };
    },
    created() { },
    methods: {
        updateNoteTypeText() {


        }
    },
    computed: {},
    unmounted() { },
};