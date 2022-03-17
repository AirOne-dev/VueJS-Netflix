<script>
import NavbarItem from "./NavbarItem.vue";

export default {
  name: "HomeProfileItem",
  components: { NavbarItem },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<template>
  <NavbarItem />
  <div class="container">
    Regardez vos séries préférées
    <a href="#">
      <button>Retour</button>
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  transform: translateY(-50px);
}
</style>