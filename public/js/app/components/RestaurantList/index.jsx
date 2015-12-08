var React = require('react');
var tpl = require('./tpl.rt');
var dataSrc = require('../../dataSrc.jsx');
var getRestaurantList = require('../../utils/getRestaurantList.jsx');

var Elem = React.createClass({
  getInitialState: function() {
    if (this.props.payload) {
      return {
        items: this.props.payload.restaurantList,
        currentPage: 1,
        hasNext: this.props.payload.hasNext,
        loadingStatus: this.props.payload.hasNext == true ? '查看更多' : '没有更多了',
      };
    } else {
      return {
        items: [],
        loadingStatus: '加载中...',
        currentPage: 1
      };
    }
  },

  loadMore: function(event) {
    event.preventDefault();
    var self = this;

    if (!self.state.hasNext) {
      return;
    }

    self.setState({
      loadingStatus: '加载中...'
    });

    getRestaurantList(this.state.currentPage + 1).then(function(res) {
      self.setState({
        items: self.state.items.concat(res.payload.restaurantList),
        currentPage: self.state.currentPage + 1,
        hasNext: self.props.payload.hasNext,
        loadingStatus: self.props.payload.hasNext == true ? '查看更多' : '没有更多了',
      });
    }).catch(function(err) {
      self.setState({
        loadingStatus: '出错了，再试一次'
      });
    });
  },

  componentWillReceiveProps : function(nextProps) {
    this.setState({
      items: nextProps.payload.restaurantList,
      hasNext: nextProps.payload.hasNext,
      loadingStatus: nextProps.payload.hasNext == true ? '查看更多' : '没有更多了',
    });
  },

  render: function() {
    return tpl.call(this);
  },
});


module.exports = Elem;