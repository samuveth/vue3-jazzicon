import { createApp } from "vue";
import App from "./App.vue";
import Jazzicon from "./components";

const app = createApp(App);

app.component(Jazzicon.name, Jazzicon);

app.mount("#app");
