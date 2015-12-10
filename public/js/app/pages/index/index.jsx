var React = require('react');
var ReactDOM = require('react-dom');
var tpl = require('./tpl.rt');
var dataSrc = require('../../dataSrc.jsx');
var makeShopHref = require('../../utils/makeShopHref.jsx');


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
    res[0].recommendList = res[0].recommendList.map(function(item) {
      item.href = makeShopHref(item.shopId);
      return item;
    });

    res[1].shopList = res[1].shopList.map(function(item) {
      item.href = makeShopHref(item.shopId);
      return item;
    });

    var state = res[0];
    state.restaurantList = res[1];
    ReactDOM.render(<App initialState={state} />, document.querySelector('.app-container'));
}).catch(function(errs) {
  console.log(errs);
  document.querySelector('.loadInitialDataError').classList.add('active');
});

