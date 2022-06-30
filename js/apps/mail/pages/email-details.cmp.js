import { emailService } from '../services/email.services.js';



export default {
 template: `
 <section v-if="email" class="emails-details">
    <h1>Subject:  {{ this.email.subject }}</h1>
    <p>{{ this.email.body }}</p>
    <p>Sent At: {{formatDate}} </p>
    <p>To: {{this.email.to}}</p>
    <router-link to="/email">Back to list</router-link>
 </section>
`,
data() {
return {
    email: null,
    id: this.$route.params.emailId,
}
},
created() {
    const id = this.id
    console.log(id)
    emailService.get(id).then(email =>  {this.email = email
     console.log(this.email)
    })
},
methods: {
    deleteMail(emailId) {
        
    }
    
},
computed: {
    formatDate() {
        const timestamp = this.email.sentAt
        let date = new Date(timestamp) 
        date = date.toLocaleString()
        return date
        }
},
unmounted() {},
}