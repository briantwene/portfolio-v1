
// get the needed elements
const navbar = document.querySelector("nav");
const innerNav = document.querySelector("#navList")
const hero = document.querySelector("#home");
const hamburgerToggle = document.querySelector("#nav-toggle")


let isDesktop = window.innerWidth >= 768;
let isHeroIntersecting = false;

const checkViewportMode = ({ target: { innerWidth } }) => {
  isDesktop = innerWidth >= 768;
  if (isDesktop) {
    hamburgerToggle.setAttribute("aria-expanded", "false");
  }
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
  if (e.target.closest(".link")) {
    hamburgerToggle.setAttribute("aria-expanded", "false");
  }
});

hamburgerToggle.addEventListener("click", () => {
  const isExpanded = hamburgerToggle.getAttribute("aria-expanded") === "true";
  hamburgerToggle.setAttribute("aria-expanded", String(!isExpanded));
});

// Intersection Observer setup
const observer = new IntersectionObserver((entries) => {
  const element = entries.find((entry) => entry.target === hero);
  // toggle off the sticky navigation based on user viewport
  if (element) {
    isHeroIntersecting = element.isIntersecting;
    setNavbarState();
  }
});



observer.observe(hero);