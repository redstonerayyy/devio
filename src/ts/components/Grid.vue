<template>
    <div class="flex row-container">
        <div class="flex row" v-for="row in rows">
            <Digit v-for="bit in row" :digit="bit" />
        </div>
    </div>
</template>

<script lang="ts">
import Digit from "./Digit.vue";

export default {
    components: { Digit },
    props: ["number"],
    data() {
        return {};
    },
    computed: {
        numberstring() {
            return this.dec2bin(this.number);
        },
        rows() {
            let temp = Array.from(this.numberstring);
            // fill array with zeros on the front
            while (temp.length < 64) {
                temp.unshift("0");
            }
            // split into chunk
            let chunks = [];
            for (let i = 0; i < temp.length; i += 8) {
                chunks.push(temp.slice(i, i + 8));
            }
            return chunks;
        },
    },
    methods: {
        // https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
        dec2bin(dec: number) {
            return (dec >>> 0).toString(2);
        },
    },
};
</script>

<style scoped>
.row-container {
    flex-direction: column;
    user-select: none;
}
</style>
