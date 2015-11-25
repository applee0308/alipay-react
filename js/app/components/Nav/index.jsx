var React = require('react');
var tpl = require('./tpl.rt');
var _ = require('lodash');


var Elem = React.createClass({
  render: function() {
    var items =  this.props.payload || [];
    var len = items.length;

    function addPlaceholder(total) {
      var placeholder = _.assign({}, items[0], { isPlaceholder: true });
      var i = total - len;
      while (i) {
        items.push(placeholder);
        i--;
      }
    }

    var size;
    if(len >= 5 && len < 7) {
      // 每行3个，需要凑齐6个
      size = 3;
      addPlaceholder(6);
    } else if (len >= 7 && len < 9) {
      // 每行3个，需要凑齐8个
      size = 4;
      addPlaceholder(8);
    }

    if (size) {
      this.items = _.chunk(items, size);
    }

    return tpl.call(this);
  },
});


module.exports = Elem;