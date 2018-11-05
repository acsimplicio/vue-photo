<template>
    <div class='info-card'>
        <h3 class='info-card-title'>Iguana</h3>
        <div class='info-card-container'>
            <div class="info-card-info">
                <p class='info-card-description'>Iguana fofinha verdinha</p>
                <button class='info-card-favbtn' @click="image.favorite = !image.favorite">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>
            </div>
            <div class='info-card-buttons'>
                <button class='delete-button'>
                    <span>Deletar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
                <button class='edit-button'>
                    <span>Editar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </div>
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

<style scoped>

    .info-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: whitesmoke;
        border-radius: 5px;
        box-shadow: 0px 1px 10px lightgray;
        margin: 20px;
        width: 300px;
        height: calc(100vh - 250px);
        transform: translateY(0);
        cursor: pointer;
    }

    .info-card-title {
        text-align: center;
        margin-bottom: 15px;
    }

    .info-card-container {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .info-card-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .info-card-buttons {
        display: flex;
        flex-direction: column;
    }

    .info-card-buttons button {
        width: 180px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 0;
        border-radius: 3px;
    }

    .info-card-buttons button span {
        margin-right: 10px;
        color: white;
    }

    .info-card-buttons button svg {
        fill: white;
    }

    .delete-button {
        background-color: #cc0000;
    }

    .edit-button {
        background-color: #187a7e;
    }

</style>
