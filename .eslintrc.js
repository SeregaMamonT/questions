module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/max-attributes-per-line": ["warn", {
      "singleline": 4,
      "multiline": {
        "max": 3,
        "allowFirstLine": false
      }
    }]
  }
};
