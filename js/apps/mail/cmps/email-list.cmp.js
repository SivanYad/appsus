import emailPreview from "./email-preview.cmp.js"

export default {
 props: ['emails'],
 template: `
    <section class="emails-list">

        <ul class="clean-list">
            <li  v-for="email in emails" :key="email.id" class="email-preview-container">
                <i class="fas fa-star"></i>
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
    },
    addStar() {

    }
    
},
computed: {
    
},
unmounted() {},
}