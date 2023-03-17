// $("#typed").typed({
//     strings: ["Hello world.", "Check this out.", "Add any text you like here."],
//     typeSpeed: 100,
//     startDelay: 0,
//     backSpeed: 60,
//     backDelay: 2000,
//     loop: true,
//     cursorChar: "|",
//     contentType: 'html'
// });


var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

