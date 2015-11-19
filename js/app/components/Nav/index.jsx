var React = require('react');
var tpl = require('./tpl.rt');
var _ = require('lodash');

var items = [
  { href: '##', img: '/images/nav-icons/iconfont-baoxian.png', text: '保险' },
  { href: '##', img: '/images/nav-icons/iconfont-bus.png', text: '交通' },
  { href: '##', img: '/images/nav-icons/iconfont-dianhua.png', text: '电话' },
  { href: '##', img: '/images/nav-icons/iconfont-ditu.png', text: '地图' },
  { href: '##', img: '/images/nav-icons/iconfont-feiji.png', text: '航班' },
];



var Elem = React.createClass({
  render: function() {

    var len = items.length;
    var size;
    if (len < 5) {
    } else if(len >= 5 && len < 7) {
      // 每行3个，需要凑齐6个
      var i = 6 - len;
      while (i) {
        items.push({isPlaceholder: true });
        i--;
      }
      size = 3;
    } else if (len >= 7 && len < 9) {
      // 每行3个，需要凑齐8个
      var i = 8 - len;
      while (i) {
        items.push({
          isPlaceHolder: true
        })
        i--;
      }
      size = 4;
    }

    if (size) {
      this.items = _.chunk(items, size);
    }

    console.log(this.items);
    return tpl.call(this);
  },
});


module.exports = Elem;