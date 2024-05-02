import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    minify: true,
    sourcemap: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@deadcow-enterprises/ui",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});
