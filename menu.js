let menu = document.querySelector('.fa-bars');
let close = document.querySelector('.close');
let nav = document.querySelector('nav');

menu.addEventListener('click', ()=>{
    nav.style.right = '0';
    menu.style.display = 'none';
})


close.addEventListener('click', ()=>{
    nav.style.right = '-100%';
    menu.style.display = 'block';
})