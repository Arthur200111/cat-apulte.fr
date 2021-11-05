// Scrolling Effect
$(window).on("scroll", function() {
      console.log( "ready!" );
      if($(window).scrollTop()) {
            $('.menu').addClass('black');
      }

      else {
      $('.menu').removeClass('black');
      }
})