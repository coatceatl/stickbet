import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';

$(document).ready(function() {

  /* toogle class active in rights block(in buttons) */

  $('.right__coupon a, .right__options a').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
  });
});
