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

  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  const btn = $('#scroll-to-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  $('img').bind('contextmenu', function (e) {
    return false;
  });

});

$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});