// Slider functionality
let currentSlide = 0;
const slides = [
    'https://placehold.co/1200x400',
    'https://placehold.co/1200x400/2',
    'https://placehold.co/1200x400/3'
];

function updateSlide() {
    const sliderImg = document.querySelector('.slider img');
    if (sliderImg) {
        sliderImg.src = slides[currentSlide];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Slider controls
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlide();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlide();
        });
    }

    // Auto slide
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }, 5000);

    // Transaction Modal
    const modal = document.getElementById('transactionModal');
    const closeBtn = document.querySelector('.close');
    const reachUsBtn = document.querySelector('.reach-us-btn');
    const contactBtn = document.querySelector('.contact-btn');

    function openTransactionModal() {
        if (modal) {
            modal.style.display = 'block';
        }
    }

    function closeTransactionModal() {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    if (closeBtn) {
        closeBtn.onclick = closeTransactionModal;
    }

    if (reachUsBtn) {
        reachUsBtn.addEventListener('click', openTransactionModal);
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', openTransactionModal);
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            closeTransactionModal();
        }
    }

    // Transaction Form
    const transactionForm = document.getElementById('transactionForm');
    if (transactionForm) {
        transactionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                amount: document.getElementById('amount').value,
                purpose: document.getElementById('purpose').value
            };

            console.log('Transaction submitted:', formData);
            alert('Transaction submitted successfully!');
            closeTransactionModal();
            this.reset();
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});