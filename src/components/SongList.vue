<template>
  <div>
    <song-list-item v-for="i of total" :key="i" dense></song-list-item>
  </div>
</template>

<script>
export default {
  name: "SongList",

  props: {
    total: {
      type: Number,
      default: 5
    }
  },

  components: {
    SongListItem: () => import("@/components/SongListItem.vue")
  }
};
</script>
