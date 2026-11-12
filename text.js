
const header = document.querySelector('header');

window .addEventListener('scroll', () => {
    console.log(window.scrollY);  

    if (window.scrollY >= 20) {
        header.classList.add('active_nav');
    }
    else {
        header.classList.remove('active_nav');
    }
})

// let menu = document.getElementById("menu")
// menu.style.height = ("0");

// function toggleMenu() {
//     if (menu.style.height == "0px" ){

//         menu.style.height = "100vh"

//     }else {

//         menu.style.height = "0px"
//     }
// }

let menu = document.getElementById("menu")
let openIcon = document.getElementById("openIcon")
let closeIcon = document.getElementById("closeIcon");


function toggleMenu() {
    menu.style.display = "block"
    openIcon.style.display = "none"
    closeIcon.style.display = "block"
}

   function closeMenu() {
    menu.style.display = "none"
    closeIcon.style.display = "none"
    openIcon.style.display = "block"
   }