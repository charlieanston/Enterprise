var slideIndex = 0;
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
// var modalReserve = document.getElementById("reserveModal"); // Reserve Modal
// var modalSignin = document.getElementById("signinModal"); // Sign In Modal
// var modalSignup = document.getElementById("signupModal"); // Sign Up Modal

// // Modal button
// var btnReserve = document.getElementById("reserveLink"); // Get the button that opens the modal
// var btnSignin = document.getElementById("signinLink");
// var btnSignup = document.getElementById("signupLink");

// // Modal span
// var spanReserve = document.getElementById("reserveClose"); // Get the <span> element that closes the modal
// var spanSignin = document.getElementById("signinClose");
// var spanSignup = document.getElementById("signupClose");

// // When the user clicks on the button, open the modal
// btnReserve.onclick = function() { // Opens reserve
//   modalReserve.style.display = "block";
//   modalSignin.style.display = "none";
//   modalSignup.style.display = "none";
// }
// btnSignin.onclick = function() { // Opens sign in
//   modalSignin.style.display = "block";
//   modalReserve.style.display = "none";
//   modalSignup.style.display = "none";
// }
// btnSignup.onclick = function() { // Opens sign in
//   modalSignup.style.display = "block";
//   modalReserve.style.display = "none";
//   modalSignin.style.display = "none";
// }

// // When the user clicks on <span> (x), close the modal
// spanReserve.onclick = function() { // Closes reserve
//   modalReserve.style.display = "none";
// }
// spanSignin.onclick = function() { // Closes sign in
//   modalSignin.style.display = "none";
// }
// spanSignup.onclick = function() { // Closes sign in
//   modalSignup.style.display = "none";
// }

// function navCont () {
//   let naviContent = document.getElementById("navContent");
//   naviContent.innerHTML = '';
//   naviContent.innerHTML += `
//   <div class="container">
//       <div class="navBar">
//           <ul>
//               <li class="logo"><a href="/html/index.html"><img src="/img/Evo.png"></a></li>
//               <li><a href="/html/about.html">About Us</a></li>
//               <li><a href="/html/menu.html">Menu</a></li>
//               <li><a href="/html/location.html">Locations</a></li>
//               <li><a id="reserveLink">Book a Table</a></li>
//               <li><a id="signinLink">Delivery</a></li>
//           </ul>
//       </div>
//   </div>`;
// }
// navCont();

function slideCont () {
  let slideContent = document.getElementById("slideContent");
  slideContent.innerHTML = '';
  slideContent.innerHTML += `
  <div id="slideshow-container">
    <div class="mySlides fade">
      <img src="/img/Breakfast/Belgian-Waffles.jpg" class="slide">
      <div class="text"><h2>[Innovate.]</h2></div>
    </div>

    <div class="mySlides fade">
      <img src="/img/Lunch/Chunky-Chicken-Salad-with-Grapes-and-Pecans.jpg" class="slide">
      <div class="text"><h2>[Redesign.]</h2></div>
    </div>

    <div class="mySlides fade">
      <img src="/img/Dinner/Beef-Pot-Roast.jpg" class="slide">
      <div class="text"><h2>[Evolve.]</h2></div>
    </div>
  </div>
  <div class="welcome">
    <h1>Our Story</h1>
    <p class="welcomeP">
      Evo Eatery reimagines the wonders of Western culinary, showing the future of Western dishes.
      Our eatery strives to evoke the curiosity long forgotten by most people, through culinary means.
    </p>
    <p class="welcomeP">
      We are native to Vietnam, but our passion for the learning of cuisines all over the world has lead us
      to a revolution, an evolution in culinary science, in pursuit of extraordinary taste.
    </p>
  </div>
  <div class="banner">
    <img src="/img/Banner.jpg">
  </div>`;
}
slideCont();

