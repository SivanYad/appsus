import bookPreview from "./book-preview.cmp.js"

export default {
    props: ["books"],
 template: `
 <section class="books-list">
    <ul>
        <li v-for="(book, idx) in books" :key="book.id" class="book-preview-container">
            <book-preview :book="book" />
            <div class="action">
                <button @click="remove(book.id)">X</button>
                <button @click="select(book)">Details</button>
            </div>
        </li>
    </ul>
 </section>
`,
components: {
    bookPreview
},
data() {
return {}
},
created() {},
methods: {
    remove(bookId) {
        this.$emit("removed", bookId)
    },
    select(book) {
        // console.log("Selected book", book)
        this.$emit("selected", book)
    }
},
computed: {},
unmounted() {},
}