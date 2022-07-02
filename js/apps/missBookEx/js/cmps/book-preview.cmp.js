export default {
props: ["book"],
 template: `
 <p>Title: {{book.title}} </p>
 <p>Price: {{ formatPrice }} </p>
`,
data() {
return {
    price: this.book.listPrice.amount
}
},
created() {},
methods: {},
computed: {
    formatPrice() {
        let formater = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: this.book.listPrice.currencyCode
        })
        let formatedPrice = formater.format(this.price)
        return formatedPrice
    }
},
unmounted() {},
}