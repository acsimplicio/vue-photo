<template>
  <h1>página de view  da image de id {{id}}</h1>
</template>

<script>

export default {
  layout: 'single-image',
  asyncData (context) {
    return {
      id: context.params.id
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
