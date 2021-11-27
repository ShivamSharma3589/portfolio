let media = window.matchMedia("(max-width: 700px)");

// window onload function  

window.addEventListener('load', ()=>{
    
});

// header section & phone's header section 

let body = document.getElementsByTagName('body')[0].style;
let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let cover = document.getElementById('cover');

/*
on click function for bar/nav/cover
->to show/hide the nav bar
->to toggle body for scrolling
*/

bar.addEventListener('click', ()=>{
    nav.style.bottom = '0%';
    cover.style.bottom = '0%';
    body.overflow = 'hidden';
});

nav.addEventListener('click', ()=>{
    cover.style.bottom = '-140%';
    nav.style.bottom = '-140%';
    body.overflow = 'auto';      
});

cover.addEventListener('click', ()=>{
    cover.style.bottom = '-140%';
    nav.style.bottom = '-140%';
    body.overflow = 'auto';      
});

/*
window scroll function to change the header color according to the scroll
 */

window.addEventListener('scroll', ()=>{
    let header = document.getElementById('header');
    let phHeader = document.getElementById('ph-header');
    let upArrow = document.getElementById('jump-to-top');
    if (window.pageYOffset == 0) {
        header.classList.remove('header-on-scroll');
        phHeader.classList.remove('header-on-scroll');
        upArrow.style.display = 'none';
    } else {
        header.classList.add('header-on-scroll');
        phHeader.classList.add('header-on-scroll');
        upArrow.style.display = 'block';
    }
});

// home section 

// about section 

// skills section 

// projects section 

let pLeft = document.getElementById('p-left');
let pRight = document.getElementById('p-right');
let projectSlider = document.getElementById('projects-slider');
let item = 0;
let size = projectSlider.offsetWidth;

pRight.addEventListener('click', ()=>{
    if (media.matches) {
        projectSlider.scrollBy(size , 0);
    } else {
        projectSlider.scrollBy(size / 3, 0);
    }
});

pLeft.addEventListener('click', ()=>{
    if (media.matches) {
        projectSlider.scrollBy(size * (-1), 0);
    } else {
        projectSlider.scrollBy((-1) * size / 3 , 0);
    }
});

// contact me section 