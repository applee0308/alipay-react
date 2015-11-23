var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var tpl = require('./tpl.rt');
var initParallax = require('../../utils/parallax.jsx');
var reqwest = require('reqwest');

var store = {};

var App = React.createClass({
  getInitialState: function() {
    // 可能使用 immutable，所以 state 多加了一层
    var ret = {};
    ret.recommendation01 = store.recommendation01;
    ret.recommendation02 = store.recommendation02;
    ret.brandProfile = store.brandProfile;
    ret.nav = store.nav;
    ret.initialRestaurantList = store.restaurantList;

    return { appState: ret };
  },

  componentDidMount: function() {
    // initParallax(this.refs.parallaxLayer);
  },

  render: function() {
    return tpl.call(this);
  },
});


reqwest({url: 'http://localhost:3030/jsonp', type: 'jsonp'}).
  then(function(res) {
    store = res;
    ReactDOM.render(<App/>, document.querySelector('.app-container'));
  });
