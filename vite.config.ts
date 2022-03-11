import linaria from "@linaria/rollup";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [{ ...linaria(), enforce: "post" }],
  resolve: {
    alias: { "@": path.resolve("src") },
  },
  optimizeDeps: {
    include: ["@linaria/core", "@linaria/react", "polished"],
  },
});
