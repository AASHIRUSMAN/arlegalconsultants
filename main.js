(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  // Function to subscribe to newsletter
  function subscribeNewsletter() {
    var email = $("#emailInput").val();
    if (validateEmail(email)) {
      console.log("Subscribed email: " + email);
      alert("Thank you for subscribing!");
    } else {
      alert("Please enter a valid email address.");
    }
  }

  // Simple email validation function
  function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  // Scroll to top on button click
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Toggle FAQ answers visibility
  $(".faq-question").click(function () {
    var answer = $(this).next();
    answer.slideToggle();
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $(".nav-bar").addClass("nav-sticky");
      $(".carousel, .page-header").css("margin-top", "73px");
    } else {
      $(".nav-bar").removeClass("nav-sticky");
      $(".carousel, .page-header").css("margin-top", "0");
    }
  });

  // Dropdown on mouse hover for larger screens
  function toggleNavbarMethod() {
    if ($(window).width() > 992) {
      $(".navbar .dropdown")
        .on("mouseenter", function () {
          $(this).addClass("show").find(".dropdown-menu").addClass("show");
        })
        .on("mouseleave", function () {
          $(this)
            .removeClass("show")
            .find(".dropdown-menu")
            .removeClass("show");
        });
    } else {
      $(".navbar .dropdown").off("mouseenter").off("mouseleave");
    }
  }
  toggleNavbarMethod();
  $(window).resize(toggleNavbarMethod);

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  // Blogs carousel
  $(".blog-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
})(jQuery);
