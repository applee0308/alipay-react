var React = require('react');
var tpl = require('./tpl.rt');
var Swiper = require('swiper');


var swiperInitialized = false;

var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  tryToInitSwiper: function() {
    if (this.props.payload && !swiperInitialized) {
      var option = {
        pagination: this.refs.swiperPagination,
        paginationClickable: true,
        loop: true,
        preloadImages: false, // Disable preloading of all images
        lazyLoading: true, // Enable lazy loading
      };

      if (process.env.NODE_ENV == 'production') {
        option.autoplay = 2000;
      }

      new Swiper(this.refs.swiper, option);

      swiperInitialized = true;
    }
  },

  componentDidUpdate: function() {
    this.tryToInitSwiper();
  },

  componentDidMount: function() {
    this.tryToInitSwiper();
  },
});


module.exports = Elem;