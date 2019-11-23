<template>
  <div>
    <song-list-item-2 v-for="i in 5" :key="i"></song-list-item-2>
  </div>
</template>

<script>
export default {
  name: "SongList2",

  components: {
    SongListItem2: () => import("./SongListItem2.vue")
  }
};
</script>
