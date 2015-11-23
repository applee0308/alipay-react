var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var tpl = require('./tpl.rt');
var initParallax = require('../../utils/parallax.jsx');
var reqwest = require('reqwest');


function parallax() {
  this.refs.parallaxLayer.classList.add('parallax');
  initParallax(this.refs.parallaxLayer);
}

var App = React.createClass({
  getInitialState: function() {
    // 可能使用 immutable，所以 state 多加了一层
    return {
      appState: {
        recommendation01: [],
        recommendation02: [],
        brandProfile: {},
        nav: []
      }
    };
  },

  componentDidMount: function() {
    var self = this;
    reqwest({url: 'http://localhost:3030/jsonp', type: 'jsonp'}).
      then(function(res) {
        var state = self.state.appState;
        state.recommendation01 = res.recommendation01;
        state.recommendation02 = res.recommendation02;
        state.brandProfile = res.brandProfile;
        state.nav = res.nav;
        self.setState({ appState: state });
      });
  },

  render: function() {
    return tpl.call(this);
  },
});

ReactDOM.render(<App/>, document.querySelector('.app-container'));