// var webpack = require('webpack');
// var definePlugin = new webpack.DefinePlugin({
//   'process.env': {
//     'NODE_ENV': process.env.NODE_ENV
//   }
// });


module.exports = {
  entry: {
    index: './js/app/pages/index/index.jsx',
    site: './js/app/pages/site.jsx',
  },
  output: {
    filename: './js/app/[name].js' // Template based on keys in entry above
  },
  module: {
     loaders: [
      { test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },

      {
        test: /\.rt$/,
        loader: "react-templates-loader" ,
        exclude: /(node_modules|bower_components)/
      },

      { test: /\.css$/, loader: 'style-loader!css-loader' },
     ]
   },

  // plugins: [definePlugin]
};