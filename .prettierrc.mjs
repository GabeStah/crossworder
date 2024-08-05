/**
 * @type {import('prettier').Options}
 */
export default {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  importOrder: [
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "", // Empty line
    "^@plasmo/(.*)$",
    "",
    "^@plasmohq/(.*)$",
    "",
    "^~(.*)$",
    "",
    "^[./]"
  ],
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false
}
