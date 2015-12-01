var React = require('react');
var ReactDOM = require('react-dom');
var tpl = require('./tpl.rt');
var reqwest = require('reqwest');
var dataSrc = require('../../dataSrc.jsx');

var Promise = require('es6-promise-polyfill').Promise;


var App = React.createClass({
  getInitialState: function() {
    // 可能使用 immutable，所以 state 多加了一层
    return { appState: this.props.initialState };
  },

  componentDidMount: function() {

    document.querySelector('.splashScreen').classList.add('hidden');

    var self = this;
    setTimeout(function() {
      self.refs.body.classList.add('ready');
    }, 500);
  },

  render: function() {
    return tpl.call(this);
  },
});



Promise.all([
  reqwest({url: dataSrc.index, type: 'jsonp'}),
  reqwest({url: dataSrc.restaurantList, type: 'jsonp', data: {page: 1}})
]).then(function(res) {
  var state = res[0];
  state.restaurantList = res[1];
  // state.ready = true;
  ReactDOM.render(<App initialState={state} />, document.querySelector('.app-container'));
});



