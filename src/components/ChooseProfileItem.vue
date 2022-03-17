<script>
import NavbarItem from "./NavbarItem.vue";
import ProfileItem from "./ProfileItem.vue";

export default {
  name: "ChooseProfileItem",
  components: { NavbarItem, ProfileItem },
  data() {
    return {
      profileList: [
        // { name: "Camille", img:"../logo.png" },
        { id: 1, name: "laurent", img:"notre_planete-susct.png" },
        { id: 2, name: "Will Smith (Erwan)", img:"carmen_sandiego-cbqxm.png" },
        { id: 3, name: "Dorian", img:"chasseurs_de_trolls-byuru.png" },
        { id: 4, name: "Maë", img:"dark_crystal-bjxvk.png" },
        { id: 0, name: "Ajouter un profil", img:"../addProfile.png" },
      ],
      manageProfiles: window.location.hash === '#edit',
    };
  },
  methods: {
    switchManage: function() {
      this.manageProfiles = !this.manageProfiles;
      window.location.hash = this.manageProfiles ? 'edit' : '';
    },
  }
}
</script>

<template>
  <NavbarItem />
  <div class="container">
    <span class="container-title">{{!manageProfiles ? 'Qui est-ce ?' : 'Gestion des profils :'}}</span>
    <div class="container-profileList">
      <ProfileItem v-for="profile in profileList" :profile="profile" :editing="manageProfiles" />
    </div>
    <div @click="switchManage" class="container-manageProfilesButton">Gérer les profils</div>
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

    &-profileList {
      display: flex;
      flex-direction: row;
      flex-flow: wrap;
    }

    &-title {
      font-size: 50px;
      margin-bottom: 25px;
     }

    &-manageProfilesButton {
      color: $font-color02;
      font-size: 20px;
      margin-top: 60px;
      font-weight: normal;
      border: solid 1px $font-color02;
      padding: 8px 20px;
      cursor: pointer;

      &:hover {
        color: $font-color01;
        border: solid 1px $font-color01;
      }
    }
  }
</style>