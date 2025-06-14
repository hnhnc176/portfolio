(function(){
    emailjs.init({
        publicKey: "Gy9YaPN5nKCIKbAPQ",
    });
})();

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const animatedElements = document.querySelectorAll('.hero, .about, .experience, .projects, .contact, .experience__item, .project-card');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Staggered animations for experience items and project cards
    const experienceItems = document.querySelectorAll('.experience__item');
    experienceItems.forEach((item, index) => {
        item.style.animationDelay = `${0.2 + (index * 0.2)}s`;
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + (index * 0.2)}s`;
    });
}

// Enhanced navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Smooth scroll to target (centered)
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Update active link
                updateActiveLink(this);
            }
        });
    });

    // Update active link based on scroll position
    function updateActiveLink(activeLink = null) {
        if (activeLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        } else {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const viewportCenter = window.pageYOffset + (window.innerHeight / 2);
                
                // Check if viewport center is within this section
                if (viewportCenter >= sectionTop && viewportCenter < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    // Listen for scroll events to update active link
    window.addEventListener('scroll', () => updateActiveLink());
    
    // Set initial active link
    updateActiveLink();
}

window.onload = function() {
    // Initialize navigation
    initNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Validate form
            if (!validateForm()) {
                return;
            }
            
            // Show sending status
            const btn = this.querySelector('.contact-form__btn');
            const originalText = btn.value;
            btn.value = 'Sending...';
            btn.disabled = true;

            // Get form data
            const formData = {
                from_name: document.getElementById('from_name').value.trim(),
                from_email: document.getElementById('from_email').value.trim(),
                message: document.getElementById('message').value.trim(),
                to_email: 'ngochuynh.0176@gmail.com' 
            };
            
            emailjs.send('service_yfx716q', 'template_oq43k58', formData)
                .then(() => {
                    showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                    this.reset();
                    btn.value = originalText;
                    btn.disabled = false;
                }, (error) => {
                    showMessage('Failed to send message. Please try again or contact me directly.', 'error');
                    console.log('FAILED...', error);
                    btn.value = originalText;
                    btn.disabled = false;
                });
        });
    }
}

// Form validation function
function validateForm() {
    const name = document.getElementById('from_name').value.trim();
    const email = document.getElementById('from_email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Clear previous error messages
    clearErrorMessages();
    
    let isValid = true;
    
    // Validate name
    if (name.length < 2) {
        showFieldError('from_name', 'Name must be at least 2 characters long.');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFieldError('from_email', 'Please enter a valid email address.');
        isValid = false;
    }
    
    // Validate message
    if (message.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long.');
        isValid = false;
    }
    
    return isValid;
}

// Show field-specific error messages
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ff4757';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#ff4757';
}

// Clear all error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.field-error');
    errorMessages.forEach(error => error.remove());
    
    const inputs = document.querySelectorAll('.contact-form__input input, .contact-form__input textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

// Show success/error messages
function showMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message';
    messageDiv.textContent = message;
    messageDiv.style.padding = '15px';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.marginTop = '20px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.fontWeight = '500';
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
    } else {
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '1px solid #f5c6cb';
    }
    
    const contactForm = document.getElementById('contact-form');
    contactForm.appendChild(messageDiv);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}