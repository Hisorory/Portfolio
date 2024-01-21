var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

var slideIndex1 = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex1 += n);
}

function currentDiv(n) {
  showDivs(slideIndex1 = n);
}

function showDivs(n) {
  var y;
  var x = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (y = 0; i < x.length; i++) {
    x[y].style.display = "none";  
  }
  for (y = 0; i < dots.length; i++) {
    dots[y].className = dots[y].className.replace(" w3-white", "");
  }
  x[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " w3-white";
}