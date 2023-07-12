const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollpage)

function navToggle() {
    btn.classList.toggle ('open');
    menu.classList.toggle ('hidden');
    document.body.classList.toggle ('no-scroll');
    overlay.classList.toggle ('overlay');
}

function scrollpage() {
    const scrollPos = window.scrollY;
    if (scrollPos > 150 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 150 && scrollStarted) {
        reset();
        scrollStarted = false
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target'); 
            const c = +counter.innerText;
            const increment = target / 100;
            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 75);
            } else {
                counter.innerText = target;
            }
        }
        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => counter.innerHTML = '0');
}