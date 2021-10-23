let nvBtn = document.querySelector('.nvBtns');
let nvBtns = document.querySelectorAll('.nvBtn');
let navItem = document.querySelector('.nav-item');
let navItemLink = document.querySelectorAll('.nav-item a');
let navItemLinks = document.querySelector('.nav-item a');
let nav = document.querySelector('.navBg');
let cvBTn = document.querySelector('.customBTN1');



const portLink = document.querySelectorAll('.portHeaderLinks a')
const portLinkParent = document.querySelector('.portHeaderLinks')
portLinkParent.addEventListener('click', function (e) {
    const clickedLink = e.target.closest('a');

    e.preventDefault();
    if (!clickedLink) return;

    portLink.forEach(e => e.classList.remove('activedLink'));
    clickedLink.classList.add('activedLink')
});

  
// ---------------------btn---------------------------
const portBtn = document.querySelectorAll('.portBtn button')
const portBtnParent = document.querySelector('.portBtn')
portBtnParent.addEventListener('click', function (e) {
    const clickedBtn = e.target.closest('button');
    e.preventDefault();
    if (!clickedBtn) return;

    portBtn.forEach(e => e.classList.remove('btnActive'));
    clickedBtn.classList.add('btnActive');

    let timer = 3000;
    let timeoutActiveClass = setTimeout( function (){
        clickedBtn.classList.remove('btnActive');
    }  , timer);
    
    timeoutActiveClass();
});



function navMobile() {
    nvBtn.classList.toggle('afterClick');
    nvBtn.classList.toggle('open');
    navItem.classList.toggle('open');
    navItemLink.forEach(link => {
        link.classList.toggle('fade');

    });

}

nvBtn.addEventListener('click', navMobile);





navItemLink.forEach(links => {
    links.addEventListener('click', navMobile);
    

});

cvBTn.addEventListener('click', () => {
    alert("sorry this just an example")
})
navItemLinks.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav-link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
});


//                         animation 


const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0,
});

allElement = document.querySelectorAll('h1', 'p');

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');


});


const script1 = document.querySelector('#scriptOne span');
const script2 = document.querySelector('#scriptTwo span');
const scriptText1 = document.querySelector('.scriptText1')
const scriptText2 = document.querySelector('.scriptText2')
const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");

scriptText1.insertAdjacentText('afterbegin', '<script>');
scriptText2.insertAdjacentText('afterbegin', '</script>');

script1.addEventListener('click', function () {
    audio.play();
    audio2.pause();
});
script2.addEventListener('click', function () {
    audio2.play();
    audio.pause();
});

let cliImgsParent =   document.querySelector('.cliimgs')
let cliImgs =   document.querySelectorAll('.cliimgs img')
const cliText = document.querySelector('.s5contentTextSide p')
const cliImg1 = document.querySelector('#img1');
const cliImg2 = document.querySelector('#img2');
const cliImg3 = document.querySelector('#img3');
const cliImg4 = document.querySelector('#img4');
const cliImg5 = document.querySelector('#img5');
const cliImg6 = document.querySelector('#img6');
let changeText = function () {
   
    cliText.textContent = this;
};

  // cli imgs active
cliImgsParent.addEventListener('mouseover', function (e) {
      const hover = e.target.closest('img');
      
        if (!hover) return;
      cliImgs.forEach(e => e.style.border = 'none' );
      hover.style.border = '.6vw red solid';
      

  });
  
let cliComment1 = `SARA: 've been an online marketer since 2004 and I've worked with a lot of programmers over the years. If you're looking for someone who has world-class expertise, a technical team to match anyone in the business, and a creative team to be able to take a white-glove approach and take your online project—whether it's a website or a fully-automated online campaign—if you’re looking for someone who’s going to show up on time, under-promise and over-deliver, it is Followbright.`
let cliComment2 = `ALI: Blown Away By Your Thoroughness I’ve had some questionable experiences with other web agencies in the past, but Followbright has hands down been the best web company we’ve worked with, providing us with peace of mind and incredible service. The blueprint Followbright developed for our company’s new website and SEO plan was incredibly descriptive, comprehensive, organized, and easy to understand. I was actually blown away by their thoroughness, which eased a lot of the stress involved with creating our new Ecommerce site. Thank you`
let cliComment3 = `'ASO: You're Invaluable to Us We've been blown away by the incredible value you deliver, and how your work has translated into increased page view times, lead generations, and dramatic decreases in bounce rate and required support.This is exactly why we rely on—and will continue to rely on—your team for your extensive ExpressionEngine expertise, your exceptional reliability, and your crystal clear communications and organization. Your team consistently goes above and beyond our expectations, and everything we've worked on with you has been a complete success.  You're absolutely invaluable to our national organization, and we look forward to continuing to work with you as strategic partners in the years to come. Brandt`
let cliComment4 = `AHMED: 'The Followbright team is absolutely fantastic to work with and I would highly recommend them no matter what type of project you have. To find a team of individuals that are responsive, fun to work with, creative, pragmatic, mindful of a client's budget and schedule, and extremely knowledgeable in PHP, SQL, Linux and Apache based web development, strategy, design, marketing and functionality is extremely rare. If you've found the Followbright team, you can be done searching because you've found the holy grail of consultants. You won't find a better group with which to work.`
let cliComment5 = `SHERZAD: Our engineering firm was under contract with the U.S. Department of Energy for a large environmental impact statement process—the Northern Pass Transmission Project. There were almost 10,000 individuals working on this project. Followbright helped us build our website from scratch that would allow us to comply with requirements. The new site has improved functionality and is user-friendly and easy for us to maintain. The public commenting portal they built has been efficient for the client and saved a great deal of time. Followbright has also helped us completely automate other time-consuming processes. There were no hiccups prior to launch. In my company's line of work, a constant frustration point is that our competitors provide disingenuous proposals to clients. Many consultants will intentionally ignore requirements missed by the client, in order to modify their contract subsequently. We don't do this, and neither does Followbright. If we require a website to have a list of features, 100 percent of them will be realized. They take the time to figure out what the job is, what it will take, and deliver the whole program. We also appreciate Followbright's business approach. It's very matter of fact and down to Earth and we find them to be refreshing from a business standpoint. We appreciate their efficiency, and any company could benefit from it. They have even proven to be an inspiration for our own operations.`
let cliComment6 = `DARO: You nailed it: you delivered on time and on budget and did so with grace and flexibility. You shined when it came to ease of the process and how you adapted when things don't go as planned. Your communication, understanding, and excitement make you stand out above other web firms. Your entire team was exceptional. Planning was intelligent and dynamic. Communication was clear and engaged. The overall strategy employed and work produced resulted in 95% approval by all of the decision makers involved on our team. This was a function of well-executed visioning and implementation. For a project like this, three "metrics" stand out: time, cost, and fun. Expectations about each of these were met or exceeded by the Followbright team. And that's the sign of a successful project. We have recommended you to others and will continue to do so!`
cliImg1.addEventListener('mouseenter', changeText.bind(cliComment1));
cliImg2.addEventListener('mouseenter', changeText.bind(cliComment2));
cliImg3.addEventListener('mouseenter', changeText.bind(cliComment3));
cliImg4.addEventListener('mouseenter', changeText.bind(cliComment4));
cliImg5.addEventListener('mouseenter', changeText.bind(cliComment5));
cliImg6.addEventListener('mouseenter', changeText.bind(cliComment6));



var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',

      },
});