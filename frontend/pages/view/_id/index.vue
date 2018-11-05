<template>
  <singleviewer :id="id"></singleviewer>
</template>

<script>

import singleviewer from '~/components/singleviewer.vue';

export default {
  layout: 'single-image',
  components : {
    singleviewer
  },
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
