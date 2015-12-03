var jsonp = require('superagent-jsonpx');
var request = require('superagent');
var dataSrc = require('../dataSrc.jsx');

module.exports = function(page) {
  var p = new Promise(function(resolve, reject) {
    request.get(dataSrc.restaurantList)
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
  });

  return p;
};