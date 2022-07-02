import { emailService } from '../services/email.services.js';
import longText from '../../../cmps/long-text.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';



export default {
    props: ["emailId"],
 template: `
 <section  v-if="email" class="emails-details">
    <h1>Subject:  {{ this.email.subject }}</h1>
    <!-- <p>{{ this.email.body }}</p> -->
    <long-text :text="email.body" />
    <p>Sent At: {{formatDate}} </p>
    <p>To: {{this.email.to}}</p>
    <router-link to="/email">Back to list</router-link>
    <button @click="remove(email.id)">Delete Email</button>
    <button @click="createNote">Create Note</button>
 </section>
`,
data() {
return {
    email: null,
    // id: this.$route.params.emailId,
}
},
components: {
    longText,
},
created() {

        const id = this.emailId

    emailService.get(id).then(email =>  {this.email = email
    })
},
methods: {
  
        /// delete in the morning use $emit or event bus instead, no access to email list
        remove(id){
            this.$emit('remove', id)

        },
        createNote() {

        },
    
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