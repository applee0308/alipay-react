var React = require('react');
var tpl = require('./tpl.rt');
var _ = require('lodash');



var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
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

    var container = this.refs.contentContainer;
    function loadScript(id, onload = function() {}) {
      window.tosAdspaceInfo = _.assign({}, __tosAdspaceInfo, { aid: id });
      var script = document.createElement('script');
      script.src = 'http://res.wiplatform.com/tr.js';
      script.addEventListener('load', function() {
        afterScriptExecute(onload);
      }, false);
      container.appendChild(script);
    }

    var ids = this.props.payload.map( (item) => +item.text );
    function load() {
      var i = 0;
      function loop() {
        if (i <= ids.length - 1) {
          loadScript(ids[i], function() {
            i += 1;
            loop();
          });
        }
      }

      loop();
    }

    load();
  }
});


module.exports = Elem;