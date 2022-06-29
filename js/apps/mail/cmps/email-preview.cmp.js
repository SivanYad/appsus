export default {
props: ['email'],
 template: `
 <section class="email-preview">
    <h4>{{ email.subject }}</h4>
    <p> {{email.body}} </p>
    <p>{{ email.isRead }}</p>
 </section>
`,
data() {
return {}
},
created() {},
methods: {
    titleStyle() {
        return { bold: this.email.isRead === true,  }
    }
},
computed: {},
unmounted() {},
}