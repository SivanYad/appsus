export default {
props: ['email'],
 template: `
 <section class="email-preview">
    <h4 :class="titleStyle">{{ email.subject }}</h4>
    <p> {{email.body}} </p>
 </section>
`,
data() {
return {}
},
created() {},
methods: {
    
},
computed: {
    titleStyle() {
        return { bold: this.email.isRead === true, light: this.email.isRead === false }
    }
},
unmounted() {},
}