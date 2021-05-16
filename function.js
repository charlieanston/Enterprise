var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Reserve Modal
// Get the modal
var modalReserve = document.getElementById("reserveModal");
// Get the button that opens the modal
var btnReserve = document.getElementById("reserveLink");
// Get the <span> element that closes the modal
var spanReserve = document.getElementById("reserveClose");
// When the user clicks on the button, open the modal
btnReserve.onclick = function() {
  modalReserve.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanReserve.onclick = function() {
  modalReserve.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalReserve) {
    modalReserve.style.display = "none";
  }
}

// Sign In Modal
var modalSignin = document.getElementById("signinModal");
var btnSignin = document.getElementById("signinLink");
// Get the <span> element that closes the modal
var spanSignin = document.getElementById("signinClose");
// When the user clicks on the button, open the modal
btnSignin.onclick = function() {
  modalSignin.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanSignin.onclick = function() {
  modalSignin.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSignin) {
    modalSignin.style.display = "none";
  }
}