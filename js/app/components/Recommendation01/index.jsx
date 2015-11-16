var React = require('react');
var tpl = require('./tpl.rt');

var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    $(this.refs.slick).slick({
      arrows: false,
      centerMode: true,
      slidesToShow: 1,
      autoPlay: false,
      centerPadding: '100px',
      variableWidth: true
    });
  }
});


module.exports = Elem;