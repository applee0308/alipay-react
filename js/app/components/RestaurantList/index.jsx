var React = require('react');
var tpl = require('./tpl.rt');

var init = false;
var Elem = React.createClass({
  getInitialState: function() {
    return {
      items: this.props.initialRestaurantList
    };
  },

  render: function() {
    return tpl.call(this);
  },

  shouldComponentUpdate: function() {
    return false;
  }
});


module.exports = Elem;