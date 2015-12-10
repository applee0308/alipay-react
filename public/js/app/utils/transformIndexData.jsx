var makeShopHref = require('./makeShopHref.jsx');

module.exports = function(indexData) {
  indexData.recommendList = indexData.recommendList.map(function(item) {
    item.href = makeShopHref(item.shopId);
    return item;
  });

  return indexData;
};