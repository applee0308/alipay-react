var React = require('react');
var tpl = require('./tpl.rt');


var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    var content = document.getElementById('recommendation-03-content');
    this.refs.contentContainer.appendChild( content );
    content.style.display = 'block';
  }
});


module.exports = Elem;