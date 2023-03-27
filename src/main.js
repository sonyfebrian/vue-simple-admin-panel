import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import vSelect from "vue-select"; //import vue-select
import "vue-select/dist/vue-select.css"; //import css vue-select
import { createVfm } from "vue-final-modal";
import "vue-final-modal/style.css";

const app = createApp(App);

app.component("v-select", vSelect); //use secara global
const vfm = createVfm();

app.use(vfm).mount("#app");
