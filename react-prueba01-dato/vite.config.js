import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    plugins: [react(), tailwindcss()],
    build: {
      outDir: "../wwwroot/react-app",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: "./src/main.jsx",
        },
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "chunks/[name].js",
          assetFileNames: "assets/[name].[ext]",
        },
      },
    },
    server: {
      port: 5173,
      strictPort: true,
      hmr: {
        host: "localhost",
        protocol: "ws",
      },
    },
    base: isDev ? "/" : "/react-app/",
  };
});
