<template>
  <v-app id="inspire">
    <toolbar/>
    <v-content>
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import toolbar from '~/components/toolbar.vue'
  
  export default {
    components: {
      toolbar
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