// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple Reveal Animation on Scroll
const revealElements = document.querySelectorAll('.badge-item, .stamp, .product-info-box, .contact-card');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial setup for reveal elements
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
});

// Modal Functions
const modal = document.getElementById('orderModal');
const productNameEl = document.getElementById('modalProductName');
const whatsappForm = document.getElementById('whatsappForm');

function openOrderModal(productName) {
    modal.style.display = 'block';
    productNameEl.innerText = `Product: ${productName}`;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeOrderModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        closeOrderModal();
    }
}

whatsappForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const qty = document.getElementById('quantity').value;
    const msg = document.getElementById('userMessage').value;
    const product = productNameEl.innerText.replace('Product: ', '');
    
    const whatsappNumber = "919840371282";
    const text = `Hello Princess Shahala Furniture,\n\nI would like to order:\n*Product:* ${product}\n*Name:* ${name}\n*Quantity:* ${qty}\n*Requirements:* ${msg || 'None'}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    closeOrderModal();
});

window.addEventListener('scroll', () => {
    revealOnScroll();
    
    // Header background change
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Active Link Logic
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

window.addEventListener('load', revealOnScroll);
