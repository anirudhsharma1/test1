// Navbar
const navLinks = document.getElementById('navLinks');
function showMenu(){
    navLinks.style.right = '0';
}
function hideMenu(){
    navLinks.style.right = '-200px';
}

// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("nav").style.fontSize = "30px";
//   } else {
//     document.getElementById("nav").style.fontSize = "90px";
//   }
// }