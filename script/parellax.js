document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach(function (element) {
    var offset = element.offsetTop;
    var distance = scrollPosition - offset;

    // Adjust the scaleFactor and direction for each section
    var scaleFactor = 1;
    var direction = 1; // Change to -1 for opposite direction

    // Different parallax movements for each section
    if (element.id === "home") {
      // Customize movement for Section 1 (Home)
      element.querySelector(".parallax-bg").style.transform =
        "translateX(" + distance * scaleFactor * direction + "px)";
    } else if (element.id === "about") {
      // Customize movement for Section 2 (About)
      scaleFactor = 2;
      direction = -1;
      element.querySelector(".parallax-bg").style.transform =
        "translateY(" + distance * scaleFactor * direction + "px)";
    } else if (element.id === "works") {
      // Customize movement for Section 3 (Works)
      scaleFactor = 1.5;
      direction = 1;
      element.querySelector(".parallax-bg").style.transform =
        "rotate(" + distance * scaleFactor * direction + "deg)";
    } else if (element.id === "projects") {
      // Customize movement for Section 4 (Projects)
      scaleFactor = 1.2;
      direction = -1;
      element.querySelector(".parallax-bg").style.transform =
        "scale(" + (1 + (distance * scaleFactor * direction) / 100) + ")";
    } else if (element.id === "contact") {
      // Customize movement for Section 5 (Contact)
      scaleFactor = 1.6;
      direction = 1;
      element.querySelector(".parallax-bg").style.transform =
        "skewX(" + distance * scaleFactor * direction + "deg)";
    }
  });
});
