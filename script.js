const navLinks = document.querySelector('.nav-links');
const hamBtn = document.querySelector('.hamburger-btn');
const timesBtn = document.querySelector('.times-btn');

hamBtn.addEventListener('click', () => {
    hamBtn.style.display = 'none';
    timesBtn.style.display = 'block';

    navLinks.classList.add('nav-show');
})

timesBtn.addEventListener('click', () => {
    hamBtn.style.display = 'block';
    timesBtn.style.display = 'none';

    navLinks.classList.remove('nav-show');
})