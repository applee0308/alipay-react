var express = require('express');
var fs = require('fs-extra');

var app = express();

app.use(express.static('./public'));

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
}).options('*', function(req, res, next){
    res.end();
});



// app.get('/error', function(req, res) {
//   res.status(500).end('error');
// })

// app.get('/json', function(req, res) {
//   res.json( fs.readJSONSync('./summary0.json') );
// });
//


var recommendation01 = [];
var i = 6;
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
         '/images/recommendation-02-01.jpg' :
         '/images/recommendation-02-02.jpg',
  });
  i--;
}

var nav = [
  { href: '##', img: '/images/nav-icons/iconfont-bus.png', text: '交通' },
  { href: '##', img: '/images/nav-icons/iconfont-baoxian.png', text: '保险' },
  { href: '##', img: '/images/nav-icons/iconfont-meishi.png', text: '美食' },
  { href: '##', img: '/images/nav-icons/iconfont-ditu.png', text: '地图' },
  // { href: '##', img: '/images/nav-icons/iconfont-feiji.png', text: '航班' },
  // { href: '##', img: '/images/nav-icons/iconfont-fuwu.png', text: '服务' },
];

var restaurantList = [
    {
      href: '##',
      name: '哈根达斯',
      img: '/images/restaurant-01.jpg',
      location: '2F',
      discount: '9',
      meta: '满100减10',
      badges: [
        '/images/badge-icons/iconfont-tingche.png',
        '/images/badge-icons/iconfont-wifi.png',
      ],
    },

    {
      href: '##',
      name: '星巴克',
      img: '/images/restaurant-02.jpg',
      location: '2F',
      discount: '9',
      meta: '满100减10',
      badges: [
        '/images/badge-icons/iconfont-wifi.png',
      ],
    },
  ];

var i = 0;
app.get('/restaurantList', function(req, res) {
  var page = req.query.page;
  console.log(page);
  console.log(i);
  if (i === 0) {
    res.jsonp({
      code: 0,
      payload: {
        hasNext: true,
        restaurantList: restaurantList,
      },
      errMsg: null,
      meta: null
    });

  } else if (i == 1) {
    res.status(500).end('error');

  } else if (i == 2) {
    res.jsonp({
      code: 1,
      payload: null,
      errMsg: 'error',
      meta: null
    });
  }

  // if (i == 2) {
  //   i = 0;
  // } else {
  //   i += 1;
  // }

});

var j = 0;
app.get('/jsonp', function(req, res) {
  if (j === 0) {
    res.jsonp({
      code: 0,
      payload: {
        recommendation01: recommendation01,
        recommendation02: recommendation02,
        nav: nav,
        brandProfile: {
          href: '###',
          background: '/images/profile-bg-01.jpg',
          avatar: '/images/profile-avatar.jpg',
          name: '北京首都机场',
          location: '顺义区机场路1号',
        },
      },
      errMsg: null,
      meta: null,
    });

  } else if (j == 1) {
    setTimeout(function() {
      res.status(500).end('error');
    }, 5000);

  } else if (j == 2) {
    res.jsonp({
      code: 1,
      payload: null,
      meta: null,
      errMsg: 'error',
    });
  }

  // if (j == 2) {
  //   j = 0;
  // } else {
  //   j += 1;
  // }

});

var server = app.listen(3030, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});