
const primaryNav = document.querySelector('.primary-navigation')
const mobileToggle = document.querySelector('.mobile-nav-toggle');


mobileToggle.addEventListener("click", () => {

    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        mobileToggle.setAttribute("aria-expanded", true);
    }else{
        primaryNav.setAttribute("data-visible", false);
        mobileToggle.setAttribute("aria-expanded", false);
    }

    console.log(visibility);
});