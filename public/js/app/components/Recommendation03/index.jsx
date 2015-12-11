var React = require('react');
var tpl = require('./tpl.rt');
var _ = require('lodash');
var Swiper = require('swiper');



var Elem = React.createClass({
  render: function() {
    return tpl.call(this);
  },

  componentDidMount: function() {
    var container = this.refs.contentContainer;

    function afterScriptExecute(cb) {

      // 广告脚本执行完之后会把 window.tosAdspaceInfo 设为 null
      function loop() {
        if (window.tosAdspaceInfo) {
          setTimeout(loop, 20);
        } else {
          cb();
        }
      }

      loop();
    }

    function loadScript(id, onload = function() {}) {
      window.tosAdspaceInfo = _.assign({}, __tosAdspaceInfo, { aid: id });
      var script = document.createElement('script');
      script.src = 'http://res.wiplatform.com/tr.js';
      script.addEventListener('load', function() {
        afterScriptExecute(onload);
      }, false);
      container.appendChild(script);
    }


    // 在 android legacy browser 动态插入脚本时，
    // 不论脚本插入到哪个元素内，元素的 parentNode 总是返回 body
    function fixAndroidLegacy() {
      if ( document.documentElement.classList.contains('no-flexbox') &&
           document.documentElement.classList.contains('flexboxlegacy') ) {
        var ins = document.querySelectorAll('body > ins');
        _.forEach(ins, function(item) {
          container.appendChild(item);
        });
      }
    }

    var swiper = this.refs.swiper;
    var pagination = this.refs.swiperPagination;
    function initSwiper() {
      var allIns = container.querySelectorAll(':scope > ins');

      var slides = _.filter(allIns, function(item) {
        return item.style.display == 'block';
      }).map(function(item) {
        var slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.appendChild(item);
        return slide;
      });


      var wrapper = document.createElement('div');
      wrapper.classList.add('swiper-wrapper');

      _.forEach(slides, function(item) {
        wrapper.appendChild(item);
      });

      swiper.appendChild(wrapper);

      var option = {
        pagination: pagination,
        paginationClickable: true,
        loop: true,
        preloadImages: false, // Disable preloading of all images
        lazyLoading: true, // Enable lazy loading
      };

      if (process.env.NODE_ENV == 'production') {
        option.autoplay = 4000;
      }

      new Swiper(swiper, option);
    }

    var ids = this.props.payload.map( (item) => +item.text );
    function load() {
      var i = 0;
      function loop() {
        if (i < ids.length - 1) {
          loadScript(ids[i], function() {
            i += 1;
            loop();
          });
        } else if (i == ids.length - 1) {
          // all script executed
          loadScript(ids[i], function() {
            setTimeout(function() {
              fixAndroidLegacy();
              initSwiper();
            }, 3000);
          });
        }
      }

      loop();
    }

    load();
  }
});


module.exports = Elem;