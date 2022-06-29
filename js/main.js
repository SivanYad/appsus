import appHeader from "./cmps/app-header.cmp.js";
import { router } from './router.js';
import keepApp from "./pages/keep-app.cmp.js";
const options= {
 template: `
 <section>
    <app-header/>
    <keep-app/>
 </section>
`,
components: {
    appHeader,
    keepApp

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
