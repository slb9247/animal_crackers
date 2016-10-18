$(document).on('ready', function() {

  /* hamburger menu */
    $('.hamburger, .menu-overlay').on('click', function() {
      $('.hamburger').toggleClass('is-active');
      $('.menu-overlay').fadeToggle(200);
      $('body').toggleClass('hide');
    });

    // if($('.hamburger').css('display') == 'none') {
    //   $('.menu-overlay').fadeOut('slow');
    // }



}); // end doc.ready
