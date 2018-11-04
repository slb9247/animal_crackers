$(document).on('ready', function() {

  /* hamburger menu */
    $('.hamburger').on('click', function() {
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

  /* home page modals */
  var trigger;

  $('.teamPic').on('click', function() {
      trigger = $(this).attr('id');
      setModalContent();
      $('.modal-overlay').show();
      $('body').addClass('hide');
  });

  function setModalContent() {
    if (trigger === "denise") {
      document.getElementById("modal-head").innerHTML = "Meet Denise";
      document.getElementById("modal-para").innerHTML = "I, Denise, am the proud owner of Animal Crackers Pet Shop & Grooming! Please feel free to contact us during store hours so I can assist you with all of your pet needs!"; /*CHANGE*/
    } else if (trigger === "bill") {
      document.getElementById("modal-head").innerHTML = "Meet Bill";
      document.getElementById("modal-para").innerHTML = "Bill is a nine-year-old standard poodle typically down mingling in the shop. I adopted him as a puppy mill rescue when he was just 11 months old. Poor Bill was a smelly matted mess when him and several other poodles were rescued, but I could see his big heart and gentle behavior in him and I was sold.";
    } else if (trigger === "gizmo") {
      document.getElementById("modal-head").innerHTML = "Meet Gizmo";
      document.getElementById("modal-para").innerHTML = "Gizmo is a female silver lop-eared rabbit and her best friend Ginger is a male guinea pig.  Gizmo loves all of her piggy friends and you will even catch her grooming them on occasion.";
    } else if (trigger === "paige") {
      document.getElementById("modal-head").innerHTML = "Meet Paige";
      document.getElementById("modal-para").innerHTML = "Paige, a 14-year-old beagle, belongs to our groomer, Shannon. Not one day goes by where she doesn't tag along with her.  You will usually see her in her bed napping under the grooming table.";
    } else if (trigger === "layla") {
      document.getElementById("modal-head").innerHTML = "Meet Layla";
      document.getElementById("modal-para").innerHTML = "Layla is a green cheek conure.";
    } else if (trigger === "harry") {
      document.getElementById("modal-head").innerHTML = "Meet Harry";
      document.getElementById("modal-para").innerHTML = "Harry is a yellow foot tortoise.";
    } else if (trigger === "beetle") {
      document.getElementById("modal-head").innerHTML = "Meet Beetle";
      document.getElementById("modal-para").innerHTML = "Beetle is a 15-year-old African spur thigh.";
    } else if (trigger === "speedy") {
      document.getElementById("modal-head").innerHTML = "Meet Speedy";
      document.getElementById("modal-para").innerHTML = "Speedy is a Russian tortoise.";
    } else if (trigger === "tort") {
      document.getElementById("modal-head").innerHTML = "Meet Tort";
      document.getElementById("modal-para").innerHTML = "Tort is our larger 15-year-old male African spur thigh.";
    } else if (trigger === "kamikaze") {
      document.getElementById("modal-head").innerHTML = "Meet Kamikaze";
      document.getElementById("modal-para").innerHTML = "Our newest guy, who came with no information, was happily dubbed by the Animal Crackers crew as Kamikaze. We believe he is a Hermann’s tortoise.";
    } else if (trigger === "beans") {
      document.getElementById("modal-head").innerHTML = "Meet Beans";
      document.getElementById("modal-para").innerHTML = "This is our pot belly pig. He may be small now, but just wait and see how big he can really get! He can usually be found eating or sleeping behind the counter like most piggies do best.";
    } else if (trigger === "reedyRiblettes") {
      document.getElementById("modal-head").innerHTML = "Meet Reedy and Riblettes";
      document.getElementById("modal-para").innerHTML = "";
    } else if (trigger === "frank") {
      document.getElementById("modal-head").innerHTML = "Meet Frank";
      document.getElementById("modal-para").innerHTML = "Frank is our second pot belly pig. He is very social and loves his belly rubs.";
    } else if (trigger === "kiwi") {
      document.getElementById("modal-head").innerHTML = "Meet Kiwi";
      document.getElementById("modal-para").innerHTML = "Kiwi is a very friendly chinchilla who loves to have her chin scratched. If you do not see her in her cage, she may be out and about rolling around in her ball.";
    }
  };

  $('.btn-close').on('click', function() {
      $('.modal-overlay').hide();
      $('body').removeClass('hide');
  });



  /* slideshows */
    $(function() {
      $(".rslides").responsiveSlides();
    });

}); // end doc.ready
