<template>
  <v-row>
    <v-col cols="6" sm="4" md="3" v-for="i of 5" :key="i">
      <album-card-2></album-card-2>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AlbumCardList2",

  components: {
    AlbumCard2: () => import("@/components/AlbumCard2.vue")
  }
};
</script>
