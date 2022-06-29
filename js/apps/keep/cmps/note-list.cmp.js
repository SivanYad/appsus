import notePreview from "./note-preview.cmp.js";
export default {
    props: ["notes"],
    template: `
      <section class="notes-list">
              <article v-for="(note,idx) in notes" :key="note.id" class="note-preview-container" @click="select(note)">
                  <note-preview :note="note"/>
              </article>
      </section>
`,
components:{
    notePreview
},
data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
};