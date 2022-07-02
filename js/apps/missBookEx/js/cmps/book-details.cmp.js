import { bookService } from "../services/book-service.js";
import bookDesc from "./book-desc.cmp.js";
import reviewAdd from "./review-add.cmp.js";

export default {
// props: ["book"],
 template: `
 <section v-if="book" class="book-details">
    <h4>Book Details</h4>
    <h5>Book Title: {{ book.title }}</h5>
    <p> {{ checkLength }} </p>
    <h5> {{ checkAge }}</h5>
    <p>Book ID: {{ book.id }}</p>
    <p v-bind:class="priceStyle" >Book price: {{ formatPrice }} </p>
    <p>Book description: {{ formatDesc }}

        <a v-on:click="shouldShowDesc = !shouldShowDesc">Read More</a> 
        <book-desc v-if="shouldShowDesc" v-bind:txt="book.description" />
    </p>
    <p> Book Page Count: {{ book.pageCount }} pages</p>
    <div v-for="(author, idx) in book.authors" class="authors-container">Author:

        <p> {{ author }} </p>
    </div>
    <review-add :book="book"  @reviewSubmited=submitReview  />
 </section>
`,
components:{
    bookDesc,
    reviewAdd
  },
data() {
return {
    price: null,
    shouldShowDesc: false,
    book: null, 
    reviews: []
}
},
created() {
    console.log(this.$route)
    const id = this.$route.params.bookId
    bookService.get(id).then(book => {this.book = book
        this.price = this.book.listPrice.amount
        // console.log(this.book)
 
    })

},
methods: {
    submitReview(review) {
        this.reviews.push(review)
    }
},
computed: {
    formatPrice() {
        let formater = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: this.book.listPrice.currencyCode
        })
        let formatedPrice = formater.format(this.price)
        return formatedPrice
    },
    checkLength() {
        if (this.book.pageCount > 500) {
            return 'Long Reading'
        } else if (this.book.pageCount > 200 && this.book.pageCount < 500) {
            return 'Decent Reading'
        } else {
            return 'Light Reading'
        }
    },
    checkAge() {
        const currYear = new Date().getFullYear()
        console.log(currYear)
        console.log( this.book.publishedDate)
        let yearDiff = currYear - this.book.publishedDate
        console.log(yearDiff)
        if (yearDiff > 10) {
            return 'Veteran Book'
        } else if (yearDiff < 1) {
            return 'New Book!!!'
        } 


    },
    priceStyle() {
        return { low: this.book.listPrice.amount < 20, high: this.book.listPrice.amount > 150}
    },
    formatDesc() {
        const desc = this.book.description
        console.log(desc.length)
        if (desc.length > 100) {
            
            return desc.slice(0, 100)
        } else {
            return desc
        }
    },
},
unmounted() {},
}