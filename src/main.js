import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/index";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App).use(Antd).use(router);

app.mount("#app");
