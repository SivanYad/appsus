import { emailService } from "../services/email.services.js"

export default {
 template: `
 <section class="compose-email-container">
    <form @submit.prevent="createMail">
        <div class="email-subject"><label>Email Subject:<input v-model="emailData.subject"  type="text" placeholder="Subject"></label></div>
        <div class="email-to"><label>To :<input v-model="emailData.to"  type="email" placeholder="To whom do you want to send it?"></label></div>
        <div class="email-body"><textarea v-model="emailData.body" placeholder="Write your email here"></textarea></div>
        <button>Send</button>
    </form>
 </section>
`,
data() {
return {
    emailData: {
        subject: null, 
        body: null,
        to: null,
    }
}
},
created() {},
methods: {
    createMail() {
        this.$emit('created', this.emailData)
    }
},
computed: {},
unmounted() {},
}