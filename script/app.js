const btn=document.getElementsByClassName("btn")[0];
const navbar=document.getElementsByClassName("navbar")[0];
const navlink=document.getElementsByClassName("nav-links")[0];
btn.addEventListener('click',()=>
{
    navbar.classList.toggle("active");
    navlink.classList.toggle("active");
})
navlink.addEventListener("click",()=>
{
    navbar.classList.toggle("active");
    navlink.classList.toggle("active");
})