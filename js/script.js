$(function() {
  const $window = $(window);
  const $navbar = $('#navbar');
  let navbarOffset = $navbar.offset().top;
  let resizeTimeout = null;

  function checkNavbarFixed() {
    if ($window.scrollTop() >= navbarOffset) {
      $navbar.addClass('fixed');
      $('.section').first().css('margin-top', $navbar.outerHeight() + 'px');
    } else {
      $navbar.removeClass('fixed');
      $('.section').first().css('margin-top', '0');
    }
  }

  $window.on('scroll', checkNavbarFixed);

  $window.on('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      $navbar.removeClass('fixed');
      navbarOffset = $navbar.offset().top;
      checkNavbarFixed();
    }, 200);
  });

  $window.on('load', function() {
    checkNavbarFixed();
  });

  $('.navbar a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var position = 0;

    if (target !== '#top') {
      position = $(target).offset().top;
      position -= $navbar.outerHeight();
    }

    $('html, body').animate({
      scrollTop: position
    }, 600, 'swing');
  });
});
