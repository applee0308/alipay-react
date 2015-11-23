var React = require('react');
var tpl = require('./tpl.rt');

var init = false;
var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    new Swiper(this.refs.swiper, {
      pagination: this.refs.swiperPagination,
      paginationClickable: true,
      loop: true,
      // autoplay: 2000,
    });
  },

  shouldComponentUpdate: function() {
    return false;
  }
});


module.exports = Elem;