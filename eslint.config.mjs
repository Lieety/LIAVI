export default {
  env: {
    browser: true,  // si realment necessites browser també, sinó pots eliminar
    node: true      // afegeix això per tenir process definit
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    // aquí les regles personalitzades si vols
  }
};
