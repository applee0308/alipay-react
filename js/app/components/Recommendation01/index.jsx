var React = require('react');
var tpl = require('./tpl.rt');

var swiperInitialized = false;

var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidUpdate: function() {
    if (this.props.payload && !swiperInitialized) {
      new Swiper(this.refs.swiper, {
        pagination: this.refs.swiperPagination,
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 60,
        loop: true,
        // autoplay: 2000,
      });

      swiperInitialized = true;
    }
  },
});


module.exports = Elem;