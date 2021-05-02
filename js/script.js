$(document).ready(function () {
  $(window)
    .scroll(function () {
      var distance = $(window).scrollTop();
      $(".page-section").each(function (i) {
        if ($(this).position().top <= distance + 250) {
          $(".navbar-nav a.active").removeClass("active");
          $(".navbar-nav a").eq(i).addClass("active");
        }
      });
    })
    .scroll();

    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });
});

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});