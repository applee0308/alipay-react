var React = require('react');
var tpl = require('./tpl.rt');
var _ = require('lodash');


var defaultModel = {
  href: 'javascript: void(0)',
  background: '',
  avatar: '',
  name: '...',
  location: '...',
};

var Elem = React.createClass({
  render: function() {
    this.model = _.assign({}, defaultModel, this.props.payload);
    return tpl.call(this);
  },
});


module.exports = Elem;