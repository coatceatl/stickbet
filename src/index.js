import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';

$(document).ready(function() {

  /* toogle class active in rights block(in buttons) */

  $('.right__coupon a, .right__options a').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
  });

  /* button close for selected coupons */
  $('.selected-close').on('click', function(){
    $(this).closest('.selected-item').addClass('hidden');
  });

  /* handler for mobile menu */
  $('#coupon-open').on('click', function(e) {
    e.preventDefault();
    $('.right-wrap').toggleClass('mobile-open');
  });

  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    $('.left-wrap__mobile').toggleClass('mobile-open');
  });

});
