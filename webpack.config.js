// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   output: {
//     path: path.join(__dirname, "/dist"), // the bundle output path
//     filename: "bundle.js", // the name of the bundle
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "src/index.html", // to import index.html file inside index.js
//     }),
//   ],
//   devServer: {
//     port: 3030, // you can change the port
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/, // .js and .jsx files
//         exclude: /node_modules/, // excluding the node_modules folder
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.(sa|sc|c)ss$/, // styles files
//         use: ['style-loader', 'css-loader', 'postcss-loader'],
//       },
//       {
//         test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
//         loader: "url-loader",
//         options: { limit: false },
//       },
//     ],
//   },
// };





// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.join(__dirname, "/dist"),
//     filename: "bundle.js",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "src/index.html",
//     }),
//   ],
//   devServer: {
//     port: 3030,
//     historyApiFallback: true, // This is important for routing
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.(sa|sc|c)ss$/,
//         use: ['style-loader', 'css-loader', 'postcss-loader'],
//       },
//       {
//         test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//         loader: "url-loader",
//         options: { limit: false },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
// };










const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    port: 3030,
    historyApiFallback: true, // This enables support for client-side routing
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

// WE NEED TO KEEP HTML FILE OUT SRC