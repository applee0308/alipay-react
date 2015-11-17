var React = require('react');
var tpl = require('./tpl.rt');

var data = {
  "code": 0,
  "hasNext": true,
  "payload": [
    {
      "href": "##",
      "name": "哈根达斯",
      "img": "/images/restaurant-01.jpg",
      "location": "2F",
      "discount": "9",
      "meta": "满100减10"
    },
    {
      "href": "##",
      "name": "哈根达斯",
      "img": "/images/restaurant-01.jpg",
      "location": "2F",
      "discount": "9",
      "meta": "满100减10"
    },
    {
      "href": "##",
      "name": "哈根达斯",
      "img": "/images/restaurant-01.jpg",
      "location": "2F",
      "discount": "9",
      "meta": "满100减10"
    },
    {
      "href": "##",
      "name": "哈根达斯",
      "img": "/images/restaurant-01.jpg",
      "location": "2F",
      "discount": "9",
      "meta": "满100减10"
    },
    {
      "href": "##",
      "name": "哈根达斯",
      "img": "/images/restaurant-01.jpg",
      "location": "2F",
      "discount": "9",
      "meta": "满100减10"
    },
    {
      "href": "##",
      "name": "ffff",
      "img": "/images/restaurant-01.jpg",
      "location": "2F",
      "discount": "9",
      "meta": "满100减10"
    }
  ]
};

var Elem = React.createClass({
  render: function() {
    this.items = data.payload;
    return tpl.call(this);
  },
});


module.exports = Elem;