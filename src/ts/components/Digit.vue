<template>
    <div @click="clicked" class="digit">
        {{ digit }}
    </div>
</template>

<script lang="ts">
export default {
    props: ["digit", "rowindex", "bitindex"],
    emits: ["digitselect"],
    methods: {
        clicked() {
            this.$emit("digitselect", this.rowindex, this.bitindex);
        },
    },
};
</script>

<style scoped>
.digit {
    font-size: 50px;
    padding: 10px 30px;
}
</style>
