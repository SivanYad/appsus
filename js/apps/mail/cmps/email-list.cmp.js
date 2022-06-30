import emailPreview from "./email-preview.cmp.js"

export default {
 props: ['emails'],
 template: `
    <section class="emails-list">
        <h2>This is the email list</h2>
        <ul>
            <li  v-for="email in emails" :key="email.id" class="email-preview-container">
               <email-preview :email="email" @click="openMail(email)" /> 
            </li>
    </ul>
    </section>

`,
components: {
    emailPreview,
},
data() {
return {}
},
created() {},
methods: {
    openMail(email) {
        this.$emit("selected", email)
    }
},
computed: {},
unmounted() {},
}