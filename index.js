let nvBtn = document.querySelector('.nvBtns');
let nvBtns = document.querySelectorAll('.nvBtn');
let navItem = document.querySelector('.nav-item');
let navItemLink = document.querySelectorAll('.nav-item a');
 
nvBtn.addEventListener('click',()=>{
nvBtns.forEach(line => {
    line.classList.toggle('AnimNvBtn');
});
navItem.classList.toggle('open');
navItemLink.forEach(link => { 
    link.classList.toggle('fade');
});

} 


)
