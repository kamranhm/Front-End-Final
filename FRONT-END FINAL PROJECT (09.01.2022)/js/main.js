$(function () {
  AOS.init();
  updateNav();
  updateScroller();

  $(window).scroll(function () {
    updateNav();
    updateScroller();
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  
  function updateNav() {
    if ($(window).scrollTop() > 30) {
      $(".logo-img").attr("src","img/logo.svg");
    } else {
      $(".logo-img").attr("src","img/white-logo.svg");
    }
  }

  function updateScroller() {
    if ($(window).scrollTop() > 100) {
      $(".scroll-top").fadeIn(200);
    } else {
      $(".scroll-top").fadeOut(200);
    }
  }

  $(".team-info1").hover(function () {
    $(".social-media1").toggleClass("d-none");
  });
  $(".team-info2").hover(function () {
    $(".social-media2").toggleClass("d-none");
  });
  $(".team-info3").hover(function () {
    $(".social-media3").toggleClass("d-none");
  });
  $(".team-info4").hover(function () {
    $(".social-media4").toggleClass("d-none");
  });

  $(document).on("click", ".myh1", function () {
    $(this).next().slideToggle(500);
    $(this).prevAll(".accordion-p").slideUp(500);
    $(this).nextUntil(this).nextAll(".accordion-p").slideUp(500);
  })
  $(document).on("click", ".scroll-top", function () {
    $(window).scrollTop(0);
  })

}); 