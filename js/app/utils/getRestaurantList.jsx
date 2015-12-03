var jsonp = require('superagent-jsonpx');
var request = require('superagent');
var dataSrc = require('../dataSrc.jsx');
var Promise = require('es6-promise-polyfill').Promise;

module.exports = function(page) {
  var p = new Promise(function(resolve, reject) {
    if (dataSrc.restaurantList.type == 'jsonp') {
      request.get(dataSrc.restaurantList.src)
      .timeout(3000)
      .use( jsonp( { timeout: 3000 } ) )
      .query({ page: page })
      .end(function(err, res) {
        if (err) {
          reject(err);
        } else if (+res.body.code !== 0) {
          reject(res.body.errMsg);
        } else {
          resolve(res.body);
        }
      });
    } else {
      request.get(dataSrc.restaurantList.src)
      .timeout(3000)
      .query({ page: page })
      .end(function(err, res) {
        if (err) {
          reject(err);
        } else if (+res.body.code !== 0) {
          reject(res.body.errMsg);
        } else {
          resolve(res.body);
        }
      });
    }

  });

  return p;
};