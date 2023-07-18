$(document).ready(function() {
    $(' .faq-orders-accordian-que:nth-child(1) .faq-orders-accordian-text').addClass('active');
    $(' .faq-orders-accordian-que:nth-child(1) .faq-orders-accordian-ans').slideDown();
    $('.faq-orders-accordian-text').on('click', function() {
        if($(this).hasClass('active')) {
          $(this).siblings('.faq-orders-accordian-ans').slideUp();
          $(this).removeClass('active');
        }
        else {
          $('.faq-orders-accordian-ans').slideUp();
          $('.faq-orders-accordian-text').removeClass('active');
          $(this).siblings('.faq-orders-accordian-ans').slideToggle();
          $(this).toggleClass('active');
        }
    });     
});


$(document).ready(function() {
  $(' .faq-shipping-accordian-que:nth-child(1) .faq-shipping-accordian-text').addClass('active');
  $(' .faq-shipping-accordian-que:nth-child(1) .faq-shipping-accordian-ans').slideDown();
  $('.faq-shipping-accordian-text').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).siblings('.faq-shipping-accordian-ans').slideUp();
        $(this).removeClass('active');
      }
      else {
        $('.faq-shipping-accordian-ans').slideUp();
        $('.faq-shipping-accordian-text').removeClass('active');
        $(this).siblings('.faq-shipping-accordian-ans').slideToggle();
        $(this).toggleClass('active');
      }
  });     
});

$(document).ready(function() {
  $(' .faq-products-accordian-que:nth-child(1) .faq-products-accordian-text').addClass('active');
  $(' .faq-products-accordian-que:nth-child(1) .faq-products-accordian-ans').slideDown();
  $('.faq-products-accordian-text').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).siblings('.faq-products-accordian-ans').slideUp();
        $(this).removeClass('active');
      }
      else {
        $('.faq-products-accordian-ans').slideUp();
        $('.faq-products-accordian-text').removeClass('active');
        $(this).siblings('.faq-products-accordian-ans').slideToggle();
        $(this).toggleClass('active');
      }
  });     
});