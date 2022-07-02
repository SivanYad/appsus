import { bookService } from "../services/book-service.js"

export default {
props: ["book"],
 template: `
    <section class="book-reviews">
        <h4>Book Reviews</h4>
        <form @submit.prevent="onSubmitReview">
            <label>Reviewer Name: <input ref="reviewerInput"  v-model="review.reviewWriter" type="text" placeholder="Enter your name"></label>
            <label>Date Read: <input   v-model="review.dateRead" type="date" placeholder="Enter the date"></label>
            <label for="grades">Rating (1- worst, 5-best)</label>
            <select v-model.number="review.rating" name="grades">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <textarea v-model="review.text" placeholder="Write your review text"></textarea>
            <button>Submit</button>
        </form>
    </section>

`,
data() {
return {
    
    review: {
        reviewWriter: null,
        dateRead: null,
        rating: 0,
        text: null,
    }
}
},
created() {

},
mounted() {
    this.$refs.reviewerInput.focus()
},
methods: {
    onSubmitReview() {
        bookService.postReview(this.book.id, this.review).then(() =>{
            console.log('Review updated successfully')
            this.$emit("reviewSubmited", this.review)
        }).catch(err => {
            console.log(err)
        })
    }
},
computed: {},
unmounted() {},
}