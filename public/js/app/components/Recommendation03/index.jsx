var React = require('react');
var tpl = require('./tpl.rt');
var _ = require('lodash');



var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    var container = this.refs.contentContainer;

    function afterScriptExecute(cb) {

      // 广告脚本执行完之后会把 window.tosAdspaceInfo 设为 null
      function loop() {
        if (window.tosAdspaceInfo) {
          setTimeout(loop, 20);
        } else {
          cb();
        }
      }

      loop();
    }

    function loadScript(id, onload = function() {}) {
      window.tosAdspaceInfo = _.assign({}, __tosAdspaceInfo, { aid: id });
      var script = document.createElement('script');
      script.src = 'http://res.wiplatform.com/tr.js';
      script.addEventListener('load', function() {
        afterScriptExecute(onload);
      }, false);
      container.appendChild(script);
    }


    // 在 android legacy browser 动态插入脚本时，
    // 不论脚本插入到哪个元素内，元素的 parentNode 总是返回 body
    function fixAndroidLegacy() {
      // if ( document.documentElement.classList.contains('no-flexbox') &&
      //      document.documentElement.classList.contains('flexboxlegacy') ) {

      // }

      var ins = document.querySelectorAll('body > ins');
      _.forEach(ins, function(item) {
        container.appendChild(item);
      });
    }

    var ids = this.props.payload.map( (item) => +item.text );
    function load() {
      var i = 0;
      function loop() {
        if (i < ids.length - 1) {
          loadScript(ids[i], function() {
            i += 1;
            loop();
          });
        } else if (i == ids.length - 1) {
          // all script executed
          loadScript(ids[i], function() {
            setTimeout(function() {
              fixAndroidLegacy();
            }, 3000);
          });
        }
      }

      loop();
    }

    load();
  }
});


module.exports = Elem;