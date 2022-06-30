export default {
 template: `
 <section class="filter-container">
    <form>
        <label>Search Email<input type="text" v-model="criteria.txtSearch"></label>
        <select value="true" >Read</select>
        <select value="false">Unread</select>
        <button >Check</button>
    </form>
 </section>
`,
data() {
return {
    criteria: {
        txtSearch: null,
        isRead: null
    }
}
},
created() {},
methods: {
    search() {
        console.log(this.criteria)
    },
    // onSetRead() {
    //     this.isRead = true
    // },
    // onSetUnread() {
    //     this.isRead = false
    // },
},
computed: {},
unmounted() {},
}