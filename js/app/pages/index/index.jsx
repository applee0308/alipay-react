var React = require('react');
var ReactDOM = require('react-dom');
var tpl = require('./tpl.rt');
// var initParallax = require('../../utils/parallax.jsx');
var reqwest = require('reqwest');
var dataSrc = require('../../dataSrc.jsx');

document.documentElement.addEventListener('load', function(event) {
  if (event.target.tagName == 'IMG') {
    event.target.classList.add('loaded');
  }
}, true);

var store = {};

var App = React.createClass({
  getInitialState: function() {
    // 可能使用 immutable，所以 state 多加了一层
    return { appState: {} };
  },

  componentDidMount: function() {
    var self = this;

    Promise.all([
      reqwest({url: dataSrc.index, type: 'jsonp'}),
      reqwest({url: dataSrc.restaurantList, type: 'jsonp', data: {page: 1}})
    ]).then(function(res) {
      var state = res[0];
      state.restaurantList = res[1];
      state.ready = true;
      self.setState({ appState: state });
    });
  },

  render: function() {
    return tpl.call(this);
  },
});

ReactDOM.render(<App/>, document.querySelector('.app-container'));


