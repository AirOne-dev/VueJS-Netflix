import {createApp, reactive} from "vue";
import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.__page__ = reactive({ url: '' });

app.mount("#app");
