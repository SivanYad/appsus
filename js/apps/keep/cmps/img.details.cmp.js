import { notesService } from "../services/note.service.js";
export default {
    props:['note','isImg'],
 template: `
 <section v-if="note">
    <form @submit.prevent="updateNoteTypeImg">
    <img :src="note.info.url" alt="">
    <input type="text" v-model="note.info.label">
    <button>close</button>
    </form>
 </section>
`,
data() {
return {};
},
created() {},
methods: {
    updateNoteTypeImg(){
        notesService.save(this.note)
        this.$emit('done',this.isImg)
        
    }
},
computed: {},
unmounted() {},
};