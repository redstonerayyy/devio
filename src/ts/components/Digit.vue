<template>
    <div class="digit">{{ digit }}</div>
</template>

<script lang="ts">
export default {
    props: ["digit", "active"],
};
</script>

<style scoped>
.digit {
    font-size: 30px;
    margin: 10px 20px;
}
</style>
