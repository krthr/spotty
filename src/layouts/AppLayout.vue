<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <div class="pa-5">
        <h1>
          <router-link to="/">Spotty</router-link>
        </h1>
      </div>

      <v-list>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          dense
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="elevation-0" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content class="pb-12">
      <router-view
        class="pa-5"
        style="padding-bottom: 140px !important"
      ></router-view>
    </v-content>

    <v-footer class="elevation-10" app fixed style="z-index: 10">
      <player></player>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "AppLayout",

  components: {
    Player: () => import("@/components/Player.vue")
  },

  data: () => ({
    drawer: true,

    menu: [
      {
        icon: "mdi-home",
        title: "Home",
        to: "/browse"
      },
      {
        icon: "mdi-magnify",
        title: "Search",
        to: {
          name: "search"
        }
      }
    ]
  })
};
</script>
