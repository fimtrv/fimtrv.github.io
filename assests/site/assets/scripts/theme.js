//======================= HOME HERO START=========================
function setHero() {
  if ($(window).width() > 575) {
      $("section.hero, .page-title, section.banner").css("transform", "translate(0, " + $("header").innerHeight() + "px)");
      $("section.hero, .page-title, section.banner").css("transition", "all 0.3s");
  } else {
      // $("section.hero, .page-title, section.banner").css("margin-top", "" + $("header").innerHeight() + "px")
      $("section.hero, .page-title, section.banner").css("margin-top", $("header").height() + 16 + "px");
      $("section.hero, .page-title, section.banner").css("transition", "all 0.3s")
  }

  
  

}

$(window).ready(function() {
  setHero();
});
$(window).resize(function() {
  setHero();
});

//======================= HOME HERO END=========================

// ======================HEADER FIX START=====================

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

//SET QUICK SCROLL TAB START
// function setQuckScrollTab() {
//   if ($(window).width() < 575) {
//   $(".list-switch").css("top", $("header").innerHeight());
//   }
// }

// $(window).ready(function() {
//   setQuckScrollTab();
// });
// $(window).resize(function() {
//   setQuckScrollTab();
// });


$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
      hasScrolled();
      didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("header").removeClass("nav-up").addClass("nav-down");
      $("section.hero").css("transform", "translate(0, 0px)");
      $("section.banner").css("transform", "translate(0, 0px)");
      if ($(window).width() < 767) {
          $(".list-switch").css("transform", 'translate(0, 0)');
      }

  } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
          $("header").removeClass("nav-down").addClass("nav-up");
          if ($(window).width() < 767) {
              $(".list-switch").css("transform", 'translate(0, 100%)');

          }
          if ($(window).width() > 575) {
              $("section.hero, .page-title, section.banner").css("transform", "translate(0, " + $("header").innerHeight() + "px)");
          }

      }
  }

  lastScrollTop = st;
}

// ======================HEADER FIX END=====================

//======================= OWL START =========================

$("section.hero .owl-carousel").owlCarousel({
  lazyLoad: true,
  autoHeight: true,
  autoHeightClass: "owl-height",
  dots: true,
  loop: true,
  autoplay: true,
  margin: 0,
  autoplayTimeout: 5000,
  items: 1,
  smartSpeed: 1500,
});


function setDotsPos() {
  if ($(window).width() > 575) {
      $("section.hero .owl-carousel .owl-dots").css('bottom', $("section.hero").height() / 4)
  } else {
      $("section.hero .owl-carousel .owl-dots").css('bottom', $("section.hero").height() / 7)
  }
}




$(window).ready(function() {
  setDotsPos();
});
$(window).resize(function() {
  setDotsPos();
});


$("section.packages-list .owl-carousel").owlCarousel({
  lazyLoad: false,
  loop:true,
  margin:10,
autoplay:true,
 autoHeight: true,
  autoHeightClass: "owl-height",
  dots: false,
  loop: true,
  nav: false,
  autoplay: true,
  nav:true,
   autoplayTimeout: 5000,
  items: 1,
  smartSpeed: 500,    
  responsiveClass: true,
 
 
  responsive:{
      0:{
          items:1.5,
          nav: false,
          margin:20,
          autoWidth:true,
      },
      
           600: {
          items: 2,
          nav: false,
          margin: 20,
      },
      1000: {
          items: 3,
          nav: false,
          margin: 20,
      },
      1200: {
          items: 4,
          nav: false,
          margin: 30,
      },
  }
});

$("section.location-list .owl-carousel").owlCarousel({
  lazyLoad: true,
  loop:true,
  margin:10,
autoplay:true,
 autoHeight: true,
  autoHeightClass: "owl-height",
  dots: false,
  loop: true,
  nav: false,
  autoplay: true,
  nav:true,
   autoplayTimeout: 5000,
  items: 1,
  smartSpeed: 500,    
  responsiveClass: true,
 
 
  responsive:{
      0:{
          items:1.5,
          nav: false,
          margin:20,
          autoWidth:true,
      },
      
           600: {
          items: 2,
          nav: false,
          margin: 20,
      },
      1000: {
          items: 3,
          nav: false,
          margin: 20,
      },
      1200: {
          items: 4,
          nav: false,
          margin: 30,
      },
  }
});

