<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="album-card" flat style="background: transparent">
      <v-card-text>
        <v-img
          class="elevation-10"
          src="https://direct.rhapsody.com/imageserver/images/alb.261770523/500x500.jpg"
        >
          <v-overlay absolute :value="hover">
            <v-icon size="60">mdi-play-circle-outline</v-icon>
          </v-overlay>
        </v-img>
      </v-card-text>

      <v-card-text class="pt-0 text-center" >
        <p class="body-2 font-weight-medium ma-0 text-truncate white--text">
          <router-link
            :to="{
              name: 'album',
              params: {
                id: 1
              }
            }"
          >
            The Moon Song - Film Version
          </router-link>
        </p>
        <p class="caption font-weight-light mb-4 text-truncate">
          Varios artistas
        </p>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "AlbumCard2"
};
</script>
