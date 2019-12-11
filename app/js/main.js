$(function() {

	$(".rating").rateYo({
    rating: 4.5,
    starWidth: "15px",
    halfStar: true,
    readOnly: true
  });

  $('input, select').styler();

  $('.featured__inner').slick({
  	prevArrow: '<button type="button" class="slick-prev"><span class="icon-angle-left"></span></button>',
  	nextArrow: '<button type="button" class="slick-next"><span class="icon-angle-right"></span></button>'
  });

  $('.followers__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-angle-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-angle-right"></span></button>'
  });

  $('.feedback__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  });

  var mixer = mixitup('.newest__inner-box');

});