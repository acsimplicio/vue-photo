<template>
  <v-app id="inspire">
    <toolbar/>
    <subnav/>
    <v-content>
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import toolbar from '~/components/toolbar.vue';
  import subnav from '~/components/subnav.vue';

  export default {
    components: {
      toolbar,
      subnav
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