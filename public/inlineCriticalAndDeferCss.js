// config
var src = './html/index.html';
var dist = './html/index.build.html';



var cheerio = require('cheerio');
var fs = require('fs-extra');
var _ = require('lodash');
var pathTool = require('path');

function parseHtml() {
  var html = fs.readFileSync(src).toString();
  var $ = cheerio.load(html);
  return $;
}


function inlineCritical(html) {
  var $ = cheerio.load(html);
  var links = $('link[rel="stylesheet"][build-critical]');
  var scripts = $('script[src*=".js"][build-critical]');

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

  return $.html();
}

function deferCss(html) {
  var $ = cheerio.load(html);
  var links = $('link[rel="stylesheet"][build-defer]');
  var hrefs = _.map(links, function(item) {
    $(item).remove();
    return $(item).attr('href');
  });

  hrefs = JSON.stringify(hrefs);

  var functionStr = `` +
  `<script>
    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        var hrefs = ${hrefs};
        hrefs.forEach(function(item) {
          var link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = item;
          document.head.appendChild(link);
        });
      }, false);
    })();
  </script>`;

  $('head').append(functionStr);

  return $.html();
}


module.exports = function() {
  var html = fs.readFileSync(src).toString();

  var ret = deferCss( inlineCritical(html) );
  // var ret = inlineCritical(html);
  fs.outputFileSync(dist, ret);
};



