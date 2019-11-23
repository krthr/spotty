<template>
  <v-container id="home" fluid>
    <v-row>
      <v-col class="py-0" cols="auto">
        <router-link
          active-class="font-weight-bold"
          class="white--text subtitle-2"
          :to="{ name: 'featured' }"
          >FEATURED</router-link
        >
      </v-col>
      <v-col class="py-0" cols="auto">
        <router-link
          active-class="font-weight-bold"
          class="white--text subtitle-2"
          :to="{ name: 'genres' }"
          >GENRES & MOODS</router-link
        >
      </v-col>
      <v-col class="py-0" cols="auto">
        <router-link
          active-class="font-weight-bold"
          class="white--text subtitle-2"
          :to="{ name: 'discover' }"
          >DISCOVER</router-link
        >
      </v-col>
    </v-row>

    <router-view></router-view>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
