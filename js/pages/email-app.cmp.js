import { emailService } from "../apps/mail/services/email.services.js";
import { router } from "../router.js";
import emailList from "../apps/mail/cmps/email-list.cmp.js";
import emailDetails from "../apps/mail/pages/email-details.cmp.js";

export default {
 template: `
 <section v-if="emails" class="emails-app-main">
    <h1>Here are some emails</h1>

    
    <email-list :emails="emailsForDisplay"  @selected="selectEmail" />
    <email-details v-if="isMailClicked"  :emailId="emailId" />
    <router-view />
 </section>
`,
components: {
    emailList,
    emailDetails
},
data() {
return {
    emails: null,
    isMailClicked: false,
    emailId: null
}
},
created() {
    emailService.query().then(emails => this.emails = emails)
},
methods: {
    selectEmail(email) {
        console.log("Selected email")
        this.isMailClicked = true
        this.emailId = email.id
        
        router.push({ path: `/email/${this.emailId}` }) 
        // router.push({ name: 'email', params: { emailId: this.emailId} })
    }
},
computed: {
    emailsForDisplay() {
        const emails = this.emails
        // Here we need a check up for filters
        return emails
    },
    // showEmailDetails() {
    //     return this.em
    // }
},
unmounted() {},

}