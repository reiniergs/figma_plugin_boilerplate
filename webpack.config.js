const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
require("dotenv").config();

module.exports = (env, argv) => {
  const config = {
    mode: argv.mode === "production" ? "production" : "development",
    devtool: argv.mode === "production" ? false : "inline-source-map",
    entry: {
      plugin: "./src/plugin/index.ts",
      ui: "./src/ui/index.tsx",
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      open: true,
      openPage: "ui.html",
      port: 9000,
    },
    module: {
      rules: [
        // Converts TypeScript code to JavaScript
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
          include: path.join(__dirname, "src"),
        },

        // Enables including CSS by doing "import './file.css'" in your TypeScript code
        {
          test: /\.css$/,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }],
          include: path.join(__dirname, "src"),
        },

        // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
        {
          test: /\.(png|jpg|gif|webp|svg|zip)$/,
          use: [{ loader: "url-loader" }],
          include: path.join(__dirname, "src"),
        },
        // Allows you to import *.txt files, we are using this loader specifically to import
        // third party licenses text file
        {
          test: /\.txt$/i,
          loader: "raw-loader",
        },
      ],
    },
    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      alias: {
        components: path.join(__dirname, "src/ui/components"),
        pages: path.join(__dirname, "src/ui/pages"),
        hooks: path.join(__dirname, "src/ui/hooks"),
        "@types": path.join(__dirname, "src", "types"),
        "@figma": path.join(__dirname, "src/plugin/figma"),
        endpoints: path.join(__dirname, "src/plugin/endpoints"),
        "@theme": path.join(__dirname, "src/ui/theme"),
      },
    },

    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"), // Compile into a folder called "dist"
      pathinfo: false,
    },
    // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/ui.html",
        filename: "ui.html",
        inject: "body",
        chunks: ["ui"],
        cache: false,
      }),
      new HtmlInlineScriptPlugin(),
      new Dotenv({
        path: "./.env", // Path to .env file (this is the default)
        safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe)
      }),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(require("./package.json").version),
        MODE: JSON.stringify(argv.mode),
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    ignoreWarnings: [/export .* was not found in/],
  };
  return config;
};
