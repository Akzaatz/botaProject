// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Configuration des CSS Modules
      localsConvention: "camelCase", // Utilisez camelCase pour les noms locaux
    },
    preprocessorOptions: {
      scss: {
        // Configuration des préprocesseurs SCSS
      },
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// const basePath = process.env.VITE_BASE_URL || "/";

// export default defineConfig({
//   base: basePath,
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @import "src/utils/_variables.scss";
//           $VITE_BASE_URL: '${basePath}';
//         `,
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
