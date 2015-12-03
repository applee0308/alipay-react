var React = require('react');
var ReactDOM = require('react-dom');
var tpl = require('./tpl.rt');
var dataSrc = require('../../dataSrc.jsx');

var getIndexData = require('../../utils/getIndexData.jsx');
var getRestaurantList = require('../../utils/getRestaurantList.jsx');
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
  getIndexData(),
  getRestaurantList(1)
]).then(function(res) {
    var state = res[0].payload;
    state.restaurantList = res[1].payload;
    ReactDOM.render(<App initialState={state} />, document.querySelector('.app-container'));
}).catch(function(errs) {
  document.querySelector('.loadInitialDataError').classList.add('active');
  console.log(errs);
});

