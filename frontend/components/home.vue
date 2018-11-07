<template>
    <div class='main-content'>
      <searchbox v-model='searchbox'/>
      <div class='images-container'>
          <image-card :image='image' v-for="image in filteredImages" :key="image"></image-card>
      </div>
    </div>
</template>

<script>

import imageCard from '~/components/image-card.vue';
import searchbox from '~/components/searchbox.vue';
import AppApi from '~apijs';

export default {
    components: {
    'image-card' : imageCard,
    searchbox
  },
  data () {
    return {
      searchbox: '',
      images: []
    }
  },
  mounted () {
    AppApi.list_images().then(result => {
      console.log('result: ', result)
      this.images = result.data
    })
  },
  computed: {
    filteredImages() {
      return this.images.filter( image => {
        return image.title.toLowerCase().includes(this.searchbox.toLowerCase());
      } )
    }
  }
}
</script>

<style>
    .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .images-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>

