<template>
    <previewphoto :image="image"></previewphoto>
</template>

<script>

import previewphoto from '~/components/previewphoto.vue';
import AppApi from '~apijs';

export default {
  layout: 'single-image',
  components: {
      previewphoto,
      AppApi
  },
  asyncData (context) {
    return AppApi.get_image(context.params.id).then(result => {
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
