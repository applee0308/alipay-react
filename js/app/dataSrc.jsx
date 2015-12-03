
// var src = {
//   index: {
//     type: 'jsonp',
//     src: `http://${location.hostname}:3030/jsonp`
//   },

//   restaurantList: {
//     type: 'jsonp',
//     src: `http://${location.hostname}:3030/restaurantList`
//   }
// };


var src = window['__dataSrc'];

module.exports = src;