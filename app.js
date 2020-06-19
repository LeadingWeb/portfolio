const $navbar = document.querySelector('.navbar');
const navbarOffset = $navbar.offsetTop;

const $sections = document.querySelectorAll('section');
const $navbarLinks = document.querySelectorAll('.navbar-link');
const $progress = document.querySelector('.progress-bars-wrapper');

const progressBarPerc = [97, 89, 85, 87, 87, 87, 87];

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