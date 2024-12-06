import { createRequire } from "node:module";

export default {
  plugins: [
    createRequire(import.meta.url).resolve(
      "@ianvs/prettier-plugin-sort-imports",
    ),
  ],
  // importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};
