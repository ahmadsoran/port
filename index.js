let nvBtn = document.querySelector('.nvBtns');
let nvBtns = document.querySelectorAll('.nvBtn');
let navItem = document.querySelector('.nav-item');
let navItemLink = document.querySelectorAll('.nav-item a');
let navItemLinks = document.querySelector('.nav-item a');
let nav = document.querySelector('.navBg');
let cvBTn = document.querySelector('.customBTN1');



const portLink = document.querySelectorAll('.portHeaderLinks a')
const portLinkParent = document.querySelector('.portHeaderLinks')
portLinkParent.addEventListener('click',function(e) {
const clickedLink = e.target.closest('a');
e.preventDefault();
if (!clickedLink) return;

portLink.forEach(e => e.classList.remove('activedLink'));
clickedLink.classList.add('activedLink')
});


const portBtn = document.querySelectorAll('.portBtn button')
const portBtnParent = document.querySelector('.portBtn')
portBtnParent.addEventListener('click',function(e) {
const clickedBtn = e.target.closest('button');
e.preventDefault();
if (!clickedBtn) return;

portBtn.forEach(e => e.classList.remove('btnActive'));
clickedBtn.classList.add('btnActive')
});


function navMobile (){
    nvBtn.classList.toggle('afterClick');
    nvBtns.forEach(line => {
        line.classList.toggle('AnimNvBtn');
    });
    
    navItem.classList.toggle('open');
    navItemLink.forEach(link => { 
        link.classList.toggle('fade');
    });
    
}

nvBtn.addEventListener('click', navMobile);





navItemLink.forEach(links => {
    links.addEventListener('click', navMobile);
   
  
});

cvBTn.addEventListener('click', ()=>{
    alert("sorry this just an example")
})
navItemLinks.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  }); 
