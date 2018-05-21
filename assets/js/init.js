(function($) {
  $(function() {

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

$(document).ready(function() {
  $('.fixed-action-btn').floatingActionButton();

});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    hoverEnabled: false
  });

});
