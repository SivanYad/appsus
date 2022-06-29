export default {
 props: ['emails'],
 template: `
    <section class="emails-list">
        <h2>This is the email list</h2>
        <ul>
            <li v-for="email in emails" :key="email.id" class="email-preview-container">
            
            </li>
    </ul>
    </section>

`,
data() {
return {}
},
created() {},
methods: {},
computed: {},
unmounted() {},
}