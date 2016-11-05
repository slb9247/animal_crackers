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


  /* grooming page slideshow */

    // // show first image by default
    // $('#slides img').eq(0).show();
    // var currentSlide = 0;
    // var slideCount = $('#slides img').length;
    //
    // var slideBtn = function(slideBtn) {
    //   // hide current slide
    //   $('#slides img').eq(currentSlide).hide();
    //
    //   if (slideBtn === 'prev') {
    //     // decrease currentSlide by 1
    //     currentSlide = currentSlide - 1;
    //
    //     // if currentSlide is the first slide
    //     if (currentSlide < 0) {
    //       // update currentSlide to the last slide and decrease by 1
    //       currentSlide = slideCount - 1; // length of array - 1
    //     }
    //   } else if (slideBtn === 'next') {
    //       // increase currentSlide by 1
    //       currentSlide = currentSlide + 1;
    //
    //       // if currentSlide is the last slide
    //       if (currentSlide === slideCount) {
    //         currentSlide = 0;
    //       }
    //     }
    //   // update currentSlide BEFORE showing next slide
    //   $('#slides img').eq(currentSlide).show();
    // } /* end var slideBtn */
    //
    //
    // // attach click event to prev button
    // $('#btn-prev').on('click', function() {
    //   slideBtn('prev');
    // });
    //
    // // attach click event to next button
    // $('#btn-next').on('click', function() {
    //   slideBtn('next');
    // });


  $(function() {
    $(".rslides").responsiveSlides();
  });



    // if($('.hamburger').css('display') == 'none') {
    //   $('.menu-overlay').fadeOut('slow');
    // }

}); // end doc.ready
