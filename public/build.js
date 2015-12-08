var webpack = require('./webpack-production.js');
var inlineCritical = require('./inlineCriticalAndDeferCss.js');

webpack(function(err) {
  if (err) {
    console.log(err);
  } else {
    inlineCritical();
  }
});
