<template>
    <Grid number="20" />
</template>

<script lang="ts">
import Grid from "./components/Grid.vue";

export default {
    components: { Grid },
};
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
