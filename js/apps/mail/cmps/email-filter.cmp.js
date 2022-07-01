export default {
 template: `
 <section class="filter-container">
    <form @submit.prevent="submit">
        <label>Search Email<input type="text" v-model="criteria.txtSearch"></label>
        <ul class="clean-list">
            <li>
                <label>Read<input type="radio" :value="true" v-model="criteria.isRead" /></label>
            </li>
            <li>
                <label>Unread<input type="radio" :value="false" v-model="criteria.isRead" /></label>
            </li>
        </ul>
        
        
        <button>Submit</button>
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
    submit() {
        console.log(this.criteria)
        console.log(typeof this.criteria.isRead)
    },
},
computed: {},
unmounted() {},
}