// ----------------------li active---------------------------------


function changeNav(cls){
  $("." + cls).addClass("active");
}


// ------------------------li active--------------------------------


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  });
  