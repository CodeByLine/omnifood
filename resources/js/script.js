// SCROLL UP/DOWN sticky navbar
$(document).ready(function() {
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass('sticky');                               // remove the 'sticky' class from the html file
            } else {                    // also add z-index=9999
                $("nav").removeClass('sticky');
            }
    }, { 
        offset: '60px;'
    });


    
// scrolling effects - scroll on buttons

     $('.js--scroll-to-plans').click(function () {
         $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

     });

     $('.js--scroll-to-start').click(function () {
         $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

     });

    
/* navigation smooth scroll *** fr https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
/* add anchor '#features' and add 'id=features' to destination*/    
    
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /* Animation on scroll */
    
    $('.js--wp-1').waypoint(function() {                /* wp: waypoint */    
        $('.js--wp-1').addClass('animated fadeIn');    // 'animated fadeIn' is how to use animate.css
    }, {                                                // Also need to make element invisible first
        offset: '50%;'                                   // Also need to add 'animate.css'
    });                                                   
    
    
    $('.js--wp-2').waypoint(function() {                /* wp: waypoint */    
    $('.js--wp-2').addClass('animated fadeIn');         // 'animated fadeIn' is how to use animate.css
    }, {                                                // Also need to make element invisible first
        offset: '50%;'                                   // Also need to add 'animate.css'
    }); 
    
    
    $('.js--wp-3').waypoint(function() {                /* wp: waypoint */    
    $('.js--wp-3').addClass('animated fadeInUp');    // 'animated fadeIn' is how to use animate.css
    }, {                                                // Also need to make element invisible first
        offset: '50%;'                                   // Also need to add 'animate.css'
    }); 
    
    $('.js--wp-4').waypoint(function() {                /* wp: waypoint */    
    $('.js--wp-4').addClass('animated pulse');    // 'animated fadeIn' is how to use animate.css
    }, {                                                // Also need to make element invisible first
        offset: '50%;'                                   // Also need to add 'animate.css'
    }); 
    
    
    /* Mobile Nav */
    
    $('.js--nav-icon').click(function() {    
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon');
        nav.slideToggle(200);                       // 'slideToggle': a jQuery function
        if (icon.hasClass('.ion-android-menu')) {
            icon.addClass('.ion-close');
            icon.removeClass('.ion-android-menu');
        } else {
            icon.addClass('.ion-android-menu');
            icon.removeClass('ion-close');
        }
    });
    
    
    // CHANGING H1 PROPERTIES:

        //$(document).ready(function() {
        //    $('h1').click(function() {
        //        $(this).css('background-color', '#ff0000');
        //        $(this).css('color', '#ff0000');
        //    })
        

});


