const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bxs-moon");

toggle.addEventListener("change", ()=>{
  body.classList.toggle("dark");
  sunIcon.className=
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className=
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});



// const body = document.querySelector('body');
// const ul = document.querySelector('ul');
// const moon = document.querySelector('.moon');
// const sun = document.querySelector('.sun');



// moon.addEventListener('click', ()=>{
//   moon.classList.add('active-moon');
//   body.classList.add('drk-bg');
//   ul.classList.add('drk-bg')
// });

// sun.addEventListener('click', ()=>{
//   moon.classList.remove('active-moon');
//   body.classList.remove('drk-bg');
//   ul.classList.remove('drk-bg');
//   sun.style.background = 'black';
//   sun.style.color = 'white';
// });