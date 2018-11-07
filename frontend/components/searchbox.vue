<template>
    <div class='search-bar'>
        <div class='icon-container'>
          <svg class='search-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          </div>
        <input type="text" :value="value" @input="$emit('input', $event.target.value)" placeholder="Pesquise!">
      </div>
</template>

<script>
export default {
    props: ['value'],
    data () {
        return {
        }
    }
}
</script>

<style>
    .search-bar {
    display: flex;
  }

  .search-bar input {
    border: 1px solid #cbcbcb;
    background-color: #f9f5f5;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px 10px;
    width: 380px;
  }

  .search-bar .icon-container {
    display: flex;
    align-items: center;
    background-color: #187a7e;
    padding: 6px 10px;
    width: 50px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .search-icon {
    fill: white;
  }
</style>


