var React = require('react');
var ReactDOM = require('react-dom');

var tpl = require('./tpl.rt');

var App = React.createClass({
  render: function() {
    return tpl.call(this);
  },
});


ReactDOM.render(<App/>, document.querySelector('.app-container'));