var React = require('react');
var tpl = require('./tpl.rt');

var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    var swiper = new Swiper(this.refs.swiper, {

    });
  }
});


module.exports = Elem;