<template>
    <div @click="$emit('digitselect', rowindex, bitindex)" class="digit">
        {{ digit }}
    </div>
</template>

<script lang="ts">
export default {
    props: ["digit", "rowindex", "bitindex"],
    emits: ["digitselect"],
};
</script>

<style scoped>
.digit {
    font-size: 30px;
    margin: 10px 20px;
}
</style>
