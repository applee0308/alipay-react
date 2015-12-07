// config
var src = './html/index.html';
var dist = './html/index.build.html';



var cheerio = require('cheerio');
var fs = require('fs-extra');
var _ = require('lodash');
var pathTool = require('path');

module.exports = function() {
  var html = fs.readFileSync(src).toString();

  var $ = cheerio.load(html);

  var links = $('link[rel="stylesheet"][critical]');
  var scripts = $('script[src*=".js"][critical]');

  _.forEach(links, function(item) {
    var path = pathTool.resolve( pathTool.parse(src).dir, $(item).attr('href') );
    var css = fs.readFileSync(path).toString();
    css = '<style>\r\n' + css + '\r\n</style>'
    $(item).replaceWith(css);
  });


  _.forEach(scripts, function(item) {
    var path = pathTool.resolve( pathTool.parse(src).dir, $(item).attr('src') );
    var js = fs.readFileSync(path).toString();
    js = '<script>\r\n' + js + '\r\n</script>'
    $(item).replaceWith(js);
  });


  fs.outputFileSync(dist, $.html());
};



