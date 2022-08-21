const primaryNavigation = document.querySelector('.primary-navigation');
const mobileToggle = document.querySelector('.mobile-nav-toggle');


mobileToggle.addEventListener("click", ()=>{

    const dataVisible = primaryNavigation.getAttribute('data-visible');
    // const areaExpand = mobileToggle.getAttribute('aria-expanded');

    // console.log("Get Attribute", dataVisible);
    // console.log("Get Attribute2", areaExpand);

    if(dataVisible == "false"){
        primaryNavigation.setAttribute("data-visible", true);
        mobileToggle.setAttribute("aria-expanded", true);
    }else{
        primaryNavigation.setAttribute("data-visible", false);
        mobileToggle.setAttribute("aria-expanded", false);
    }

});
