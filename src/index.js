const navOpen = document.getElementById("Mobile-nav-open");
const defaultMobileNav = document.getElementById("Mobile-default-nav");
const openMobileNav = document.getElementById("Mobile-nav");
const closeMobileNav = document.getElementById("Mobile-close");

navOpen.addEventListener("click", ()=>{
    console.log("clicked")
    defaultMobileNav.classList.add("hidden") 
    openMobileNav.classList.remove("hidden")
    openMobileNav.classList.add("flex")
})

closeMobileNav.addEventListener("click", ()=> {
    defaultMobileNav.classList.remove("hidden") 
    defaultMobileNav.classList.add("flex") 

    openMobileNav.classList.add("hidden")
    openMobileNav.classList.remove("flex")
})