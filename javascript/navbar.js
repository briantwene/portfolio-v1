

const navbar = document.querySelector("nav");
const innerNav = document.querySelector("#navList")
const hero = document.querySelector("#home");
const hamburgerToggle = document.querySelector("#nav-toggle")





//event listener for when the user selects a link from the nav in mobile mode
navbar.addEventListener("click", (e) => {
    if(event.target.parentNode.classList.contains("link")) {
        hamburgerToggle.checked = false
    }
})




// Intersection Observer setup
const observer = new IntersectionObserver(entries => {

    const element = entries.find(entry => entry.target === hero);
    console.log(element)

    // toggle off the sticky navigation based on user viewport
    if (element) {
        if(window.innerWidth >= 768) {
            element.isIntersecting ?  innerNav.classList.remove("sticky") : innerNav.classList.add("sticky");
        } else {
            element.isIntersecting ?  navbar.classList.remove("sticky") : navbar.classList.add("sticky")
        }
        
    }

})




observer.observe(hero);