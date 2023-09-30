
// get the needed elements
const navbar = document.querySelector("nav");
const innerNav = document.querySelector("#navList")
const hero = document.querySelector("#home");
const hamburgerToggle = document.querySelector("#nav-toggle")


let isDesktop = window.innerWidth >= 768;
let isHeroIntersecting = false;

const checkViewportMode = ({ target: { innerWidth } }) => {
  isDesktop = innerWidth >= 768;
  setNavbarState();
};

const setNavbarState = () => {
  // two cases if isDesktop and is intersecting
  if (isDesktop) {
    if (isHeroIntersecting) {
      innerNav.classList.remove("sticky");
      navbar.classList.remove("sticky");
    } else {
      innerNav.classList.add("sticky");
      navbar.classList.remove("sticky");
    }
  } else {
    if (isHeroIntersecting) {
      innerNav.classList.remove("sticky");
      navbar.classList.remove("sticky");
    } else {
      navbar.classList.add("sticky");
      innerNav.classList.remove("sticky");
    }
  }
};

window.addEventListener("resize", checkViewportMode);

//event listener for when the user selects a link from the nav in mobile mode
// this will close the navigation bar so that it doesnt stay open
navbar.addEventListener("click", (e) => {
  if (event.target.parentNode.classList.contains("link")) {
    hamburgerToggle.checked = false;
  }
});

// Intersection Observer setup
const observer = new IntersectionObserver((entries) => {
  const element = entries.find((entry) => entry.target === hero);
  console.log(element);

  // toggle off the sticky navigation based on user viewport
  if (element) {
    isHeroIntersecting = element.isIntersecting;
    setNavbarState();
  }
});



observer.observe(hero);