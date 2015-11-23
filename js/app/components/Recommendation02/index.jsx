var React = require('react');
var tpl = require('./tpl.rt');

var init = false;
var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  shouldComponentUpdate: function() {
    return !init;
  },

  componentDidUpdate: function() {
    if (!init) {
      new Swiper(this.refs.swiper, {
        pagination: this.refs.swiperPagination,
        paginationClickable: true,
        loop: true,
        // autoplay: 2000,
      });

      init = true;
    }
  },
});


module.exports = Elem;