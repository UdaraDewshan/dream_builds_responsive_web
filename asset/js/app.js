const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('main-header');
const navItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


window.addEventListener('scroll', () => {


    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (current && a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});


const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalBookBtn = document.getElementById('modal-book-btn');

const viewBtns = document.querySelectorAll('.card-link');

viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const card = btn.closest('.card');
        const imgSrc = card.querySelector('.card-img').src;
        const title = card.querySelector('h3').innerText;
        const desc = card.querySelector('p').innerText;

        modalImg.src = imgSrc;
        modalTitle.innerText = title;
        modalDesc.innerText = desc;

        modal.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

modalBookBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});