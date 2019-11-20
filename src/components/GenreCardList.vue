<template>
  <v-row>
    <v-col cols="6" sm="3" md="2" v-for="i of total" :key="i">
      <genre-card></genre-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "GenreCardList",

  props: {
    total: {
      type: Number,
      default: 5
    }
  },

  components: {
    GenreCard: () => import("@/components/GenreCard.vue")
  }
};
</script>
