import path from "node:path";
import { fileURLToPath } from "node:url";
import resolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkg = { input: "src/index.ts" };

export default [
  {
    input: pkg.input,
    plugins: [
      resolve({ preferBuiltins: false }),
      esbuild({
        target: "es2020",
        minify: false,
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
    output: [
      {
        dir: "dist",
        format: "es",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    external: ["lit", "lit/html", "lit/decorators.js"],
  },
  {
    input: "src/index.ts",
    plugins: [dts({ tsconfig: path.resolve(__dirname, "tsconfig.json") })],
    output: {
      dir: "dist",
      format: "es",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
  },
];
