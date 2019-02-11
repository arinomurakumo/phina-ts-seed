const path = require("path");

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === "development";

  return {
    mode: "development",
    devtool: IS_DEVELOPMENT ? "source-map" : "none",

    entry: "./src/app.ts",
    output: {
      path: `${__dirname}/dist`,
      filename: "app.js"
    },
    devServer: {
      inline: true,
      open: false,
      openPage: "index.html",
      contentBase: path.join(__dirname, "dist"),
      watchContentBase: true,
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader"
        },
        {
          test: /\.scss/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: IS_DEVELOPMENT,
                importLoaders: 2
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: IS_DEVELOPMENT,
                plugins: [require("autoprefixer")({ grid: true })]
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: IS_DEVELOPMENT
              }
            }
          ]
        },
        {
          test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
          loader: "url-loader"
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".js", ".css", ".scss"]
    }
  };
};
