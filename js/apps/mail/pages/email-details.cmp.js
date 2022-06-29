import { emailService } from '../services/email.services.js';



export default {
 template: `
 <section v-if="email" class="emails-details">
    <h1>Subject:  {{ this.email.subject }}</h1>
    <p>{{ this.email.body }}</p>
    <p>Sent At: </p>
 </section>
`,
data() {
return {
    email: null
}
},
created() {
    const id = this.$route.params.emailId
    console.log(id)
    emailService.get(id).then(email =>  {this.email = email
     console.log(this.email)
    })
},
methods: {
    formatDate() {
    const timestamp = this.email.sentAt
    let date = new Date(timestamp) 
    date = date.toLocaleString()
    return date
    }
},
computed: {},
unmounted() {},
}