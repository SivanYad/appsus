export default {
    props:['note'],
 template: `
 <form @submit.prevent="updateNoteTypeText">
            <input type="text" :value="note.label">
            <input type="text" value="note.txt" >
            <button>close</button>
            </form>
`,
data() {
return {
    txtData:{
        label:'',
        txt:''
    }
};
},
created() {},
methods: {
    updateNoteTypeText(){


    }
},
computed: {},
unmounted() {},
};