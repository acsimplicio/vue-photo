<template>
    <div class='image-card'>
        <router-link class='link' :to="{ name: 'view-id', params: { id: image.id} }">
            <div class='image-card-img' :style="{ 'background-image': 'url(' + image.image + ')'  }"></div>
            <h3 class='image-card-title'>{{ image.title }}</h3>
        </router-link>
        <div class="image-card-info">
            <p class='image-card-description'>{{ image.description }}</p>
            <button class='image-card-favbtn' @click="image.favorite = !image.favorite">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                    :class="{'unnactive': !image.favorite, 'active' : image.favorite}">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </button>
        </div>
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

<style>

    .link {
        color: black;
        text-decoration: none;
    }

    .image-card {
        padding: 20px;
        background-color: whitesmoke;
        border-radius: 5px;
        box-shadow: 0px 1px 10px lightgray;
        margin: 20px;
        max-width: 300px;
        transform: translateY(0);
        cursor: pointer;
    }

    .image-card:hover {
       transform: translateY(10px);
       box-shadow: 0px 1px 2px lightgray;
    }

    .image-card, .image-card:hover {
        transition: 1s;
    }

    .image-card-img {
        width: 250px;
        height: 250px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .image-card-title {
        text-align: center;
    }

    .image-card-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .image-card-favbtn {
        margin: 15px;
    }

    .image-card-description {
        max-width: 70%;
    }

    .unnactive {
        fill: #cdcdcd;
    }

    .active {
        fill: red;
    }

</style>