$("section.services-list .owl-carousel").owlCarousel({
  lazyLoad: true,
  autoHeight: true,
  autoHeightClass: "owl-height",
  dots: false,
  loop: false,
  nav: false,
  autoplay: true,
  margin: 30,
  autoplayTimeout: 5000,
  items: 1,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
      },
      600: {
          items: 2,
      },
      1000: {
          items: 3,
      },
      1200: {
          items: 4,
      },
  },
});

$("section.reviews .owl-carousel").owlCarousel({
  lazyLoad: true,
  autoHeight: true,
  autoHeightClass: "owl-height",
  dots: true,
  loop: false,
  nav: false,
  autoplay: true,
  margin: 30,
  autoplayTimeout: 5000,
  items: 1,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
          dots: false,
          nav: false,
      },
      600: {
          items: 1,
          dots: true,
      },
      1000: {
          items: 1,
          dots: true,
      },
  },
});



$("section.about-us .owl-carousel").owlCarousel({
  lazyLoad: true,
  autoHeight: true,
  autoHeightClass: "owl-height",
  dots: false,

  loop: true,
  nav: false,
  autoplay: true,
  margin: 0,
  startPosition: 1,
  center: true,
  autoplayTimeout: 4000,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
          stagePadding: 0,

      },
      600: {
          items: 1,

          stagePadding: 100,
      },
      1000: {
          items: 1,

          stagePadding: 200,
      },
  },
});



/*
function packageLarge() {
if ($(window).width() < 575) {
    $('section.all-packages .mobile-slider').addClass('owl-carousel');
    $("section.all-packages .owl-carousel").owlCarousel({
        lazyLoad: true,
        autoHeight: true,
        autoHeightClass: "owl-height",
        dots: false,
        loop: true,
        nav: true,
        // navText: ["<i class='ph-caret-left-thin'></i>", "<i class='ph-caret-right-thin'></i>"],
        margin: 50,
        autoplayTimeout: 3000,
        slideTransition: "linear",
        smartSpeed: 500,
        autoplayHoverPause: true,
        items: 1,
        autoplay: true,
        touchDrag: true,
        mouseDrag: true,
    });




} else {
    $('section.all-packages .mobile-slider').owlCarousel('destroy');
    $('section.all-packages .mobile-slider').addClass('row');
}
}


$(window).ready(function() {
packageLarge();
});
$(window).resize(function() {
packageLarge();
});*/




function stetOwlNavArrowPosition(evenodd) {
  $(".arrow-center").each(function() {
      $(this)
          .find(".owl-nav button")
          .css("top", $(this).find(".owl-item").height() / 2 - 15);
  });
}

$(window).ready(function() {
  stetOwlNavArrowPosition();
});
$(window).resize(function() {
  stetOwlNavArrowPosition();
});

//======================= OWL END =========================

//======================= LOAD START =========================
$(window).load(function() {
  $(".se-pre-con").fadeOut("slow");
  setTimeout(function() {
      $(".float-whatsapp").addClass("show");
      $(".float-whatsapp").addClass("animate__animated animate__bounce");
  }, 1000);
});
//======================= LOAD END =========================


//======================= HOME ABOUT START=========================

window.addEventListener("scroll", function(e) {
  var scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
  $(".hero .content").css("opacity",
      Math.max(0, Math.min(1, -scroll / 300 + 2))
  );
});

function setAbout() {
  if ($(window).width() > 575) {
      $("section.set-second-banner").css("margin-top", $("section.hero").height());
  }
}

$(window).ready(function() {
  setAbout();
});
$(window).resize(function() {
  setAbout();
});

//=======================  HOME ABOUT END=========================




//======================= SINGLE MORE INFO START=========================

$(".list-switch li").click(function() {
  var switchItem = $(this).data("item");


  $('html, body').animate({
      scrollTop: $('.item[data-item="' + switchItem + '"]').offset().top
  }, 100);



  $(".list-switch li").removeClass("secondary");
  $(".list-switch li").addClass("default");
  $(this).addClass("secondary");
  $(this).removeClass("default");
  $(".info-wrpr .item").removeClass("active");
  $('.info-wrpr .item[data-item="' + switchItem + '"]').addClass(
      "active"
  );
});
//======================= SINGLE MORE INFO END=========================


