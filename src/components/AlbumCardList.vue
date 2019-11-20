<template>
  <v-row>
    <v-col cols="6" sm="3" md="2" v-for="i of 4" :key="i">
      <album-card></album-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AlbumCardList",

  components: {
    AlbumCard: () => import("@/components/AlbumCard.vue")
  }
};
</script>
