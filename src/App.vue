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
