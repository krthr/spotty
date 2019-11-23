<template>
  <div>
    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Popular</h1>
          </v-col>
        </v-row>

        <song-list-2></song-list-2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Albums</h1>
          </v-col>
        </v-row>

        <album-card-list-2></album-card-list-2>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AlbumOverview",

  components: {
    AlbumCardList2: () => import("@/components/AlbumCardList2.vue"),
    SongList2: () => import("@/components/SongList2.vue")
  }
};
</script>
