const body = document.querySelector('body');
const ul = document.querySelector('ul');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');



moon.addEventListener('click', ()=>{
  moon.classList.add('active-moon');
  body.classList.add('drk-bg');
  ul.classList.add('drk-bg')
});

sun.addEventListener('click', ()=>{
  moon.classList.remove('active-moon');
  body.classList.remove('drk-bg');
  ul.classList.remove('drk-bg');
  sun.style.background = 'black';
  sun.style.color = 'white';
});