<template>
    <img class='image-container' :src="image.image">
</template>

<script>
    export default {
        props: ["image"]
    }
</script>

<style>
    .image-container {
        width: 700px;
        margin: 20px 0;
        align-self: baseline;
        box-shadow: 0px 2px 5px gray;
    }
</style>


