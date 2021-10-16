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

// ---------------------btn---------------------------
const portBtn = document.querySelectorAll('.portBtn button')
const portBtnParent = document.querySelector('.portBtn')
portBtnParent.addEventListener('click',function(e) {
const clickedBtn = e.target.closest('button');
e.preventDefault();
if (!clickedBtn) return;

portBtn.forEach(e => e.classList.remove('btnActive'));
clickedBtn.classList.add('btnActive');

let timer = 3000;
let timeoutActiveClass = setTimeout( function (){
    clickedBtn.classList.remove('btnActive');
}  , timer);





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
    e.preventDefault();
    if (e.target.classList.contains('nav-link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  }); 

  // const hoverCards = document.querySelectorAll('.hoverCard');
  // const hoverCardText = document.querySelector('.hovCtext');
  // const card = document.querySelectorAll('.card');
  
  // card.forEach((e)=>{
  //           e.addEventListener('mouseenter', function(){
  //       //   console.log(hoverCards);
       
  //         if (event.type == 'mouseenter') {
  //           this.setAttribute('data-hoverd', true)
           
  //         } 
          

  //       });

  //       e.addEventListener('mouseleave', function(e){
  //           //   console.log(hoverCards);
    
  //             if(event.type == 'mouseleave'){
  //                   this.setAttribute('data-hoverd', false)
                    
  //                         }
                
                
  //                       });
  //                 });
                
         