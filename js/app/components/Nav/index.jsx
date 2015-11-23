var React = require('react');
var tpl = require('./tpl.rt');
var _ = require('lodash');





var Elem = React.createClass({
  render: function() {
    var items = this.props.payload;
    var placeholder = _.assign({}, items[0], { isPlaceholder: true });
    var len = items.length;
    var size;
    if (len < 5) {
    } else if(len >= 5 && len < 7) {
      // 每行3个，需要凑齐6个
      var i = 6 - len;
      while (i) {
        items.push(placeholder);
        i--;
      }
      size = 3;
    } else if (len >= 7 && len < 9) {
      // 每行3个，需要凑齐8个
      var i = 8 - len;
      while (i) {
        items.push(placeholder)
        i--;
      }
      size = 4;
    }

    if (size) {
      this.items = _.chunk(items, size);
    }

    return tpl.call(this);
  },
});


module.exports = Elem;