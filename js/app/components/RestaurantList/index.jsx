var React = require('react');
var tpl = require('./tpl.rt');
var dataSrc = require('../../dataSrc.jsx');
var init = false;
var reqwest = require('reqwest');


var Elem = React.createClass({
  getInitialState: function() {
    return {
      items: this.props.initialRestaurantList,
      loadingStatus: '查看更多',
      currentPage: 1
    };
  },

  loadMore: function(event) {
    event.preventDefault();
    var self = this;
    self.setState({
      loadingStatus: '加载中...'
    });

    reqwest({
      url: dataSrc.restaurantList,
      type: 'jsonp',
      data: { page: this.state.currentPage + 1 }
    }).then(function(res) {
        self.setState({
          items: self.state.items.concat(res),
          currentPage: self.state.currentPage + 1,
          loadingStatus: '查看更多'
        });
      });
  },

  render: function() {
    return tpl.call(this);
  },
});


module.exports = Elem;