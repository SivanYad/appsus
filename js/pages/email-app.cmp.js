import { emailService } from '../apps/mail/services/email.services.js'
import { router } from '../router.js'
import emailList from '../apps/mail/cmps/email-list.cmp.js'
import emailDetails from '../apps/mail/pages/email-details.cmp.js'
import emailCompose from '../apps/mail/cmps/email-compose.cmp.js'
import emailFilter from '../apps/mail/cmps/email-filter.cmp.js'
import emailNav from '../cmps/email-nav-cmp.js'

export default {
  template: `
 <section v-if="emails" class="emails-app-main flex">
   <div class="email-nav flex">
     <button class="create-email-btn" @click="isCompose = !isCompose">New Email <i class="fas fa-plus"></i></button>
     <email-nav @statusChanged="setStatus" />
    </div>
    <div class="email-container">
      <email-filter @filtered="filterEmails" />
      <email-compose v-if="isCompose" @created="setCreateEmail" />
      <email-list  :emails="emails"  @selected="selectEmail" />
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
    emailNav,
  },
  data() {
    return {
      emails: null,
      isMailClicked: false,
      emailId: null,
      isCompose: false,
      filterBy: null,
      status: 'inbox',
    }
  },
  created() {
    let criteria = this.getCriteria()
    console.log(criteria)
    // console.log('Emails start', this.emails)
    emailService.query(criteria).then((emails) => (this.emails = emails))
  },
  methods: {
    setCreateEmail(emailData) {
      emailData.sentAt = Date.now()
      emailData.isRead = false
      emailData.labels = []
      emailData.status = 'sent'
      console.log(emailData)
      emailService
        .save(emailData)
        .then((email) => {
          let criteria = this.getCriteria()
          emailService.query(criteria).then((emails) => (this.emails = emails))
        })
        .catch((err) => {
          console.log(err)
        })
    },
    selectEmail(email) {
      console.log('Selected email')
      this.isMailClicked = true
      this.emailId = email.id
      email.isRead = true
      let criteria = this.getCriteria()
      emailService
        .save(email)
        .then((email) => {
          emailService.query(criteria).then((emails) => (this.emails = emails))
        })
        .catch((err) => {
          console.log(err)
        })
      router.push({ path: `/email/${this.emailId}` })
      // router.push({ name: 'email', params: { emailId: this.emailId} })
    },
    removeEmail(id) {
        // console.log('remove')
        const criteria = this.getCriteria()
        const idx = this.emails.findIndex((email) => email.id === id)
        const email = this.emails[idx]
      if (email.status !== 'trash') {
        email.status = 'trash'
        this.emails.splice(idx, 1)
        this.isMailClicked = false
        emailService
        .save(email)
            .then((email) => {
                emailService.query(criteria).then((emails) => (this.emails = emails))
            })

      } else {
        console.log('else')
        emailService
          .remove(id)
          .then(() => {
            // console.log(`Deleted successfully ${id}`)
            this.isMailClicked = false
            // const idx = this.emails.findIndex((email) => email.id === id)
            this.emails.splice(idx, 1)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    filterEmails(criteria) {
      this.filterBy = criteria
      console.log(this.filterBy)
    },
    setStatus(status) {
      this.status = status
      console.log(this.status)
    },
    getCriteria() {
      let criteria
      if (this.filterBy) {
        criteria = { ...this.filterBy, status: this.status }
      } else {
        criteria = { status: this.status }
      }
      return criteria
    },
  },
  computed: {
    // emailsForDisplay() {
    //     let criteria = this.getCriteria()
    //     emailService.query(criteria).then((emails) => (this.emails = emails))
    //     // console.log(this.emails)
    //     return this.emails
    // return this.emails
    //   if (!this.filterBy) {
    //     return this.emails
    //   } else {
    //     const regex = new RegExp(this.filterBy.txtSearch, 'i')
    //     let emails = this.emails.filter(
    //         (email) => {
    //             return regex.test(email.body) &&
    //             email.isRead === this.filterBy.isRead
    //         })
    //         console.log(emails)
    //         return emails
    //   }
    // },
    // showEmailDetails() {
    //     return this.em
    // }
  },
  watch: {
    filterBy: {
      handler() {
        let criteria = this.getCriteria()
        const emails = emailService
          .query(criteria)
          .then((emails) => (this.emails = emails))
        return emails
      },
      deep: true,
    },
    status: {
      handler() {
        let criteria = this.getCriteria()
        const emails = emailService
          .query(criteria)
          .then((emails) => (this.emails = emails))
        return emails
      },
      deep: true,
    },
  },
  unmounted() {},
}
