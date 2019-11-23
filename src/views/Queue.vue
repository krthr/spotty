<template>
  <v-container id="playlist" fluid>
    <v-row>
      <v-col>
        <h1>Play Queue</h1>

        <v-subheader>ACTUAL</v-subheader>

        <song-list :total="1"></song-list>

        <v-list style="background: none">
          <v-subheader>NEXT</v-subheader>

          <song-list></song-list>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Queue",

  components: {
    SongList: () => import("@/components/SongList.vue")
  }
};
</script>
