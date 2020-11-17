// Loader
$(window).on('load',function() {
  $('.loader-box').fadeOut();
});

// wow js config
new WOW().init();

// BX Slider
$(document).ready(function(){
  $('.slider').bxSlider({
        auto:true,
        trcker:true,
        
    });


    $('#main_menu').meanmenu({
        meanMenuContainer:'#mobile_menu',
        meanScreenWidth:768,
        
    });


});

// Top Scrool Button

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#top_scroll_button').fadeIn();
        } else{
            $('#top_scroll_button').fadeOut();
        }
    });

    $('#top_scroll_button').click(function(){
        $('html , body').animate({scrollTop:0},800);
    });
});



// Smooth Scrool
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

//////////
