const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,

        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'img/[name].[hash:8].[ext]'
            }
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ],
  },
  resolve: {
    extensions :['.js','.css','.vue'],
    alias:{
      'vue$' : 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
     new webpack.BannerPlugin("最终版权归aaa所有"),
     new HtmlWebpackPlugin({
      template:'index.html'
     }),
     //new UglifyJsPlugin(),//打包压缩插件
  ],
  devServer:{
    contentBase:'./dist',
    inline:true
  }
}