//======================= COPY BANK INFO START=========================

$("section.payment-options .payments .card .back ul li div").click(function() {
  value = $(this).data('clipboard-text'); //Upto this I am getting value

  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(value).select();
  document.execCommand("copy");
  $temp.remove();
  $(this).parent().append('<div class="copied">Copied<div>')
  setTimeout(function() {
      $('.copied').remove();
  }, 1500);

});
//======================= COPY BANK INFO END=========================

//======================= orientationchange=========================
$(window).on("orientationchange", function(event) {
  location.reload();
});





//======================= DROPDOWN DISABLE START=========================
// function disableDropdowb() {
//   if ($(window).width() < 1199) {
//       $(".navbar-nav").find('.dropdown').removeClass('dropdown').addClass('disable-dropdown')
     
//   } 
//   else{
//     $(".navbar-nav").find('.disable-dropdown').removeClass('disable-dropdown').addClass('dropdown')
//   }

// }

// $(window).ready(function() {
//   disableDropdowb();
// });
// $(window).resize(function() {
//   disableDropdowb();
// });


//======================= MODAL POPUP START=========================

// $(window).on('load', function() {
//   $('#welcomePopup').modal('show');
// });


//======================= DROPDOWN SMALL SCREENS START=========================

function expandSubMenue() {

      $(".nav-item.icon").append('<button class="btn-collpase d-xl-none" onclick="showDropdown(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg></button>');
   
}

$(window).ready(function() {
  expandSubMenue();
});

$(window).on("orientationchange", function(event) {
  expandSubMenue();
});


/* Navbar toggler */
const toggleBtn = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");
const navCloseBtn = document.querySelector(".btn-nav-close");

toggleBtn.addEventListener("click", () => {
	navbarNav.classList.toggle("active");
  $('body').css('overflow','hidden')
});
navCloseBtn.addEventListener("click", () => {
	navbarNav.classList.remove("active");
  var openIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list nav-toggle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>';
$('.navbar-toggler').removeAttr("onclick");
$('.navbar-toggler').find("svg").remove();
$('.navbar-toggler').append(openIcon);
$('.navbar-toggler').attr("onclick", "navActionStart(this)");
$('body').css('overflow','auto')
});


/* Add icon on .nav-item if dropdown exists */
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
	const hasDropdowns = item.querySelector(".dropdown") !== null;
	if (hasDropdowns) {
		item.classList.add("icon");
	}
});




function showDropdown(e){
  $(e).find('ul.dropdown').removeClass('expand')
  $(e).parents('.nav-item.icon').find('.dropdown .expand').removeClass('expand')
  $(e).parents('.nav-item.icon').find('.dropdown button').html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>')
  $(e).parents('.nav-item.icon').find('.dropdown button').removeAttr('onclick','hideDropdown(this)')
  $(e).parents('.nav-item.icon').find('.dropdown button').attr('onclick','showDropdown(this)')
  $(e).prev('ul').addClass('expand')
  $(e).removeAttr('onclick','showDropdown(this)')
  $(e).attr('onclick','hideDropdown(this)')
  $(e).html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="48 160 128 80 208 160" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>')
  }
  
  
  function hideDropdown(e){
    $(e).find('ul.dropdown').removeClass('expand')
    $(e).prev('ul').removeClass('expand')
    $(e).removeAttr('onclick','hideDropdown(this)')
    $(e).attr('onclick','showDropdown(this)')
    $(e).html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>')
    }

/* NEW INPUT FIELDS */

function setFocus(on) {
  var element = document.activeElement;
  if (on) {
    setTimeout(function () {
      element.parentNode.classList.add("focus");
    });
  } else {
    let box = document.querySelector(".input-box");
    box.classList.remove("focus");
    $("input").each(function () {
      var $input = $(this);
      var $parent = $input.closest(".input-box");
      if ($input.val()) $parent.addClass("focus");
      else $parent.removeClass("focus");
    });
  }
}
