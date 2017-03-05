/* global $*/
$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({full_width: true});
  
  $('.carousel').carousel({
      padding: 200    
  });
  autoplay()   
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
  }  
  
});

