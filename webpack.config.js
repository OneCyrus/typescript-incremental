const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

var sourcePath = path.join(__dirname, "./src");
var outPath = path.join(__dirname, "./dist");

module.exports = (env, options) => {
  console.log(`running in mode: ${options.mode}`);
  return {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    performance: {
      maxAssetSize: 3000000,
      maxEntrypointSize: 3000000
    },
    devtool:
      options.mode == "development" ? "cheap-module-source-map" : "source-map",
    context: sourcePath,
    entry: {
      main: "./index.tsx"
    },
    output: {
      path: outPath,
      publicPath: "/",
      filename: "[name].[hash].bundle.js"
    },
    target: "web",
    resolve: {
      extensions: [".js", ".ts", ".tsx"]
    },
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include: path.resolve(__dirname, "src"),
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: false,
                babelrc: true
              }
            },
            {
              loader: "ts-loader",
              options: {
                experimentalWatchApi: true,
                // transpileOnly: true,
                logLevel: "info",
                configFile: "tsconfig.json"
              }
            }
          ]
        }
      ]
    },
    plugins: [
     /*  new ForkTsCheckerWebpackPlugin({
        tsconfig: path.resolve(__dirname, "tsconfig.json")
      }), */
      new HtmlWebpackPlugin({
        template: "index.html"
      })
    ]
  };
};
