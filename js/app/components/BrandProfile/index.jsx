var React = require('react');
var tpl = require('./tpl.rt');

var Elem = React.createClass({
  getDefaultProps: function() {
    return {
      payload: {
        href: 'javascript: void(0)',
        avatar: '',
        name: '加载中...',
        location: '...',
        background: ''
      }
    }
  },

  render: function() {
    return tpl.call(this);
  },
});


module.exports = Elem;