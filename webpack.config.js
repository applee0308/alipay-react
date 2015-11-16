module.exports = {
  entry: {
    index: './js/app/pages/index/index.jsx',
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
   }
};