var webpack = require('./webpack-production.js');
var inlineCritical = require('./inlineCritical.js');

webpack(function(err) {
  if (err) {
    console.log(err);
  } else {
    inlineCritical();
  }
});