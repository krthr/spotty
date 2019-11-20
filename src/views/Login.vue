<template>
  <v-container class="fill-height">
    <v-row class="align-center justify-center">
      <v-col cols="12" sm="5" md="4">
        <v-card class="elevation-10">
          <v-card-title class="text-center">Sign In</v-card-title>

          <v-card-text>
            <v-form>
              <v-text-field
                clearable
                dense
                filled
                label="Email"
                rounded
                type="email"
              ></v-text-field>
              <v-text-field
                clearable
                dense
                filled
                label="Password"
                rounded
                type="password"
              ></v-text-field>

              <v-btn color="primary" rounded width="100%" @click="login()"
                >Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  methods: {
    async login() {
      // TODO login method

      this.$router.push("/");
    }
  }
};
</script>
