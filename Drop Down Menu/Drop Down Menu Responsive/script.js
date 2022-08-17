let navbar = document.querySelector('.navbar');
let searchBoxIcon = document.querySelector('.search-box .icon');
let menuIcon = document.querySelector('.navbar .menu-icon');
let closeMenu = document.querySelector('.navbar .close-menu');
let navLinks = document.querySelector('.navbar .nav-links');
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
let jsArrow = document.querySelector(".js-arrow");
let moreArrow = document.querySelector(".more-arrow");

searchBoxIcon.addEventListener("click", () => {
    navbar.classList.toggle("showSearchBox");
    if(navbar.classList.contains("showSearchBox")){
        searchBoxIcon.classList.replace("bx-search-alt-2", "bx-x");
    }else{
        searchBoxIcon.classList.replace("bx-x", "bx-search-alt-2");
    }
});

menuIcon.addEventListener("click", ()=>{
    navLinks.style.left = "0";
});

closeMenu.addEventListener("click", ()=>{
    navLinks.style.left = "-100%";
});
htmlcssArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1"); 
});
moreArrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show2");
})
jsArrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show3");
});
