var React = require('react');
var tpl = require('./tpl.rt');

var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    new Swiper(this.refs.swiper, {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true,
      // autoplay: 2000,
    });
  }
});


module.exports = Elem;