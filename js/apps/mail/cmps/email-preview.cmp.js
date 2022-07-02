import { emailService } from '../services/email.services.js';
import longText from '../../../cmps/long-text.cmp.js';

export default {
  props: ['email'],
  template: `
 <section class="email-preview">
    <p class="mail-info" :class="titleStyle">{{ email.subject }}</p>
    <long-text :text="email.body" />
 </section>
`,
components: {
    longText,
},
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
