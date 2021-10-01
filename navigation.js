  /* Header Nav Scroll */
  $('/*header .menu a,*/ .page_top').on('click', function (e) {
    //e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffset
    }, 750);

    if ($(window).width() < 992) {
      $('header .menu').slideUp('fast');
      $('.header__mobile-topnav').removeClass('menu-open');
    }
  });


  var menuHasListener = false;

  function handleMenuListener() {
    if ($(window).width() < 992 && !menuHasListener) {
      // Header hamburger menu
      $('.header__mobile-topnav').on('click', function () {
        $('header .menu').toggle('fast');
        // $('header .menu_account').slideToggle('fast');
        $(this).toggleClass('menu-open');
      });
      menuHasListener = true;
    }
  }

  handleMenuListener();


  /* Brands Header Nav Scroll */


  $('.top-logo').on('click', function (e) {

    //e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - scrollOffset
    }, 750);

    if ($(window).width() < 992) {
      $('nav .brands-navbar__ul, nav .brands-navbar__social, nav .brands-navbar_accounts-mbl').slideUp('fast');
      $('.brands-navbar__mobile-topnav').removeClass('ham-active');
    }
  });

  var menuBrandHasListener = false;

  function handleBrandMenuListener() {
    if ($(window).width() < 992 && !menuBrandHasListener) {
      // Header hamburger menu
      $('.brands-navbar__mobile-topnav').on('click', function () {
        $('nav .brands-navbar__ul, nav .brands-navbar__social, nav .brands-navbar_accounts-mbl').toggle('fast');
        $(this).toggleClass('ham-active');
        $('#brands_navigation hr').toggleClass('d-none');
      });
      menuBrandHasListener = true;
    }
  }

  handleBrandMenuListener();

 
 
 
 
 
 /* Fixed Nav Scroll Effect*/

 $(window).scroll(function () {
    const scroll = $(window).scrollTop();

    if (scroll >= $("#brands_navigation").height()) {
      $("#brands_navigation").addClass("brand-navbar__move-top brands-navbar__fixed");
    } else {
      $(".brands-navbar__fixed").removeClass("brand-navbar__move-top brands-navbar__fixed");
    }
  });


    /* Hide TR navbar in mobile view*/

    $(window).resize(function () {
        if ($(window).width() < 992) {
          // $('#tasty-theme').addClass('hidden');
          $('.navbar-default').css("display", "none");
        } else {
          // $('#tasty-theme').removeClass('hidden');
          $('.navbar-default').css("display", "flex");
        }
      }).resize();

   

       // TR Navbar in Mobile
  $('#button-mbl-back').on('click', function (e) {
    $('.navbar-default').hide().css('display' + 'none');
    // $('#brands_navigation').show();
    $('#brands_navigation').removeClass('hidden');
    $('.brands-navbar__mobile-topnav').addClass('ham-active');
    $('.brands-navbar__ul, .brands-navbar_accounts-mbl').css('display', 'block');
  });

    $('.product-align-right .products-item-text').each(function () {
    $(this).insertAfter($(this).parent().find('.products-item-image'));
  });

  $('.tr-navbar-trigger-mobile').on('click', function () {
    $('#brands_navigation').addClass('hidden');
    $('.navbar-default').show();
  });