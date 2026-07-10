import path from "node:path";
import { fileURLToPath } from "node:url";
import resolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

const __filename =
  typeof fileURLToPath !== "undefined"
    ? fileURLToPath(import.meta.url)
    : undefined;

const __dirname =
  typeof __filename !== "undefined" ? path.dirname(__filename) : process.cwd();

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
        file: "dist/index.esm.js",
        format: "es",
        sourcemap: true,
      },
    ],
    external: ["lit", "lit/html", "lit/decorators.js"],
  },
  {
    input: "src/index.ts",
    plugins: [dts({ tsconfig: path.resolve(__dirname, "tsconfig.json") })],
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
  },
];
