let nvBtn = document.querySelector('.nvBtns');
let nvBtns = document.querySelectorAll('.nvBtn');
let navItem = document.querySelector('.nav-item');
let navItemLink = document.querySelectorAll('.nav-item a');
let nav = document.querySelector('.navBg');
let cvBTn = document.querySelector('.customBTN1');
 
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

cvBTn.addEventListener('click', ()=>{
    alert("sorry there is no cv to download ")
})