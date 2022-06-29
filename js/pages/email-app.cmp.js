import { emailService } from "../apps/mail/services/email.services.js";
import emailList from "../apps/mail/cmps/email-list.cmp.js";
import emailDetails from "../apps/mail/pages/email-details.cmp.js";

export default {
 template: `
 <section v-if="emails" class="emails-app-main">
    <h1>Here are some emails</h1>
    <!-- <pre>{{ emails }}</pre> -->
    
    <email-list :emails="emailsForDisplay" />
    
    <router-view />
 </section>
`,
components: {
    emailList
},
data() {
return {
    emails: null
}
},
created() {
    emailService.query().then(emails => this.emails = emails)
},
methods: {},
computed: {
    emailsForDisplay() {
        const emails = this.emails
        // Here we need a check up for filters
        return emails
    }
},
unmounted() {},

}