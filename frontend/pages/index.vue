<template>
    <div class='main-content'>
      <div>
        <input type="text" placeholder="Pesquise!">
        <button>Pesquisar</button>
      </div>
      <div class='images-container'>
          <image-card :image='image' v-for="image in images" :key="image"></image-card>
      </div>
    </div>
</template>

<script>

import imageCard from '~/components/image-card.vue'

export default {
  components: {
    'image-card' : imageCard
  },
  data () {
    return {
      images: [{
        title: 'Iguana',
        image: 'https://meusanimais.com.br/wp-content/uploads/2018/01/iguana-como-animal-de-estima%C3%A7%C3%A3o.jpg',
        description: 'Iguana fofinha',
        id: 1
      }, {
        title: 'Gato',
        image: 'http://blogs.correiobraziliense.com.br/maisbichos/wp-content/uploads/sites/7/2018/01/gato-1024x576.jpg',
        description:'Gato fedido',
        id: 2
      }]
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
