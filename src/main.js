import {createApp, reactive} from "vue";
import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.GLOBALS = reactive({
    profileList: [
        // { name: "Camille", img:"../logo.png" },
        { id: 1, name: "laurent", img:"notre_planete-susct.png" },
        { id: 2, name: "Will Smith (Erwan)", img:"carmen_sandiego-cbqxm.png" },
        { id: 3, name: "Dorian", img:"chasseurs_de_trolls-byuru.png" },
        { id: 4, name: "Maë", img:"dark_crystal-bjxvk.png" },
        { id: 0, name: "Ajouter un profil", img:"../addProfile.png" },
    ],
});

app.mount("#app");
