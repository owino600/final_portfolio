// Portfolio JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navigation
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.background = 'hsla(222, 15%, 8%, 0.95)';
        } else {
            nav.style.background = 'hsla(222, 15%, 8%, 0.8)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Intersection Observer for animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections for scroll animations
    const animatedElements = document.querySelectorAll('.card, .section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Button click handlers
    const emailButtons = document.querySelectorAll('[data-action="email"]');
    const githubButtons = document.querySelectorAll('[data-action="github"]');
    const linkedinButtons = document.querySelectorAll('[data-action="linkedin"]');
    const projectLinks = document.querySelectorAll('[data-action="project"]');

    emailButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'mailto:your.email@example.com?subject=Portfolio Contact';
        });
    });

    githubButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://github.com/yourusername', '_blank');
        });
    });

    linkedinButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://linkedin.com/in/yourusername', '_blank');
        });
    });

    projectLinks.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your project URLs here
            console.log('Project link clicked');
        });
    });

    // Mobile menu toggle (if you want to add a mobile menu later)
    function createMobileMenu() {
        const navContainer = document.querySelector('.nav-container');
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-toggle';
        mobileToggle.innerHTML = '☰';
        mobileToggle.style.display = 'none';
        mobileToggle.style.background = 'none';
        mobileToggle.style.border = 'none';
        mobileToggle.style.color = 'var(--foreground)';
        mobileToggle.style.fontSize = '1.5rem';
        mobileToggle.style.cursor = 'pointer';
        
        navContainer.appendChild(mobileToggle);
        
        // Show mobile toggle on small screens
        function checkScreenSize() {
            if (window.innerWidth < 768) {
                mobileToggle.style.display = 'block';
            } else {
                mobileToggle.style.display = 'none';
            }
        }
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        // Mobile menu functionality
        mobileToggle.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'var(--background)';
                navLinks.style.padding = '1rem';
                navLinks.style.borderTop = '1px solid var(--border)';
            }
        });
    }

    // Initialize mobile menu
    createMobileMenu();

    // Typing effect for hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-bg');
        if (heroBackground) {
            const speed = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${speed}px)`;
        }
    });

    // Console welcome message
    console.log('%c🚀 Portfolio Website Loaded Successfully!', 'color: #00bcd4; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #00e676; font-size: 12px;');
});