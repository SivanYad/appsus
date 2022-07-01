import { emailService } from "../apps/mail/services/email.services.js";
import { router } from "../router.js";
import emailList from "../apps/mail/cmps/email-list.cmp.js";
import emailDetails from "../apps/mail/pages/email-details.cmp.js";
import emailCompose from "../apps/mail/cmps/email-compose.cmp.js";
import emailFilter from "../apps/mail/cmps/email-filter.cmp.js";
import emailNav from "../cmps/email-nav-cmp.js";

export default {
    template: `
 <section v-if="emails" class="emails-app-main flex">
    <div class="email-nav flex">
    <email-nav/>
    </div>
    <div>
    <email-filter />
    <email-list  :emails="emailsForDisplay"  @selected="selectEmail" />
    <button @click="isCompose = !isCompose">Write Email</button>
    <email-compose v-if="isCompose" @created="setCreateEmail" />
    <email-details v-if="isMailClicked"  :emailId="emailId" @remove="removeEmail" />
    <router-view />
    </div>
 </section>

`,
    components: {
        emailFilter,
        emailList,
        emailDetails,
        emailCompose,
        emailNav
    },
    data() {
        return {
            emails: null,
            isMailClicked: false,
            emailId: null,
            isCompose: false
        }
    },
    created() {
        emailService.query().then(emails => this.emails = emails)
    },
    methods: {
        setCreateEmail(emailData) {
            emailData.sentAt = Date.now()
            emailData.isRead = false
            emailData.labels = []
            console.log(emailData)
            emailService.save(emailData).then((email) => {
                emailService.query().then(emails => this.emails = emails)
            }).catch(err => {
                console.log(err)
            })
        },
        selectEmail(email) {
            console.log("Selected email")
            this.isMailClicked = true
            this.emailId = email.id

            router.push({ path: `/email/${this.emailId}` })
            // router.push({ name: 'email', params: { emailId: this.emailId} })
        },
        removeEmail(id) {
            emailService.remove(id)
                .then(() => {
                    console.log(`Deleted successfully ${id}`)
                    this.isMailClicked = false
                    const idx = this.emails.findIndex((email) => email.id === id)
                    this.emails.splice(idx, 1)

                }).catch(err => {
                    console.log(err)
                })
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
    unmounted() { },

}