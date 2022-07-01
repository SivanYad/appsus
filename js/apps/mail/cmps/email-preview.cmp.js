import { emailService } from '../services/email.services.js';

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
  methods: {},
  computed: {
    titleStyle() {
      return {
        light: this.email.isRead === true,
        bold: this.email.isRead === false,
      }
    },
  },
  unmounted() {},
//   watch: {
//     email: {
//         handler() {
//             const id = this.email.id
//             const email =   emailService.get(id).then(email =>  {this.email = email})
//             return email
//         },
//         deep: true
//     }
//   },
}
