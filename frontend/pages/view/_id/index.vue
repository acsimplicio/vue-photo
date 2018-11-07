<template>
  <singleviewer :image="image"></singleviewer>
</template>

<script>

import singleviewer from '~/components/singleviewer.vue';
import AppApi from '~apijs';

export default {
  layout: 'single-image',
  components : {
    singleviewer
  },
  asyncData (context) {
    return AppApi.get_image(context.params.id).then(result => {
      console.log("this result", result)
      return {
        image: result.data
      }          
    });
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
