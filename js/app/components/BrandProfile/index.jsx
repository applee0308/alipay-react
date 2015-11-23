var React = require('react');
var tpl = require('./tpl.rt');

var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },
});


module.exports = Elem;