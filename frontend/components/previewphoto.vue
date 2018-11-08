<template>
    <div class='preview-photo-container'>
        <preview-card :image='image' :title='title' :description='description' />
        <form class='preview-form'>
            <label>Título:</label>
            <custom-input v-model='title'/>
            <label>Descrição:</label>
            <custom-textarea v-model='description'/>
            <label>URL da Imagem:</label>
            <custom-input v-model='url'/>
        </form>
    </div>
</template>

<script>

import previewCard from '~/components/preview-card.vue';
import customInput from '~/components/custom-input.vue';
import customTextarea from '~/components/custom-textarea.vue';

export default {
    props: ['image'],
    components: {
        'preview-card': previewCard,
        'custom-input': customInput,
        'custom-textarea': customTextarea
    },
    data () {
        return {
            url: '',
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
        flex-wrap: wrap;
    }

    .preview-form button {
        width: 150px;
        background-color: #187A7E;
        color: white;
        padding: 5px 10px;
        border-radius: 3px;
        align-self: flex-end;
    }

    .preview-form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 650px;
        height: calc(100vh - 340px);
    }

    .preview-form input, .preview-form textarea {
        border: 1.5px solid #cdcdcd;
        padding: 5px 10px;
        border-radius: 5px;
        resize: none;
    }

</style>


