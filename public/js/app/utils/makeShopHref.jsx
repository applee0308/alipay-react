var template = window['__shopHrefTemplate'];
module.exports = function(shopId) {
  return template.replace(/\[shopId\]/g, shopId);
};