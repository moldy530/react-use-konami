module.exports = function(api) {
  api.cache.never();

  return {
      "presets": ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"]
  }
};
