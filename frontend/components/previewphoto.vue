<template>
    <div class='preview-photo-container'>
        <div class='image-card'>
            <div class='image-card-img' :style="{ 'background-image': 'url(' + image + ')'  }"></div>
            <h3 class='image-card-title'>{{ title }}</h3>
            <div class="image-card-info">
                <p class='image-card-description'>{{ description }}</p>
                <button class='image-card-favbtn'>
                    <svg class='active' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>
            </div>
        </div>
        <form class='preview-form'>
            <label>Título:</label>
            <input type="text" v-model='title'/>
            <label>Descrição:</label>
            <textarea cols='30' rows='10' v-model='description'/>
            <label>URL da Imagem:</label>
            <input type="text" v-model='image'/>
        </form>
    </div>
</template>

<script>

export default {
    data () {
        return {
            image: '',
            title: '',
            description: ''
        }
    }
}
</script>

<style>
    .preview-photo-container {
        display: flex;
        justify-content: space-around;
        align-content: flex-start;
    }

    .preview-form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 650px;
        height: calc(100vh - 380px);
    }

    .preview-form input, .preview-form textarea {
        border: 1.5px solid #cdcdcd;
        padding: 5px 10px;
        border-radius: 5px;
    }

</style>


