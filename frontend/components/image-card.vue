<template>
    <div class='image-card'>
        <img class='image-card-img' :src="image.image" :alt="image.title">
        <h3 class='image-card-title'>{{ image.title }}</h3>
        <p class='image-card-description'>{{ image.description }}</p>
        <button class='image-card-favbtn'>Fav</button>
    </div>
</template>

<script>

export default {
  props: ['image'],
  data () {
    return {}
  }
}
</script>

<style scoped>

    .image-card {
        padding: 20px;
        background-color: whitesmoke;
        border-radius: 5px;
        box-shadow: 0px 1px 10px lightgray;
        margin: 20px;
    }

    .image-card-img {
        max-width: 250px;
    }

</style>
