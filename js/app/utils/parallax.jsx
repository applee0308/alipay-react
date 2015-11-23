function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop || 0;
}




module.exports = function(elem) {
  elem.classList.add('parallax');

  var timer;
  var startScrolling = false;
  window.addEventListener('scroll', function() {
    if (!startScrolling) {
      startScrolling = true;
      startAnimation();
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      startScrolling = false;
    }, 100);
  }, false);

  var height = elem.offsetHeight;
  var previewSt;
  function startAnimation() {
    function loop() {
      var st = getScrollTop();

      if (previewSt != st) {
        previewSt = st;
        if (st <= height) {
          elem.style.transform = `translateY(${(-st/2).toFixed(0)}px) translateZ(0)`;
        }
      }

      if (startScrolling) {
        requestAnimationFrame(loop);
      }
    }

    requestAnimationFrame(loop);
  }
};



