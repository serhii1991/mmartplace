$(function() {

	$(".rating").rateYo({
    rating: 4.5,
    starWidth: "15px",
    halfStar: true,
    readOnly: true
  });

  $('.featured__inner').slick({
  	prevArrow: '<button type="button" class="slick-prev"><span class="icon-angle-left"></span></button>',
  	nextArrow: '<button type="button" class="slick-next"><span class="icon-angle-right"></span></button>'
  });

  var mixer = mixitup('.newest__inner-box');

});