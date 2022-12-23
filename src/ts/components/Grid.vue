<template>
    <div class="flex row-container">
        <div class="flex row" v-for="(row, rowindex) in rows">
            <Digit
                v-for="(bit, bitindex) in row"
                :digit="bit"
                :style="
                    makestyle(rowindex == activerow && bitindex == activebit)
                "
                :rowindex="rowindex"
                :bitindex="bitindex"
                @digitselect="digitselect"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Digit from "./Digit.vue";

export default {
    components: { Digit },
    props: ["number"],
    data() {
        return {
            activerow: 0,
            activebit: 0,
        };
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
        digitselect(rowindex: number, bitindex: number) {
            console.log(rowindex, bitindex);
            this.activerow = rowindex;
            this.activebit = bitindex;
        },
        makestyle(active: boolean) {
            return active ? { color: "red" } : { color: "black" };
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
