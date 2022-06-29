import appHeader from "./cmps/app-header.cmp.js";
import { router } from './router.js';
import emailApp from "./pages/email-app.cmp.js";

const options= {
 template: `
 <section>
    <app-header/>
    <email-app />
    <!-- <router-view/> -->
 </section>
`,
components: {
    appHeader,
    emailApp

},
data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
};

const app = Vue.createApp(options);
app.use(router)
app.mount('#app');
