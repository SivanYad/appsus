import svgCmp from "../cmps/home-page-svg.cmp.js"
export default {
  template: `
    <section class="home-page app-main">
      <svg-cmp/>
      <div class="moto-container">
            <h3 >Three Words Combined</h3>
            <div class="moto flex"><h2>Notes</h2>
            <h2><span>•</span>Email</h2>
            <h2><span>•</span>Books</h2></div>
            </div>
    </section>
`,
components:{
  svgCmp
},
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
}
