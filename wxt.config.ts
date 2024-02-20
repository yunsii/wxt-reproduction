import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { lingui } from "@lingui/vite-plugin";

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [
      react({
        babel: {
          plugins: ["macros"],
        },
      }),
      tsconfigPaths(),
      lingui(),
    ],
  }),
  srcDir: "src",
});
