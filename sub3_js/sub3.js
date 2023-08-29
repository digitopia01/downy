document.addEventListener("DOMContentLoaded", function () {
  let movement = document.getElementById('fromleft');
  let movements = document.getElementsByClassName('fromright');

  function updateAnimations() {
    let value = window.scrollY;
    let windowWidth = window.innerWidth;
    console.log("scrollY", value);

    if (windowWidth > 851) {
      if (value > 1650) {
        movement.style.animation = "lefttomid 1s ease-out forwards";
        if (movements.length > 1) {
          movements[0].style.animation = "righttomid 1s ease-out forwards";
          movements[1].style.animation = "righttomid 1s ease-out forwards";
        }
      } else {
        movement.style.animation = "slideout 1s ease-out forwards";
        if (movements.length > 1) {
          movements[0].style.animation = "slideright 1s ease-out forwards";
          movements[1].style.animation = "slideright 1s ease-out forwards";
        }
      }
    } else {
      // If the window width is smaller than 851px, reset all animations
      movement.style.animation = "";
      for (let i = 0; i < movements.length; i++) {
        movements[i].style.animation = "";
      }
    }
  }

  // Call the function initially when the page loads
  updateAnimations();

  // Add a window resize event listener to update the animations whenever the window is resized
  window.addEventListener("resize", function () {
    updateAnimations();
  });

  // Add a scroll event listener to update the animations whenever the user scrolls
  window.addEventListener("scroll", function () {
    updateAnimations();
  });
});