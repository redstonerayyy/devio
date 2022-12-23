/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    // configuration needed because index.html is not in project root
    build: {
        rollupOptions: {
            input: {
                app: "./src/index.html",
            },
        },
    },
    server: {
        open: "./src/index.html",
    },
});
