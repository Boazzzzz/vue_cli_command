import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";

createApp(App).use(store).use(router).use(ViewUIPlus).mount("#app");
