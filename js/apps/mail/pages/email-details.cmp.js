import { emailService } from '../services/email.services.js';



export default {
    props: ["emailId"],
 template: `
 <section  v-if="email" class="emails-details">
    <h1>Subject:  {{ this.email.subject }}</h1>
    <p>{{ this.email.body }}</p>
    <p>Sent At: {{formatDate}} </p>
    <p>To: {{this.email.to}}</p>
    <router-link to="/email">Back to list</router-link>
    <button @click="remove(email.id)">Delete Email</button>
 </section>
`,
data() {
return {
    email: null,
    // id: this.$route.params.emailId,
}
},
created() {
        console.log(this)
        const id = this.emailId
        console.log(id)
    emailService.get(id).then(email =>  {this.email = email
    })
},
methods: {
  
        /// delete in the morning use $emit or event bus instead, no access to email list
        remove(id){
            this.$emit('remove', id)

        }
    ,
    
},
computed: {
    formatDate() {
        const timestamp = this.email.sentAt
        let date = new Date(timestamp) 
        date = date.toLocaleString()
        return date
        },

},
watch: {
    emailId: {
        handler() {
            const id = this.emailId
            const email =   emailService.get(id).then(email =>  {this.email = email})
            return email
        },
        deep: true
    }
},
unmounted() {},
}