var fs = require('fs-extra');

var content = fs.readFileSync('./public/html/restaurantList.json').toString();

JSON.parse(content)
