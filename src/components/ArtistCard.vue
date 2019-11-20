<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="artist-card" flat>
        <v-card-text>
          <v-img
            class="elevation-10"
            src="https://direct.rhapsody.com/imageserver/images/alb.261770523/500x500.jpg"
            style="border-radius: 50%"
          >
          </v-img>
        </v-card-text>

        <v-card-text class="pt-0">
          <p class="body-2 font-weight-medium ma-0 text-truncate white--text">
            Army of Bones
          </p>
          <p class="caption font-weight-light mb-4 text-truncate">
            Artist
          </p>
        </v-card-text>

        <v-overlay absolute opacity="0" :value="hover">
          <v-icon size="35">mdi-play-circle-outline</v-icon>
        </v-overlay>
      </v-card>
    </template>
  </v-hover>
</template>
