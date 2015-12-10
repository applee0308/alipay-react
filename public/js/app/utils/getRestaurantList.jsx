var jsonp = require('superagent-jsonpx');
var request = require('superagent');
var dataSrc = require('../dataSrc.jsx');
var Promise = require('es6-promise-polyfill').Promise;

module.exports = function(page) {
  var p = new Promise(function(resolve, reject) {
    var src = dataSrc.restaurantList.src.trim();
    // if ( src.lastIndexOf('/') != (src.length - 1) ) {
    //   src += '/';
    // }

    if (dataSrc.restaurantList.type == 'jsonp') {
      request.get(src + page)
      .timeout(3000)
      .use( jsonp( { timeout: 3000, callbackKey: 'jsonpCallback' } ) )
      .end(function(err, res) {
        if (err) {
          reject(err);
        } else if (+res.body.retCode !== 1) {
          reject(res.body.retMsg);
        } else {
          resolve(res.body);
        }
      });
    } else {
      // request.get(src + page)
      request.get(src)
      .timeout(3000)
      .end(function(err, res) {
        if (err) {
          reject(err);
        } else if (+res.body.retCode !== 1) {
          reject(res.body.retMsg);
        } else {
          resolve(res.body);
        }
      });
    }

  });

  return p;
};