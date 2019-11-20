<template>
  <v-row>
    <v-col cols="6" sm="3" md="2" v-for="i of 4" :key="i">
      <artist-card></artist-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ArtistCardList",

  components: {
    ArtistCard: () => import("@/components/ArtistCard.vue")
  }
};
</script>
