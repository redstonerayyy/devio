<template>
    <Grid />
</template>

<script lang="ts">
import Grid from "./components/Grid.vue";

export default {
    components: { Grid },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
* {
    margin: 0px;
    padding: 0px;
    font-family: "Open Sans", sans-serif;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
