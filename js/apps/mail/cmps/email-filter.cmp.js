export default {
  template: `
 <section class="filter-container">
    <form @submit.prevent="submit">
        <label>Search Email<input type="text" v-model="criteria.txtSearch" @input="filter"></label>
        <ul class="clean-list">
            <li>
                <label>Read<input type="radio" :value="true" ref="filter1"  v-model="criteria.isRead" @click="filter" /></label>
            </li>
            <li>
                <label>Unread<input type="radio" :value="false" ref="filter2" v-model="criteria.isRead" @click="filter" /></label>
            </li>
        </ul>
        <!-- <label>Read Emails<input
            type="checkbox"
            v-model="criteria.isRead"
            true-value="yes"
            false-value="no" />
        </label> -->
        <button>Submit</button>
    </form>
 </section>
`,
  data() {
    return {
      criteria: {
        txtSearch: '',
        isRead: false,
      },
    }
  },
  created() {},
  methods: {
    submit() {
      console.log(this.criteria)
      console.log(typeof this.criteria.isRead)
    //   this.$emit()
    },
    filter() {
      let read = this.$refs.filter1
      let unread = this.$refs.filter2
      console.log(read.value)
      if(read.checked) {
        this.criteria.isRead = true
      } else {
        this.criteria.isRead = false
      }
    
      this.$emit('filtered', this.criteria)
    },
  },
  computed: {},
  unmounted() {},
}
