var React = require('react');
var tpl = require('./tpl.rt');
var dataSrc = require('../../dataSrc.jsx');
var getRestaurantList = require('../../utils/getRestaurantList.jsx');

var Elem = React.createClass({
  getInitialState: function() {
    if (this.props.payload) {
      return {
        items: this.props.payload.shopList,
        currentPage: 0,
        hasNext: this.props.payload.isNext,
        loadingStatus: this.props.payload.isNext == true ? '查看更多' : '没有更多了',
      };
    } else {
      return {
        items: [],
        loadingStatus: '加载中...',
        currentPage: 0
      }
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
        items: self.state.items.concat(res.shopList),
        currentPage: self.state.currentPage + 1,
        hasNext: self.props.payload.isNext,
        loadingStatus: self.props.payload.isNext == true ? '查看更多' : '没有更多了',
      });
    }).catch(function(err) {
      self.setState({
        loadingStatus: '出错了，再试一次'
      });
    });
  },

  componentWillReceiveProps : function(nextProps) {
    this.setState({
      items: nextProps.payload.shopList,
      hasNext: nextProps.payload.isNext,
      loadingStatus: nextProps.payload.isNext == true ? '查看更多' : '没有更多了',
    });
  },

  render: function() {
    console.log(this.state);
    return tpl.call(this);
  },
});


module.exports = Elem;