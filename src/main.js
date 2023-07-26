import { createApp } from "vue";
import App from "./App.vue";
import tailWind from "../dist/output.css";

createApp(App).use(tailWind).mount("#app");
