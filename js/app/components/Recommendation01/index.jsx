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
      new Swiper(this.refs.swiper, {
        pagination: this.refs.swiperPagination,
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 48,
        loop: true,
        preloadImages: false, // Disable preloading of all images
        lazyLoading: true, // Enable lazy loading

        // If you use slidesPerView "auto" or slidesPerView > 1,
        // then you should also enable watchSlidesVisibility and
        //  Swiper will load images in currently visible slides
        watchSlidesVisibility: true,
        // autoplay: 2000,
      });

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