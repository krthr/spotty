<template>
  <div>
    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Recently played</h1>
          </v-col>
        </v-row>

        <album-card-list></album-card-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row class="align-start">
          <v-col>
            <h1 class="headline font-weight-bold">Recommended for today</h1>
            <p class="body-2">Inspired by your recent activity.</p>
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
            <h1 class="headline font-weight-bold">Made for you ;)</h1>
            <p class="body-2">
              Get better recommendations the more you listen.
            </p>
          </v-col>

          <v-col cols="auto">
            <v-btn small text>See all</v-btn>
          </v-col>
        </v-row>

        <album-card-list></album-card-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Featured",

  components: {
    AlbumCardList: () => import("@/components/AlbumCardList.vue")
  }
};
</script>
