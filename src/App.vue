<script>
import ChooseProfileItem from "./components/ChooseProfileItem.vue";
import EditProfileItem from "./components/EditProfileItem.vue";
import HomeProfileItem from "./components/HomeProfileItem.vue";

const routes = {
  "" : ChooseProfileItem,
  "#edit" : EditProfileItem,
  "#home" : HomeProfileItem,
}

export default {
  components: { ChooseProfileItem, EditProfileItem, HomeProfileItem },
  data() {
    return {
      location: ''
    }
  },
  computed: {
    page() {
      return this.location
    },
    view() {
      return routes[this.page.split('-')[0]]
    }
  },
  mounted() {
    window.addEventListener('hashchange', (e) => {
      if(window.location.hash !== '#edit') {
        this.location = window.location.hash
      } else if (e.oldURL.includes('#edit-')) {
        this.location = '';
      }
    })
  }
};
</script>

<template>
  <section class="main">
    <component :is="view" />
  </section>
</template>

<style lang="scss">
@import "./assets/base.scss";
html {
  height: 100%;
}

body {
  background-color: $bg-color;
  color: $font-color01;
  font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
  height: 100%;

  #app {
    height: 100%;

    .main {
      height: 100%;
    }
  }
}
</style>
