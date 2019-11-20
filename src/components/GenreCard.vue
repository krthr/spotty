<template>
  <v-card class="genre-card" flat>
    <v-card-text>
      <v-img
        class="elevation-10"
        src="https://direct.rhapsody.com/imageserver/images/alb.261770523/500x500.jpg"
      >
      </v-img>
    </v-card-text>

    <v-card-text class="pt-0">
      <p class="body-2 font-weight-medium ma-0 text-truncate white--text">
        Indie
      </p>
      <p class="caption font-weight-light mb-4 text-truncate">
        Genre
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "GenreCard"
};
</script>
