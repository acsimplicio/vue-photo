<template>
  <div class='viewer-container'>
    <image-viewer></image-viewer>
    <info-card></info-card>
  </div>
</template>

<script>
import infoCard from '~/components/info-card.vue';
import imageViewer from '~/components/image-viewer.vue';

export default {
    components : {
        'image-viewer': imageViewer,
        'info-card': infoCard
    },
    props: ['id'],
    data () {
        return {}
    }
}
</script>

<style>
    .viewer-container {
        display: flex;
        justify-content: space-around;
    }
</style>
