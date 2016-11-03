$(document).on('ready', function() {

  /* hamburger menu */
    $('.hamburger, .menu-overlay').on('click', function() {
      $('.hamburger').toggleClass('is-active');
      $('.menu-overlay').fadeToggle(200);
      $('body').toggleClass('hide');
    });

  /* navbar scroll */
    $(window).bind('scroll', function() {
      var distance = 100;

      if ($(window).scrollTop() > distance) {
        $('.fixedNav').addClass('scrolled');
      }
      else {
        $('.fixedNav').removeClass('scrolled');
      }
    });



    // if($('.hamburger').css('display') == 'none') {
    //   $('.menu-overlay').fadeOut('slow');
    // }

}); // end doc.ready
