var makeShopHref = require('./makeShopHref.jsx');

module.exports = function(restaurantList) {
  restaurantList.shopList = restaurantList.shopList.map(function(item) {
    item.href = makeShopHref(item.shopId);
    return item;
  });

  return restaurantList;
};