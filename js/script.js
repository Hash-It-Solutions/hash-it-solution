// var myDiv = document.getElementById("my-div");
// myDiv.addEventListener("mouseover", function() {
//   myDiv.innerHTML = "New content";
// });

// myDiv.addEventListener("mouseout", function() {
//   myDiv.innerHTML = "Original content";
// });
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  });
  