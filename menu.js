let menu = document.querySelector('.fa-bars');
let close = document.querySelector('.close');
let dim = document.querySelector('.dim');
let nav = document.querySelector('nav');

menu.addEventListener('click', ()=>{
    nav.style.right = '0';
    menu.style.display = 'none';
    dim.style.display = 'block';
})


close.addEventListener('click', ()=>{
    nav.style.right = '-100%';
    menu.style.display = 'block';
    dim.style.display = 'none';
})
