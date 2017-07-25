$(document).ready(function() {
	var buttonScroll = false;

	// sticky navigation
	$(".js-team").waypoint(function(direction) {
		if (direction === "down") {
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
	}, {
		offset: '60px;'
	});


	// header page buttons
	$(".start-button").click(function() {
		buttonScroll = true;
		$("html, body").animate({scrollTop: $(".js-plans").offset().top}, 1000);
	});

	$(".info-button").click(function() {
		$("html, body").animate({scrollTop: $(".js-team").offset().top}, 1000);
	});


	// navigation buttons scrolling from css-tricks.com
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

  // animations
  $(".js-animation-1").waypoint(function(direction) {
  	!buttonScroll ? $(".js-animation-1").addClass("animated fadeIn"): $(".js-animation-1").css("opacity", "1");
  }, {
  	offset: "70%"
  });

  $(".js-animation-2").waypoint(function(direction) {
  	!buttonScroll ? $(".js-animation-2").addClass("animated fadeIn"): $(".js-animation-2").css("opacity", "1");
  }, {
  	offset: "70%"
  });

  $(".js-animation-3").waypoint(function(direction) {
  	!buttonScroll ? $(".js-animation-3").addClass("animated fadeIn"): $(".js-animation-3").css("opacity", "1");
  }, {
  	offset: "70%"
  });

  $(".js-animation-4").waypoint(function(direction) {
  	!buttonScroll ? $(".js-animation-4").addClass("animated fadeInLeft"): $(".js.animation-4").css("opacity", "1");
  }, {
  	offset: "70%"
  });

  $(".js-animation-5").waypoint(function(direction) {
  	$(".js-animation-5").addClass("animated pulse");
  }, {
  	offset: "70%"
  });

  //Nav-bar button
  $(".mobile-nav-icon").click(function() {
  	$(".main-nav").slideToggle(200);
  	$(".mobile-nav-icon i").toggleClass("fa-bars");
  	$(".mobile-nav-icon i").toggleClass("fa-window-close");
  })

  //Google Maps 
  new GMaps({
    div: '.map',
    lat: 29.717804,
    lng: -95.401788
  });

});