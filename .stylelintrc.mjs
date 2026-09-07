/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
  ],
  overrides: [
    {
      files: ["**/*.astro", "**/*.html", "**/*.vue"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.scss", "**/*.css"],
      customSyntax: "postcss-scss",
    },
  ],
  rules: {
    // 允許 Tailwind CSS 特性
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "theme",
          "utility",
          "variant",
          "custom-variant",
          "layer",
          "config",
          "reference",
        ],
      },
    ],
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "theme",
          "utility",
          "variant",
          "custom-variant",
          "layer",
          "config",
          "reference",
        ],
      },
    ],
    // 允許 Astro & Vue 特殊偽類 :global 與 :deep
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "deep"],
      },
    ],
    // 允許 BEM 與自定義類名格式
    "selector-class-pattern": null,
    // 允許自定義字體名稱
    "font-family-no-missing-generic-family-keyword": null,
    "font-family-name-quotes": null,
    // 放寬純美觀與排版微細規則
    "at-rule-empty-line-before": null,
    "color-hex-length": null,
    "value-keyword-case": null,
    "color-function-notation": null,
    "color-function-alias-notation": null,
    "alpha-value-notation": null,
    "media-feature-range-notation": null,
    "rule-empty-line-before": null,
    "comment-empty-line-before": null,
    "scss/double-slash-comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "length-zero-no-unit": null,
    "max-nesting-depth": null,
    "no-empty-source": null,
    "custom-property-pattern": null,
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,
    "scss/no-global-function-names": null,
    "no-descending-specificity": null,
    "scss/dollar-variable-pattern": null,
    "keyframes-name-pattern": null,
    "selector-not-notation": null,
    "shorthand-property-no-redundant-values": null,
    "declaration-block-no-redundant-longhand-properties": null,
  },
};
