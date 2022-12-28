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
    <div class="result">{{ result }}</div>
</template>

<script lang="ts">
import Digit from "./Digit.vue";

export default {
    components: { Digit },
    data() {
        return {
            activerow: 0,
            activebit: 0,
            rows: Array(8)
                .fill(0)
                .map(() => Array(8).fill(0)),
        };
    },
    computed: {
        result() {
            let temp = this.rows.flat().reverse();
            let bigint = BigInt("0b" + temp.reverse().join(""));
            // use bigint, because normal 64 bit double does not have enough precision
            return BigInt.asUintN(64, bigint);
        },
    },
    methods: {
        setrows(num: number) {
            let temp = Array.from(this.dec2bin(num));
            // fill array with zeros on the front
            while (temp.length < 64) {
                temp.unshift("0");
            }
            // split into chunk
            let chunks = [];
            for (let i = 0; i < temp.length; i += 8) {
                chunks.push(temp.slice(i, i + 8));
            }
            this.rows = chunks;
        },
        // https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
        dec2bin(dec: number) {
            return (dec >>> 0).toString(2);
        },
        digitselect(rowindex: number, bitindex: number) {
            this.activerow = rowindex;
            this.activebit = bitindex;
        },
        makestyle(active: boolean) {
            return active ? { color: "red" } : { color: "black" };
        },
        keypress(ev: KeyboardEvent) {
            if (ev.key == "0" || ev.key == "1") {
                this.rows[this.activerow][this.activebit] = Number(ev.key);
                if (this.activebit < 7) {
                    this.activebit++;
                } else {
                    if (this.activerow < 7) {
                        this.activerow++;
                        this.activebit = 0;
                    }
                }
            }
        },
    },
    mounted() {
        window.addEventListener("keydown", this.keypress);
    },
};
</script>

<style scoped>
.row-container {
    flex-direction: column;
    user-select: none;
}

.result {
    text-align: center;
    font-size: 50px;
}
</style>
