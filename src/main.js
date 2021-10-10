import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Internationalization
import { createI18n } from "vue-i18n/index";
import i18n_config from "@/plugins/i18n";
const i18n = createI18n(i18n_config);
store.$i18n = i18n; // Accessible via this.$i18n inside store

createApp(App).use(store).use(router).use(i18n).mount("#app");
