<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.album-card .v-overlay__content,
.artist-card .v-overlay__content {
  position: absolute !important;
  bottom: 10px;
  right: 10px;
}

a {
  color: inherit !important;
  text-decoration: none !important;
}

.album-card,
.artist-card,
.genre-card {
  border-radius: 4px !important;
  cursor: pointer;
}
</style>
