var React = require('react');
var tpl = require('./tpl.rt');

var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  shouldComponentUpdate: function() {
    return false;
  }
});


module.exports = Elem;