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

// Modal design
var modalReserve = document.getElementById("reserveModal"); // Reserve Modal
var modalSignin = document.getElementById("signinModal"); // Sign In Modal
var modalSignup = document.getElementById("signupModal"); // Sign Up Modal


// Modal button
var btnReserve = document.getElementById("reserveLink"); // Get the button that opens the modal
var btnSignin = document.getElementById("signinLink");
var btnSignup = document.getElementById("signupLink");

// Modal span
var spanReserve = document.getElementById("reserveClose"); // Get the <span> element that closes the modal
var spanSignin = document.getElementById("signinClose");
var spanSignup = document.getElementById("signupClose");

// When the user clicks on the button, open the modal
btnReserve.onclick = function() { // Opens reserve
  modalReserve.style.display = "block";
  modalSignin.style.display = "none";
  modalSignup.style.display = "none";
}
btnSignin.onclick = function() { // Opens sign in
  modalSignin.style.display = "block";
  modalReserve.style.display = "none";
  modalSignup.style.display = "none";
}
btnSignup.onclick = function() { // Opens sign in
  modalSignup.style.display = "block";
  modalReserve.style.display = "none";
  modalSignin.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
spanReserve.onclick = function() { // Closes reserve
  modalReserve.style.display = "none";
}
spanSignin.onclick = function() { // Closes sign in
  modalSignin.style.display = "none";
}
spanSignup.onclick = function() { // Closes sign in
  modalSignup.style.display = "none";
}

