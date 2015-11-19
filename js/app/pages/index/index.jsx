var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var tpl = require('./tpl.rt');


var recommendation01 = [];
var i = 10;
while (i) {
  recommendation01.push({
    href: '##',
    img: i % 2 === 0 ?
         '/images/recommendation-01-01.png' :
         '/images/recommendation-01-02.png',
    text: i % 2 === 0 ?
          '买一送一' :
          '满百减三',
  });
  i--;
}

var recommendation02 = [];
var i = 5;
while (i) {
  recommendation02.push({
    href: '##',
    img: i % 2 === 0 ?
         '/images/recommendation-02-01.png' :
         '/images/recommendation-02-02.png',
  });
  i--;
}


var App = React.createClass({
  render: function() {

    this.recommendation01 = recommendation01;
    this.recommendation02 = recommendation02;

    return tpl.call(this);
  },
});


ReactDOM.render(<App/>, document.querySelector('.app-container'));