import bookApp from "./cmps/book-app.js"
import appHeader from "./cmps/app.header.cmp.js";
import appFooter from "./cmps/app-footer.cmp.js";
import { router } from "./router.js";

const options = {
  template: `
        <section>
            <app-header />
            <book-app />
            <router-view />
        </section>
    `,
  components: {
    appHeader,
    appFooter,

  },
};

const app = Vue.createApp(options);
app.use(router)
app.mount("#app");