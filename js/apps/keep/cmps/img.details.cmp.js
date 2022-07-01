import { notesService } from "../services/note.service.js";
export default {
    props:['note'],
 template: `
 <section v-if="note">
    <form @submit.prevent="updateNoteTypeImg"></form>
    <img :src="note.info.url" alt="">
    <input type="text" v-model="note.info.title">
    <button>close</button>
 </section>
`,
data() {
return {};
},
created() {},
methods: {
    updateNoteTypeImg(){
        notesService.save(this.note)
        this.note=null
    }
},
computed: {},
unmounted() {},
};