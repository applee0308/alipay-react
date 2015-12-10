var React = require('react');
var tpl = require('./tpl.rt');
var _ = require('lodash');



var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    var self = this;
    function loadScript(id, onload = function() {}) {
      window.tosAdspaceInfo = {aid: id, 'serverbaseurl':'jf.wiplatform.com/','staticbaseurl':'res.wiplatform.com/'};
      var script = document.createElement('script');
      script.src = 'http://res.wiplatform.com/tr.js';
      script.addEventListener('load', function() {
        setTimeout(function() {
          onload();
        }, 100);
      }, false);
      self.refs.contentContainer.appendChild(script);
    }

    loadScript(10011188, function() {
      loadScript(10011446, function() {
        loadScript(10010396);
      });
    });
  }
});


module.exports = Elem;