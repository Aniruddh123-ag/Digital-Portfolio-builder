// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Button click handlers
document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('Welcome! Sign up or login to start building your portfolio.');
});

document.querySelector('.btn-signup').addEventListener('click', function() {
    alert('Redirecting to sign up page...');
});

document.querySelector('.btn-login').addEventListener('click', function() {
    alert('Redirecting to login page...');
});

// Template buttons
document.querySelectorAll('.template-card .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const templateName = this.previousElementSibling.previousElementSibling.textContent;
        alert(`You selected the ${templateName} template. Redirecting to editor...`);
    });
});

// Pricing buttons
document.querySelectorAll('.pricing-card .btn-secondary, .pricing-card .btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        alert('Starting your free trial...');
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// CTA button
const ctaButtons = document.querySelectorAll('.cta .btn-primary');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Let\'s get started! Sign up now to build your portfolio.');
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards and template cards
document.querySelectorAll('.feature-card, .template-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed in future)
function handleResponsive() {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 768) {
        // Mobile-specific behavior can be added here
    }
}

window.addEventListener('resize', handleResponsive);
handleResponsive();

// Scroll to top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Add scroll-to-top button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        // Show scroll to top button (can be implemented)
    }
});

// Analytics placeholder
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
    // In a real application, this would send data to an analytics service
}

// Track button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', {
            buttonText: this.textContent,
            timestamp: new Date()
        });
    });
});

// Track form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        trackEvent('form_submit', {
            formType: this.className,
            timestamp: new Date()
        });
    });
});

// Page load event
window.addEventListener('load', () => {
    trackEvent('page_load', {
        timestamp: new Date(),
        url: window.location.href
    });
});

// Lazy loading for images (future implementation)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('PortfolioHub website initialized successfully!');
