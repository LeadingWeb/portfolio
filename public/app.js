const $navbar = document.querySelector('.navbar');
const navbarOffset = $navbar.offsetTop;

const $sections = document.querySelectorAll('section');
const $navbarLinks = document.querySelectorAll('.navbar-link');
const $progress = document.querySelector('.progress-bars-wrapper');
const $sbtBtn = document.getElementById('contact-form-btn');

const progressBarPerc = [85, 85, 89, 87, 60, 60, 50];


window.addEventListener('scroll', (e) => {
    mainFn();
    
    
})

const mainFn = () => {
    if(window.pageYOffset >= navbarOffset) {
        $navbar.classList.add('sticky');
    }else {
        $navbar.classList.remove('sticky');
    }
    
    $sections.forEach((section, index) => {
        if(window.pageYOffset >= section.offsetTop - 10) {
            $navbarLinks.forEach(link => {
                link.classList.remove('change');
            })
            $navbarLinks[index].classList.add('change');
        }
    })
    
    if(window.pageYOffset + window.innerHeight >= $progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, index) => {
            el.style.width = `${progressBarPerc[index]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBarPerc[index];
        })
    }
}
mainFn();


window.addEventListener('resize', (e) => {
    window.location.reload();
})


//Animation

const scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60);
};

let elementsToShow = document.querySelectorAll('.show-on-scroll');


function loopHere() {
    elementsToShow.forEach(el => {
        if(isElementInViewport(el)) {
            el.classList.add('is-visible');
        }else {
            el.classList.remove('is-visible');
        }
    });
    scroll(loopHere);
}

loopHere();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

