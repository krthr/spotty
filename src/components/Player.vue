<template>
  <v-row class="grow-column">
    <v-col class="py-0" cols="12" sm="auto">
      <v-row class="justify-center align-center" style="height: 100%;">
        <v-col cols="auto">
          <v-img
            class="elevation-10"
            src="https://direct.rhapsody.com/imageserver/images/alb.261770523/500x500.jpg"
            width="56"
            height="56"
          ></v-img>
        </v-col>
        <v-col class="pl-1 text-truncate">
          <span>
            <router-link class="body-2 font-weight-medium ma-0" to="#">
              The Moon Song - Film Version
            </router-link>
          </span>
          <br />
          <span class="caption font-weight-light">
            <router-link class="ma-0" to="#">
              Scarlett Johansson </router-link
            >,
            <router-link class="ma-0" to="#">
              Joaquin Phoenix
            </router-link>
          </span>
        </v-col>
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="py-0 d-flex align-center">
      <v-row class="justify-center align-center">
        <div
          v-for="icon of [
            'shuffle',
            'skip-previous',
            'play-circle',
            'skip-next',
            'repeat'
          ]"
          :key="icon"
          class="mx-3"
        >
          <v-btn
            icon
            :small="icon != 'play-circle'"
            :x-large="icon == 'play-circle'"
          >
            <v-icon v-text="`mdi-${icon}`"></v-icon>
          </v-btn>
        </div>
        <div class="ml-5 caption hidden-sm-and-down">
          -4:53
        </div>
      </v-row>
    </v-col>
    <v-col class="d-flex align-center" cols="auto">
      <v-btn :to="{ name: 'queue' }" icon>
        <v-icon>mdi-playlist-play</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Player"
};
</script>
