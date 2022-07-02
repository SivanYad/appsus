export default {
    props:['info'],
 template: `
 <section class="note-type-img" >
    <p>{{info.label}}</p>
     <img class="note-img" :src="info.url">
 </section>
`,
data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
};