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
  
  $(".link1").click(function() {
  $('html,body').animate({
      scrollTop: $(".section1").offset().top},
      'slow');
  });

  $(".link2").click(function() {
  $('html,body').animate({
      scrollTop: $(".section2").offset().top},
      'slow');
  });

  $(".link3").click(function() {
  $('html,body').animate({
      scrollTop: $(".section3").offset().top},
      'slow');
  });

  $(".link4").click(function() {
  $('html,body').animate({
      scrollTop: $(".page-footer").offset().top},
      'slow');
  });  
  
});

