export default {
  template: `
 <section class="filter-container">
    <form @submit.prevent="submit">
        <div class="search-email"><button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button><label ><input type="text" v-model="criteria.txtSearch" placeholder="Search Email" @input="filter"></label></div>
        
        <ul class="clean-list flex filter-btn">
            <li>
                <label for="read">Read<input type="radio" :value="true" ref="filter1" id="read"  v-model="criteria.isRead" @click="filter" /></label>
            </li>
            <li>
                <label for="unread">Unread<input type="radio" id="unread" :value="false" ref="filter2" v-model="criteria.isRead" @click="filter" /></label>
            </li> 
        </ul>
        <!-- <label>Read Emails<input
            type="checkbox"
            v-model="criteria.isRead"
            true-value="yes"
            false-value="no" />
        </label> -->
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
