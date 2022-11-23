const pathModule = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "script.bundle.js",
    path: pathModule.resolve(__dirname, "dist"),
    assetModuleFilename: 'images/[name][ext]'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      
      },
    
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ 
          MiniCssExtractPlugin.loader,
        
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [ new HtmlWebpackPlugin({template:"./src/index.html"}),
    new MiniCssExtractPlugin({filename:"style.min.css"}),
    new HtmlWebpackPlugin(), new MiniCssExtractPlugin("style.min.css"),
 
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      
    ],
  }

}