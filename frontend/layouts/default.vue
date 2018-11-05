<template>
  <v-app id="inspire">
    <toolbar :state="layout"/>
    <v-content>
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </v-content>
    <v-snackbar
      :timeout="snack.timeout"
      :color="snack.color"
      bottom
      v-model="snack.visible"
    >
      {{snack.text}}
    </v-snackbar>
  </v-app>
</template>

<script>
  import toolbar from '~/components/toolbar.vue'
  import sidenavLeft from '~/components/sidenav-left.vue'
  import sidenavRight from '~/components/sidenav-right.vue'
  import footer from '~/components/footer.vue'
  export default {
    components: {
      toolbar,
      sidenavLeft,
      sidenavRight,
      leFooter: footer
    },
    data: () => ({
      layout: {
        drawer: true,
      },
    }),
    computed: {
      snack () {
        return this.$store.getters.snack
      }
    }
  }
</script>