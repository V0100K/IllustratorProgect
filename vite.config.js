//----------- working example but .css and .css.map files created
// import { defineConfig } from 'vite';
// import { resolve } from 'path';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';
//
// export default defineConfig({
//     root: 'src',
//     build: {
//         rollupOptions: {
//             input: {
//                 main: resolve( 'src/index.html'),
//             },
//         },
//         outDir: '../dist',
//     },
//     exclude: ['node_modules'],
//     plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
// });


// import { defineConfig } from 'vite';
// import { resolve } from 'path';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';
//
// export default defineConfig({
//     root: 'src',
//     build: {
//         rollupOptions: {
//             input: {
//                 main: resolve('src/index.html'),
//             },
//         },
//         outDir: '../dist',
//         // cssCodeSplit: false,
//
//         cssCodeSplit: { // Configure CSS code splitting
//             force: true, // Always generate separate CSS files (even in development)
//             globalOutDir: 'dist/css', // Output folder for CSS files
//
//     },
//     cssPreprocessOptions: {
//         scss: {
//             additionalData: `@import "@/styles/_variables.scss";`,
//         },
//     },
//     exclude: ['node_modules'],
//     plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
// });











//
// import { defineConfig } from 'vite';
// import { resolve } from 'path';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';
//
// export default defineConfig({
//     root: 'src',
//     build: {
//         cssCodeSplit: {
//             force: true,
//             globalOutDir: '.dist', // Output CSS files to the root dist directory
//         },
//         rollupOptions: {
//             input: {
//                 main: resolve('src/index.html'),
//             },
//         },
//         outDir: '../dist',
//     },
//     cssPreprocessOptions: {
//         scss: {
//             additionalData: `@import "@/styles/_variables.scss";`,
//         },
//     },
//     exclude: ['node_modules'],
//     plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
// });


import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
    root: 'src',
    build: {
        cssCodeSplit: {
            force: true,
        },
        rollupOptions: {
            input: {
                main: resolve('src/index.html'),
            },
        },
        outDir: './dist', // Output CSS files to the root dist directory
    },
    cssPreprocessOptions: {
        scss: {
            additionalData: `@import "@/styles/_variables.scss";`,
        },
    },
    exclude: ['node_modules'],
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});