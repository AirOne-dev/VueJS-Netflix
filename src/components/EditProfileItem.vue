<script>
import NavbarItem from "./NavbarItem.vue";

export default {
  name: "EditProfileItem",
  components: { NavbarItem },
  data() {
    return {
      profile: this.GLOBALS.profileList.find(profile => profile.id == window.location.hash.split('#edit-')[1]),
    };
  },
  methods: {
  }
}
</script>

<template>
  <NavbarItem />
  <div class="container">
    Edition profil {{profile}}
    <a href="#edit">
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