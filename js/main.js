
import appHeader from "./cmps/app-header.cmp.js"

import { router } from "./router.js";

const options = {
  template: `
        <section>
            <app-header />
            <router-view />
        </section>
    `,
  components: {
    appHeader,


  },
};

const app = Vue.createApp(options);
app.use(router)
app.mount("#app");