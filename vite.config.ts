/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    clearScreen: false,
    plugins: [vue()],
    // configuration needed because index.html is not in project root
    build: {
        target:
            // Tauri uses Chromium on Windows and WebKit on macOS and Linux
            process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
        // don't minify for debug builds
        minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
        // produce sourcemaps for debug builds
        sourcemap: !!process.env.TAURI_DEBUG,
    },
    server: {
        strictPort: true,
    },
});
