import todoDetails from "../cmps/todo-details.cmp.js";
import txtDetails from "../cmps/txt-details.cmp.js";
import imgDetails from "../cmps/img.details.cmp.js";
export default {
    props:['note'],
 template: `
 <section v-if="note">
 <todo-details v-if="isTodo" :note="note"/>
 <txt-details v-if="isText" :note="note"/>
 <img-details v-if="isImg" :note="note"/>
 </section>`
 

,
components:{
    todoDetails,
    txtDetails,
    imgDetails,
},
watch: {
    note: function(newVal, oldVal) {
        if (newVal.type==='note-txt'){
            this.isText=true
            this.isTodo=false
            this.isImg=false
        }
        if(newVal.type==='note-todos'){
            this.isTodo=true
            this.isText=false
            this.isImg=false
        }
        if (newVal.type==='note-img') {
            this.isImg=true
            this.isText=false
            this.isTodo=false
        }
    },
    deep: true
},
data() {
return {
    isText:null,
    isTodo:null,
    isImg:null,

};
},
created() {
    if (this.note.type==='note-txt'){
        this.isText=true
        this.isTodo=false
        this.isImg=false
    }
    if(this.note.type==='note-todos'){
        this.isTodo=true
        this.isText=false
        this.isImg=false
    }
    if (this.note.type==='note-img') {
        this.isImg=true
        this.isText=false
        this.isTodo=false
    }

},
methods: {},
computed: {},
unmounted() {},
};