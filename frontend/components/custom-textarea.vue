<template>
    <textarea cols='30' rows='10' :value='value' @input="$emit('input', $event.target.value)"/>
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
