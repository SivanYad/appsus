import { bookService } from "../services/book-service.js"
import bookList  from "./book-list.js"
import bookDetails from "./book-details.cmp.js"
import bookFilter from "./book-filter-cmp.js"

export default {
 template: `
 <!-- <pre>{{ books }}</pre> -->
    <section class="book-app">
        <h1>Books:</h1>
        <book-filter @filtered="filterBook" />
        <book-list @removed="removeBook" @selected="selectBook" :books="booksToShow"/>
        <!-- <book-details v-if ="selectedBook"  :book="selectedBook" /> -->
    </section>
`,
components:{
    bookFilter,
    bookList,
    // bookDetails
  },
data() {
return {
    books: [],
    filterBy: null,
    selectedBook: null
}
},
created() {
    // this.books = bookService.query()
    bookService.query().then(books => this.books = books)
},
methods: {
    removeBook(bookId) {
        bookService.remove(bookId).then(() => {
            console.log('Deleted successfully');
            const idx = this.books.findIndex((book) => book.id === bookId);
            this.books.splice(idx, 1)
        }).catch(err => {
            console.log(err)
        })
    },
    selectBook(book) {
        console.log("Selected book", book)
        this.selectedBook = book
        console.log("slected book in return", this.selectedBook)
    },
    filterBook(filterBy) {
        this.filterBy= filterBy;
    },

    
},
computed: {
    booksToShow() {
        // console.log(this.filterBy)
        if (!this.filterBy) return this.books
        const regex = new RegExp(this.filterBy.name, "i")
        var books = this.books.filter(
            (book) => {
          
                return regex.test(book.title) &&
                book.listPrice.amount >= this.filterBy.price
            })
        console.log(books)    
        return books 
    },
    // carsToDisplay() {
    //     console.log(this.filterBy)
    //     if (!this.filterBy) return this.books;
    //     const regex = new RegExp(this.filterBy.vendor, "i");
    //     return this.cars.filter((car) => regex.test(car.vendor));
    //   },
},
unmounted() {},
}