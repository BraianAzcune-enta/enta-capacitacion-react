import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

const resolveFixup = {
  name: "resolve-fixup",
  setup(build) {
    build.onResolve({ filter: /react-virtualized/ }, async (args) => {
      return {
        path: path.resolve(
          "./node_modules/react-virtualized/dist/umd/react-virtualized.js"
        ),
      };
    });
  },
};

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [resolveFixup],
    },
  },
});
