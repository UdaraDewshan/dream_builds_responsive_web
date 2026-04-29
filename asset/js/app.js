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