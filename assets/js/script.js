$(function () {
  "use strict";

  // WoW Js
  var wow = new WOW({
    offset: 2,
    mobile: false,
  });
  wow.init();

  //products part
  var containerEl = document.querySelector(".filter");
  var mixer = mixitup(containerEl);
});

$(".casino-slider").slick({
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: ".left-arrow",
  prevArrow: ".right-arrow",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".partner-slider").slick({
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
