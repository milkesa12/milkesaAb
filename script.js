const navlink=
document.querySelectorAll('nav-link');
navLinks.forEac(link=>{
link.addEventListener('click',function(e) {
e.preventDefault();
const target=
document.querySelector(this.getAttribute('href'));
target.scrollintoView({
    behavior:'ssmooth'
});
navLink .forEach(link=>
    link.classList.remove('active')
);
this.classList.add('active');
});
});
link.addEventListener('mouseover',()=>{
    link.style.color="blue";
    link.style.fontWeight="bold";
    link.style.textDecoration="underline";
});
link.addEventListener('mouseout',()=>{
    link.style.color="";
    link.style.fontWeight="";
    link.style.textDecoration="";
});
