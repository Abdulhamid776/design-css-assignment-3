burger=document.querySelectorAll('.burger')
navbarItems=document.querySelectorAll('.navbar')
nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})