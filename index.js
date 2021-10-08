let nvBtn = document.querySelector('.nvBtns');
let nvBtns = document.querySelectorAll('.nvBtn');
let navItem = document.querySelector('.nav-item');
let navItemLink = document.querySelectorAll('.nav-item a');
let nav = document.querySelector('.navBg');
let cvBTn = document.querySelector('.customBTN1');
 

function navMobile (){

    nvBtns.forEach(line => {
        line.classList.toggle('AnimNvBtn');
    });
    
    navItem.classList.toggle('open');
    navItemLink.forEach(link => { 
        link.classList.toggle('fade');
    });
    
}

nvBtn.addEventListener('click', navMobile);

let loopnum= 100;



navItemLink.forEach(links => {
    links.addEventListener('click', navMobile);
   
  
});

cvBTn.addEventListener('click', ()=>{
    alert("sorry this just an example")
})
navItemLink.addEventListener('click', function (e) {
    e.preventDefault();
  
    // Matching strategy
    if (e.target.classList.contains('nav-link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  }); 