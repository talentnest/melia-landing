//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 70) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });

    // Scroll to properties list when clicked on a country
    $('a.country-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 10 }, 800, 'easeInOutExpo');
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(){
  $('.navbar-toggle:visible').click();
});
