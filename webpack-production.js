var webpack = require("webpack");
var _ = require('lodash');

var definePlugin = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
});

var progressBarPlugin = new ( require('progress-bar-webpack-plugin') )();
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true})


var option = require('./webpack.config.js');

option.plugins = _.assign([], option.plugins,
  [definePlugin, progressBarPlugin, uglifyJsPlugin]);

var compiler = webpack(option);

module.exports = function(callback) {
  compiler.run(function(err, stats) {
    if (err) {
      callback(err);
    } else {
      var jsonStats = stats.toJson();
      if (jsonStats.errors.length > 0) {
        console.log('error:\r\n' + jsonStats.errors.join('\r\n') );
      }
      if(jsonStats.warnings.length > 0) {
        console.log('warning:\r\n' + jsonStats.warnings.join('\r\n') );
      }

      callback();
    }
  });
};
