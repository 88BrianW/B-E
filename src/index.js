

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <header id="header" class="flex justify-around py-4 bg-[#083D77] fixed w-screen items-center">
        <div id="Mobile-default-nav" class="flex justify-around w-screen">
            <p class="text-xl lg:text-3xl text-white font-bold "><a href='index.html'>B&E Tutoring</a></p>
            <ul class="inline-block">
                <li class="float-left pr-4 text-white hidden lg:block lg:text-xl" ><a href="About.html">About</a></li>
                <li class="float-left pr-4 text-white hidden lg:block lg:text-xl" ><a href="">Services</a></li>
                <li class="float-left pr-4 text-white hidden lg:block lg:text-xl" ><a href="">Our Tutors</a></li>
            </ul>
            <button id="Mobile-nav-open" class="lg:hidden hover:cursor-pointer">
                <img src="./imgs/menu.svg" alt="" class="w-8">
            </button>
        </div>
        
        <div id="Mobile-nav" class="hidden">
            <ul class="text-center ">
                <li class="text-white text-3xl pb-4 lg:text-xl" ><a href="About.html">About</a></li>
                <li class="text-white text-3xl pb-4 lg:text-xl" ><a href="">Services</a></li>
                <li class="text-white text-3xl pb-4 lg:text-xl" ><a href="">Our Tutors</a></li>
            </ul>
            <button id="Mobile-close"class="lg:hidden hover:cursor-pointer max-w-12">
                <img src="./imgs/menu.svg" alt="" class="w-12 ">
            </button>
            
        </div>
    </header>
      `;
    }
  }
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer class="bg-[#073260] px-12 py-4 text-[#F7F7ED]">
        <h2 class="font-bold">B&E Programming</h2>
        <ul class="inline-block">
            <li class="pr-4" ><a href="">About</a></li>
            <li class="pr-4" ><a href="">Services</a></li>
            <li class="pr-4" ><a href="">Our Tutors</a></li>
        </ul>
    </footer>
      `;
    }
  }

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);

const navOpen = document.getElementById("Mobile-nav-open");
const defaultMobileNav = document.getElementById("Mobile-default-nav");
const openMobileNav = document.getElementById("Mobile-nav");
const closeMobileNav = document.getElementById("Mobile-close");
const header = document.getElementById("header")

navOpen.addEventListener("click", ()=>{
    console.log("clicked")
    defaultMobileNav.classList.add("hidden") 
    openMobileNav.classList.remove("hidden")
    openMobileNav.classList.add("flex", "flex-col-reverse", "items-center", "justify-around", "content-start", "gap-12")
    header.classList.add("h-[75vh]")
})

closeMobileNav.addEventListener("click", ()=> {
    defaultMobileNav.classList.remove("hidden") 
    defaultMobileNav.classList.add("flex") 

    openMobileNav.classList.add("hidden")
    openMobileNav.classList.remove("flex")

    header.classList.remove("h-[75vh]")

})