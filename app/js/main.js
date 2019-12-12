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

  $('.grid-btn').on('click', function() {
    $('.grid-btn').addClass('active-btn');
    $('.product__item').removeClass('item-list');
    $('.list-btn').removeClass('active-btn');
  });
  $('.list-btn').on('click', function() {
    $('.list-btn').addClass('active-btn');
    $('.product__item').addClass('item-list');
    $('.grid-btn').removeClass('active-btn');
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 500,
    from: 30,
    to: 300,
    prefix: "$"
  });

  $('.wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });


  var mixer = mixitup('.newest__inner-box');

});