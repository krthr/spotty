<template>
  <v-container id="artist" fluid>
    <v-row class="pa-10 pb-0 artist-header align-end">
      <v-col>
        <span class="caption">110,491 MONTHLY LISTENERS </span>
        <h1 class="display-3 font-weight-bold">Foreign Fields</h1>
      </v-col>

      <v-col class="pb-0" cols="12">
        <v-tabs background-color="transparent" color="white">
          <v-tab
            :to="{
              name: 'artist',
              params: {
                id: $route.params.id
              }
            }"
            >Overview</v-tab
          >
          <v-tab
            :to="{
              name: 'artist-about',
              params: {
                id: $route.params.id
              }
            }"
            >About</v-tab
          >
        </v-tabs>
      </v-col>
    </v-row>

    <router-view class="px-7"></router-view>
  </v-container>
</template>

<style scoped>
#artist {
  padding: 0 !important;
}

.artist-header {
  background-image: linear-gradient(
      10deg,
      rgba(48, 48, 48, 1),
      rgba(0, 0, 0, 0)
    ),
    url(https://i.scdn.co/image/4580875e55e928fb680549968b26cc1a53841d34);
  background-position: 50%;
  background-size: cover;
  height: 320px;
}
</style>
