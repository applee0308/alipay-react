document.documentElement.addEventListener('load', function(event) {
  if ( event.target.classList.contains('fadeInImg') ) {
    event.target.classList.add('loaded');
  }
}, true);
