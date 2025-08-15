module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.module = true;
      return webpackConfig;
    }
  }
};