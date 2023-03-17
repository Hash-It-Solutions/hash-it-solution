var myDiv = document.getElementById("my-div");
myDiv.addEventListener("mouseover", function() {
  myDiv.innerHTML = "New content";
});

myDiv.addEventListener("mouseout", function() {
  myDiv.innerHTML = "Original content";
});
