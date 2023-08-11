$(document).ready(function() {
  var lastScrollTop = 0;
  var scrolling = false;

  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    if (st > lastScrollTop && !scrolling) {
      // Scroll down - hide navigation
      $(".transparent-header").removeClass("active");
    } else if (st < lastScrollTop && !scrolling) {
      // Scroll up - show navigation
      $(".transparent-header").addClass("active");
    }

    // Show navigation if user is at the bottom of the page
    if (st + windowHeight >= documentHeight - 1) {
      $(".transparent-header").addClass("active");
    }

    lastScrollTop = st;
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      scrolling = false;
    }, 250));
    scrolling = true;
  });

  // Smoothly scroll to the target section with parallax effect
  $("nav ul li a").click(function(e) {
    e.preventDefault();
    var targetId = $(this).attr("href");
    var targetSection = $(targetId);
    if (targetSection.length) {
      var targetOffset = targetSection.offset().top;
      $("html, body").animate({ scrollTop: targetOffset }, 800);
    }
  });

  // Smoothly scroll to the Learn section when button is clicked
  $(".futuristic-button").click(function(e) {
    e.preventDefault();
    var targetId = $(this).attr("href");
    var targetSection = $(targetId);
    if (targetSection.length) {
      var targetOffset = targetSection.offset().top;
      $("html, body").animate({ scrollTop: targetOffset }, 800);
      setTimeout(function() {
        window.location.href = "courses.html";
      }, 800);
    }
  });
});
