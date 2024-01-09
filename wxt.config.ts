import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [react(), tsconfigPaths()],
  }),
  srcDir: "src",
});
