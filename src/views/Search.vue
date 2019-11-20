<template>
  <v-container fluid id="search">
    <v-row>
      <v-col class="py-0" cols="12" sm="8" md="6">
        <v-text-field
          clearable
          filled
          hide-details
          label="Search for Artists, Albums, or Songs"
          prepend-inner-icon="mdi-magnify"
          rounded
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Songs</h1>
          </v-col>

          <v-col cols="auto">
            <v-btn small text>See all</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-list class="pa-0">
              <song-list-item v-for="i in 5" :key="i"></song-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Artists</h1>
          </v-col>

          <v-col cols="auto">
            <v-btn small text>See all</v-btn>
          </v-col>
        </v-row>

        <artist-card-list></artist-card-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Albums</h1>
          </v-col>

          <v-col cols="auto">
            <v-btn small text>See all</v-btn>
          </v-col>
        </v-row>

        <album-card-list></album-card-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Genres</h1>
          </v-col>

          <v-col cols="auto">
            <v-btn small text>See all</v-btn>
          </v-col>
        </v-row>

        <genre-card-list></genre-card-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Search",

  components: {
    AlbumCardList: () => import("@/components/AlbumCardList.vue"),
    ArtistCardList: () => import("@/components/ArtistCardList.vue"),
    GenreCardList: () => import("@/components/GenreCardList.vue"),
    SongListItem: () => import('@/components/SongListItem.vue')
  }
};
</script>
