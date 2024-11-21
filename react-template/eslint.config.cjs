const tsParser = require("@typescript-eslint/parser"); // TypeScript パーサーをインポート
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const unusedImportsPlugin = require("eslint-plugin-unused-imports");

module.exports = [
  {
    files: ["src/**/*.{ts,tsx}"], // 対象ファイル
    languageOptions: {
      parser: tsParser, // インポートしたパーサーを設定
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // JSX をサポート
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    //ルールを書き溜める
    rules: {
      "jsx-a11y/anchor-is-valid": "warn", // アクセシビリティのチェック
      "@typescript-eslint/no-unused-vars": "error", // 未使用変数を警告
      "unused-imports/no-unused-imports": "error", // 未使用の import をエラーに
    },
  },
  {
    files: ["vite.config.ts"], // Vite 設定ファイル用のルール
    languageOptions: {
      parser: tsParser, // 同じパーサを使用
    },
    rules: {
      "no-console": "off", // Vite 設定ファイルでの console 使用を許可
    },
  },
];
