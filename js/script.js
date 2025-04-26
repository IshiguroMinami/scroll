$(function() {
  var $window = $(window);
  var $navbar = $('#navbar');
  var navbarOffset = $navbar.offset().top;
  var resizeTimeout = null;

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
});

$(function() {
  $('.navbar a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    if (target === '#top') {
      $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
    } else {
      var position = $(target).offset().top;
      if ($('#navbar').hasClass('fixed')) {
        position -= $('#navbar').outerHeight();
      }
      $('html, body').animate({
        scrollTop: position
      }, 600, 'swing');
    }
  });
});
