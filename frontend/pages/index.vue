<template>
    <div class='main-content'>
      <div class='search-bar'>
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
        description: 'Iguana fofinha que sobre na arvore e fala pras amiga que tem um galho.',
        id: 1,
        favorite: false
      }, {
        title: 'Gato',
        image: 'http://blogs.correiobraziliense.com.br/maisbichos/wp-content/uploads/sites/7/2018/01/gato-1024x576.jpg',
        description:'Gato fedido porem é fofinho olha a linguinha desse arrombadinho',
        id: 2,
        favorite: false
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

  .search-bar input {
    border: 1px solid #cbcbcb;
    background-color: #f9f5f5;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px 10px;
    width: 380px;
  }

  .search-bar button {
    background-color: #187a7e;
    padding: 6px 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
  }

</style>
