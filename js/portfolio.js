var mixer = mixitup('.filter-container');

$(document).ready(function() {
    $('.filter-button').click(function() {
      $('.filter-button').removeClass('active');
      $(this).addClass('active');
    });
  });
  