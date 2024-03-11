(function ($) {
  'use strict';

  /*
  |--------------------------------------------------------------------------
  | Template Name: ProHealth
  | Author: Laralink
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  |
  | 1. Preloader
  | 2. Mobile Menu
  | 3. Sticky Header
  | 4. Dynamic Background
  | 5. Swiper Initialize
  | 6. Modal Video
  | 7. Isotop
  | 8. Parallax
  | 9. Scroll Up
  | 10. Ripple
  | 11. Counter Animation
  | 12. Accordian
  | 13. Tab
  | 14. Review
  | 15. Light Gallery
  | 16. List And Grid View
  | 17. Light Gallery
  | 18. Cursor Animation
  |
  */

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on('load', function () {
    preloader();
    isotopInit();
  });

  $(function () {
    mainNav();
    stickyHeader();
    dynamicBackground();
    counterInit();
    swiperInit();
    modalVideo();
    isotopInit();
    parallaxEffect();
    scrollUp();
    rippleInit();
    accordian();
    tabs();
    review();
    lightGallery();
    listAndGridView();
    timeAndDatePicker();
    if ($.exists('.player')) {
      $('.player').YTPlayer();
    }
  });

  $(window).on('scroll', function () {
    parallaxEffect();
    counterInit();
    showScrollUp();
  });

  /*--------------------------------------------------------------
    1. Preloader
  --------------------------------------------------------------*/
  function preloader() {
    $('.cs_perloader').fadeOut();
    $('cs_perloader_in').delay(150).fadeOut('slow');
  }

  /*--------------------------------------------------------------
    2. Mobile Menu
  --------------------------------------------------------------*/
  function mainNav() {
    $('.cs_nav').append('<span class="cs_menu_toggle"><span></span></span>');
    $('.menu-item-has-children').append(
      '<span class="cs_munu_dropdown_toggle"><span></span></span>',
    );
    $('.cs_menu_toggle').on('click', function () {
      $(this)
        .toggleClass('cs_toggle_active')
        .siblings('.cs_nav_list')
        .toggleClass('cs_active');
      $('.cs_site_header').toggleClass('cs_mobile_toggle_active');
    });
    $('.cs_menu_toggle')
      .parents('body')
      .find('.cs_side_header')
      .addClass('cs_has_main_nav');
    $('.cs_munu_dropdown_toggle').on('click', function () {
      $(this).toggleClass('active').siblings('ul').slideToggle();
      $(this).parent().toggleClass('active');
    });

    // Side Nav and Search
    $('.cs_sidebar_toggle_btn').on('click', function () {
      $('.cs_sidenav').addClass('active');
    });
    $('.cs_search_toggle_btn').on('click', function () {
      $('.cs_header_search').addClass('active');
    });
    $('.cs_close, .cs_sidenav_overlay').on('click', function () {
      $('.cs_sidenav, .cs_header_search').removeClass('active');
    });
  }

  /*--------------------------------------------------------------
    3. Sticky Header
  --------------------------------------------------------------*/
  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.cs_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('cs_gescout_sticky');
      } else {
        $header.removeClass('cs_gescout_sticky');
        $header.removeClass('cs_gescout_show');
      }

      if ($header.hasClass('cs_gescout_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('cs_gescout_show');
        } else {
          $header.removeClass('cs_gescout_show');
        }
      }

      lastScrollTop = windowTop;
    });
  }

  /*--------------------------------------------------------------
    4. Dynamic Background
  --------------------------------------------------------------*/
  function dynamicBackground() {
    $('[data-src]').each(function () {
      var src = $(this).attr('data-src');
      $(this).css({
        'background-image': 'url(' + src + ')',
      });
    });
  }

  /*--------------------------------------------------------------
    5. Swiper Initialize
  --------------------------------------------------------------*/
  function swiperInit() {
    if ($.exists('.cs_department_carousel')) {
      $('.cs_department_carousel').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 6,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          dots: false,
          arrows: true,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
          responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
    }

    if ($.exists('.cs_brand_carousel')) {
      $('.cs_brand_carousel').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 5,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          dots: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
    }

    if ($.exists('.cs_testimonial_carousel')) {
      $('.cs_testimonial_carousel').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          dots: false,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
    }
    if ($.exists('.cs_testimonial_carousel_2')) {
      $('.cs_testimonial_carousel_2').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          dots: false,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
          variableWidth: true,
        });
      });
    }

    if ($.exists('.cs_iconbox_carousel_1')) {
      $('.cs_iconbox_carousel_1').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          dots: false,
          variableWidth: true,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
        });
      });
    }
    if ($.exists('.cs_related_doctor')) {
      $('.cs_related_doctor').each(function () {
        var $slickActive = $(this).find('.cs_slider_activate');
        $slickActive.slick({
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          dots: true,
          prevArrow: $(this).find('.cs_slider_prev'),
          nextArrow: $(this).find('.cs_slider_next'),
        });
      });
    }
  }

  /*--------------------------------------------------------------
    6. Modal Video
  --------------------------------------------------------------*/
  function modalVideo() {
    if ($.exists('.cs_video_open')) {
      $('body').append(`
        <div class="cs_video_popup">
          <div class="cs_video_popup_overlay"></div>
          <div class="cs_video_popup_content">
            <div class="cs_video_popup_layer"></div>
            <div class="cs_video_popup_container">
              <div class="cs_video_popup_align">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="about:blank"></iframe>
                </div>
              </div>
              <div class="cs_video_popup_close"></div>
            </div>
          </div>
        </div>
      `);
      $(document).on('click', '.cs_video_open', function (e) {
        e.preventDefault();
        var video = $(this).attr('href');

        $('.cs_video_popup_container iframe').attr('src', `${video}`);

        $('.cs_video_popup').addClass('active');
      });
      $('.cs_video_popup_close, .cs_video_popup_layer').on(
        'click',
        function (e) {
          $('.cs_video_popup').removeClass('active');
          $('html').removeClass('overflow-hidden');
          $('.cs_video_popup_container iframe').attr('src', 'about:blank');
          e.preventDefault();
        },
      );
    }
  }

  /*--------------------------------------------------------------
    7. Isotop
  --------------------------------------------------------------*/
  function isotopInit() {
    if ($.exists('.cs_isotop')) {
      $('.cs_isotop').isotope({
        itemSelector: '.cs_isotop_item',
        transitionDuration: '0.60s',
        percentPosition: true,
        masonry: {
          columnWidth: '.cs_grid_sizer',
        },
      });
      /* Active Class of Portfolio*/
      $('.cs_isotop_filter ul li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });
      /*=== Portfolio filtering ===*/
      $('.cs_isotop_filter ul').on('click', 'a', function () {
        var filterElement = $(this).attr('data-filter');
        $('.cs_isotop').isotope({
          filter: filterElement,
        });
      });
    }
  }

  /*--------------------------------------------------------------
    8. Parallax
  --------------------------------------------------------------*/
  function parallaxEffect() {
    $('.cs_parallax').each(function () {
      var windowScroll = $(document).scrollTop(),
        windowHeight = $(window).height(),
        barOffset = $(this).offset().top,
        barHeight = $(this).height(),
        barScrollAtZero = windowScroll - barOffset + windowHeight,
        barHeightWindowHeight = windowScroll + windowHeight,
        barScrollUp = barOffset <= windowScroll + windowHeight,
        barSctollDown = barOffset + barHeight >= windowScroll;

      if (barSctollDown && barScrollUp) {
        var calculadedHeight = barHeightWindowHeight - barOffset;
        var mediumEffectPixel = barScrollAtZero / 7;
        var miniEffectPixel = calculadedHeight / 10;
        var miniEffectPixel2 = calculadedHeight / 3;
        var miniEffectPixel3 = calculadedHeight / 6;
        var miniEffectPixel4 = barScrollAtZero / 5;
        $(this)
          .find('.cs_to_left')
          .css('transform', `translateX(-${miniEffectPixel}px)`);
        $(this)
          .find('.cs_to_right')
          .css('transform', `translateX(${miniEffectPixel}px)`);
        $(this)
          .find('.cs_to_up')
          .css('transform', `translateY(-${miniEffectPixel}px)`);
        $(this)
          .find('.cs_to_up_2')
          .css('transform', `translateY(-${miniEffectPixel2}px)`);
        $(this)
          .find('.cs_to_up_3')
          .css('transform', `translateY(-${miniEffectPixel3}px)`);
        $(this)
          .find('.cs_to_up_4')
          .css('transform', `translateY(-${miniEffectPixel4}px)`);
        $(this)
          .find('.cs_to_down')
          .css('transform', `translateY(${miniEffectPixel}px)`);
        $(this)
          .find('.cs_to_rotate')
          .css('transform', `rotate(${miniEffectPixel}deg)`);
        $(this)
          .find('.cs_parallax_bg')
          .css('background-position', `center -${mediumEffectPixel}px`);
      }
    });
  }

  /*--------------------------------------------------------------
    9. Scroll Up
  --------------------------------------------------------------*/
  function scrollUp() {
    $('.cs_scrollup').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate(
        {
          scrollTop: 0,
        },
        0,
      );
    });
  }
  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $('.cs_scrollup').addClass('cs_scrollup_show');
    } else {
      $('.cs_scrollup').removeClass('cs_scrollup_show');
    }
  }

  /*--------------------------------------------------------------
    10. Ripple
  --------------------------------------------------------------*/
  function rippleInit() {
    if ($.exists('.cs_ripple_activate')) {
      $('.cs_ripple_activate').each(function () {
        $('.cs_ripple_activate').ripples({
          resolution: 512,
          dropRadius: 20,
          perturbance: 0.04,
        });
      });
    }
  }
  /*--------------------------------------------------------------
    11. Counter Animation
  --------------------------------------------------------------*/
  function counterInit() {
    if ($.exists('.odometer')) {
      function winScrollPosition() {
        var scrollPos = $(window).scrollTop(),
          winHeight = $(window).height();
        var scrollPosition = Math.round(scrollPos + winHeight / 1.2);
        return scrollPosition;
      }

      $('.odometer').each(function () {
        var elemOffset = $(this).offset().top;
        if (elemOffset < winScrollPosition()) {
          $(this).html($(this).data('count-to'));
        }
      });
    }
  }

  /*--------------------------------------------------------------
    12. Accordian
  --------------------------------------------------------------*/
  function accordian() {
    $('.cs_accordian').children('.cs_accordian_body').hide();
    $('.cs_accordian.active').children('.cs_accordian_body').show();
    $('.cs_accordian_head').on('click', function () {
      $(this)
        .parent('.cs_accordian')
        .siblings()
        .children('.cs_accordian_body')
        .slideUp(250);
      $(this).siblings().slideDown(250);
      $(this)
        .parent()
        .parent()
        .siblings()
        .find('.cs_accordian_body')
        .slideUp(250);
      /* Accordian Active Class */
      $(this).parents('.cs_accordian').addClass('active');
      $(this).parent('.cs_accordian').siblings().removeClass('active');
    });
  }

  /*--------------------------------------------------------------
    13. Tab
  --------------------------------------------------------------*/
  function tabs() {
    $('.cs_tabs .cs_tab_links a').on('click', function (e) {
      var currentAttrValue = $(this).attr('href');
      $('.cs_tabs ' + currentAttrValue)
        .fadeIn(400)
        .siblings()
        .hide();
      $(this).parents('li').addClass('active').siblings().removeClass('active');
      e.preventDefault();
    });
  }

  /*--------------------------------------------------------------
    14. Review
  --------------------------------------------------------------*/
  function review() {
    $('.cs_rating').each(function () {
      var review = $(this).data('rating');
      var reviewVal = review * 20 + '%';
      $(this).find('.cs_rating_percentage').css('width', reviewVal);
    });
  }

  /*--------------------------------------------------------------
    15. Light Gallery
  --------------------------------------------------------------*/
  function lightGallery() {
    $('.cs_lightgallery').each(function () {
      $(this).lightGallery({
        selector: '.st_lightbox_item',
        subHtmlSelectorRelative: false,
        thumbnail: false,
        mousewheel: true,
      });
    });
  }

  /*--------------------------------------------------------------
    16. List And Grid View
  --------------------------------------------------------------*/
  function listAndGridView() {
    $('.cs_list_view').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('.cs_isotop')
        .removeClass('cs_isotop_col_3 cs_grid_view_wrap')
        .addClass('cs_isotop_col_1 cs_list_view_wrap');
      isotopInit();
    });

    $('.cs_grid_view').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('.cs_isotop')
        .removeClass('cs_isotop_col_1 cs_list_view_wrap')
        .addClass('cs_isotop_col_3 cs_grid_view_wrap');
      isotopInit();
    });
  }

  /*--------------------------------------------------------------
    17. Light Gallery
  --------------------------------------------------------------*/
  function timeAndDatePicker() {
    $('.cs_timepicker').timepicker({
      minTime: '9:00am',
      maxTime: '11:00pm',
    });
    $('#datepicker').datepicker();
    if ($.exists('.wow')) {
      new WOW().init();
    }
    if ($.exists('.cs_select')) {
      $('.cs_select').select2({
        placeholder: function () {
          $(this).data('placeholder');
        },
      });
    }
  }

  /*--------------------------------------------------------------
    18. Cursor Animation
  --------------------------------------------------------------*/
  $(function () {
    $('body').append('<span class="cs_cursor_lg d"></span>');
    $('body').append('<span class="cs_cursor_sm"></span>');

    $('.cs_view_mouse').on('mouseenter', function () {
      $('.cs_cursor_lg').addClass('opacity-0');
      $('.cs_cursor_sm').addClass('opacity-0');
    });
    $('.cs_view_mouse').on('mouseleave', function () {
      $('.cs_cursor_lg').removeClass('opacity-0');
      $('.cs_cursor_sm').removeClass('opacity-0');
    });
  });
  $(
    '<div class="cursor" id="client_cursor"><i class="fa-solid fa-link"></i></div>',
  ).insertBefore('body');
  function cursorMovingAnimation(event) {
    try {
      const timing = gsap.timeline({
        defaults: {
          x: event.clientX,
          y: event.clientY,
        },
      });

      timing
        .to('.cs_cursor_lg', {
          ease: 'power2.out',
        })
        .to(
          '.cs_cursor_sm',
          {
            ease: 'power2.out',
          },
          '-=0.4',
        );

      ////////////////////////////
      // Home Page Client Cursor
      const target = event.target;

      let tl = gsap.timeline({
        defaults: {
          x: event.clientX,
          y: event.clientY,
        },
      });
      let t2 = gsap.timeline({
        defaults: {
          x: event.clientX,
          y: event.clientY,
        },
      });
      var client_cursor = document.getElementById('client_cursor');
      if (target.closest('.cs_view_mouse')) {
        tl.to(
          client_cursor,
          {
            opacity: 1,
            zoom: 1,
            ease: 'power2.out',
          },
          '-=0.3',
        );
      } else {
        t2.to(
          client_cursor,
          {
            opacity: 0,
            ease: 'power2.out',
          },
          '-=0.3',
        );
      }
    } catch (err) {
      console.log(err);
    }
  }
  document.addEventListener('mousemove', cursorMovingAnimation);
})(jQuery); // End of use strict
