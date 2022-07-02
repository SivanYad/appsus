export default {
 template: `
<section class="book-filter">
    <pre> {{ filterBy }} </pre>
    <label>Filter by name<input type="text" v-model="filterBy.name" @input="filter"></label>
    <label>Price<input type="range" v-model="filterBy.price" @input="filter"></label>
</section>
`,
data() {
return {
    filterBy: {
        name: '',
        price: 0
    }
}
},
created() {},
methods: {
    filter() {
        this.$emit("filtered", this.filterBy)
    }
},
computed: {},
unmounted() {},
}