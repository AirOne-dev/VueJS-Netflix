<script>
export default {
  name: "ProfileItem",
  props: [ "profile", "editing" ],
  methods: {
    clickProfile: function(profile) {
      if(this.editing && profile.img !== '../addProfile.png') {
        this.editProfile(profile);
      } else {
        this.openProfile(profile);
      }
    },
    editProfile: function (profile) {
      window.location.hash = 'edit-' + profile.id;
    },
    openProfile: function(profile) {
      window.location.hash = 'home-' + profile.id;
    }
  }
};
</script>

<template>
  <div :class="'profile' + (editing ? ' profile--editing' : '')">
    <div @click="clickProfile(profile)" class="profile-img" :style="'background-image: url(/assets/img/profile/'+profile.img+')'">
      <div v-if="editing && profile.img !== '../addProfile.png'" class="profile-editing"></div>
    </div>
    <span class="profile-name">{{ profile.name }}</span>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

.profile {
  margin: 0 16px;
  cursor: pointer;
  text-align: center;

  &-editing {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000082;
    background-image: url("assets/img/edit-icon.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  &-img {
    position: relative;
    width: 144px;
    height: 144px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  &-name {
    color: $font-color02;
  }

  &:hover {
    .profile {
      &-img {
        background-color: $hvr-color;
        box-shadow: 0 0 0 3px $hvr-color inset;
      }
      &-name {
        color: $font-color01;
      }
    }
  }

}
</style>
