var React = require('react');
var tpl = require('./tpl.rt');

var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    new Swiper(this.refs.swiper, {
      pagination: this.refs.swiperPagination,
      slidesPerView: 'auto',
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 60,
      loop: true,
      // autoplay: 2000,
    });
  }
});


module.exports = Elem;