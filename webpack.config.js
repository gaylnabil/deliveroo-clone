const createExpoWebpackConfigAsync = require("@expo/webpack-config");
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["nativewind"],
      },
      // resolve: {
      //   alias: {
      //     "react-native$": "react-native-web",
      //     "../Utilities/Platform": "react-native-web/dist/exports/Platform",
      //     "../../Utilities/Platform": "react-native-web/dist/exports/Platform",
      //     "./Platform": "react-native-web/dist/exports/Platform",
      //   },
      // },
    },
    argv
  );

  config.module.rules.push({
    test: /\.css$/i,
    use: ["postcss-loader"],
  });

  // config.resolve.alias["../../Utilities/Platform"] =
  //   "react-native/Libraries/Utilities/Platform";
  // config.resolve.alias["../Utilities/Platform"] =
  //   "react-native/Libraries/Utilities/Platform";
  // config.resolve.alias["./Platform"] =
  //   "react-native/Libraries/Utilities/Platform";

  // Maybe you want to turn off compression in dev mode.
  if (config.mode === "development") {
    config.devServer.compress = false;
  }

  // Or prevent minimizing the bundle when you build.
  if (config.mode === "production") {
    config.optimization.minimize = false;
  }

  return config;
};
