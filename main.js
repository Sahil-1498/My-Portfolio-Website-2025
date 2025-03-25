
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('show');
            }
        });
    });

    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Feedback Form Submission
    const feedbackForm = document.getElementById('feedback-form');
    const formMessage = document.getElementById('form-message');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.className = 'error';
                return;
            }
            
            // Here you would typically send the data to a server
            // For this example, we'll just show a success message
            formMessage.textContent = 'Thank you for your feedback! I will get back to you soon.';
            formMessage.className = 'success';
            
            // Reset form
            feedbackForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Hire Me Button Click
    const hireMeBtn = document.querySelector('.hire-me-btn');
    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', function() {
            window.location.href = '#feedback';
        });
    }

    // Download CV Button Click
    const downloadCvBtn = document.querySelector('.download-cv');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function() {
            // In a real implementation, this would link to your CV file
            alert('This would download your CV in a real implementation.');
        });
    }

    // Certificate Links - Open in New Tab (already handled by target="_blank" in HTML)
    // This is just an example of how you might add additional functionality
    document.querySelectorAll('.view-certificate').forEach(link => {
        link.addEventListener('click', function(e) {
            // You could add analytics tracking here
            console.log('Certificate viewed: ' + this.getAttribute('href'));
        });
    });

    // Project Card Hover Effects (handled by CSS, but could be enhanced with JS)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Additional JS effects could go here
        });
    });
});



const narratives = [
    "I'm a <strong>data analyst</strong> who turns numbers into business solutions.",
    "I build <strong>automated Excel tools</strong> that save hours of manual work.",
    "I create <strong>interactive dashboards</strong> that tell compelling data stories.",
    "I'm also exploring <strong>web development</strong> to bridge data and the web.",
    "I develop <strong>small web apps</strong> to solve real-world problems.",
    "My goal? To combine <strong>analytics + development</strong> for smarter solutions."
];

let currentNarrative = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 50;
let pauseBetween = 2000;

function typeNarrative() {
    const textElement = document.getElementById('dynamic-text');
    const currentText = narratives[currentNarrative];
    
    if (isDeleting) {
        textElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 30;
    } else {
        textElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = charIndex % 3 === 0 ? 150 : 50; // Variable speed for realism
    }
    
    // When complete
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = pauseBetween;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentNarrative = (currentNarrative + 1) % narratives.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeNarrative, typingSpeed);
}

window.onload = function() {
    setTimeout(typeNarrative, 1000);
};
