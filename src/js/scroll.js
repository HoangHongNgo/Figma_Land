window.addEventListener("scroll", function() {
    var element = document.getElementsByClassName("header")[0];
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var targetScroll = 500; // Adjust this value to change when the color change occurs
  
    if (scrollTop > targetScroll) {
      element.style.background = "var(--bg-gradient-color)"; // Change to the desired background color
    } else {
      element.style.backgroundColor = "rgba(0, 0, 0, 0)";
      element.style.background = ""; // Revert to the initial background color
    }
  });
  