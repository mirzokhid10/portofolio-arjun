// window.onscroll = () => {
//   scrollNavbar();
// };

// scrollNavbar = () => {
//   // Target elements
//   const navBar = document.getElementById("heaDer");

//   if (document.documentElement.scrollTop > 100) {
//     navBar.classList.add("fixed-header");

//     // Change the color of links on scroll
//     for (let i = 0; i < links.length; i++) {
//       const element = links[i];
//       element.classList.add("text-black");
//     }
//   } else {
//     navBar.classList.remove("fixed-header");

//     // Change the color of links back to default
//     for (let i = 0; i < links.length; i++) {
//       const element = links[i];
//       element.classList.remove("text-black");
//     }
//   }
// };

document.getElementById("modeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

let elOpenModalBtn = document.getElementById("searchBtn");
let elModalBox = document.getElementById("modalBox");
let elCloseBtn = document.getElementById("closeBtn");

elOpenModalBtn.addEventListener("click", function () {
  elModalBox.classList.add("show");
});
elCloseBtn.addEventListener("click", function () {
  elModalBox.classList.remove("show");
});
