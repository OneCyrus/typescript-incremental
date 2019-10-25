module.exports = function(api) {
  api.cache(true);
  return {
    "presets": [
      [
        "@babel/env",
        {
          "targets": "> 0.2% or ie 11",
          "modules": false,
          "useBuiltIns": "entry",
          "corejs": 3
        }
      ],
      "@babel/preset-typescript"
    ],
    "plugins": [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-syntax-dynamic-import"
    ]
  };
};
