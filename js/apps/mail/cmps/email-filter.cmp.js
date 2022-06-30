export default {
 template: `
 <section class="filter-container">
    
    <label>Search Email<input type="text" v-model="criteria.txtSearch"></label>
    <label>Read<input type="radio" :value="true" v-model="isRead"></label>
    <label>Unread<input type="radio" :value="false" v-model="isRead" ></label>
    <button @click="search">Check</button>
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
    }
},
computed: {},
unmounted() {},
}