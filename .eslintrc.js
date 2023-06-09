module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:vue/essential",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "no-mixed-spaces-and-tabs": 0, // disable rule
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
  },
};
