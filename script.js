// Simple tech slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('techSlider');
    const slides = document.querySelectorAll('.tech-slide');
    const prevBtn = document.getElementById('prevTech');
    const nextBtn = document.getElementById('nextTech');
    
    let currentPosition = 0;
    let slideWidth = slides[0].offsetWidth + 30; // Width + margin
    
    // Set initial position
    updateSliderPosition();
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        const maxPosition = -slideWidth * (slides.length - 3);
        
        if (currentPosition > maxPosition) {
            currentPosition -= slideWidth;
            updateSliderPosition();
        }
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        if (currentPosition < 0) {
            currentPosition += slideWidth;
            updateSliderPosition();
        }
    });
    
    function updateSliderPosition() {
        slider.style.transform = `translateX(${currentPosition}px)`;
    }
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.stat-card, .industry-card').forEach(el => {
        observer.observe(el);
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // Adjust for window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            mainNav.classList.remove('active');
            mainNav.style.display = '';
        } else {
            mainNav.style.display = 'none';
        }
        
        // Recalculate slide width on resize
        slideWidth = slides[0].offsetWidth + 30;
        updateSliderPosition();
    });
    
    // Video play button
    const videoPlayBtn = document.querySelector('.video-play-btn');
    videoPlayBtn.addEventListener('click', function() {
        alert('Video playback would start here. In a real implementation, this would open a video player.');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !mobileMenuBtn.contains(event.target) && window.innerWidth <= 992) {
            mainNav.classList.remove('active');
        }
    });
    
    // Newsletter subscription button
    const subscribeBtn = document.querySelector('.footer-newsletter button');
    const emailInput = document.querySelector('.footer-newsletter input');
    
    subscribeBtn.addEventListener('click', function() {
        if (emailInput.value) {
            alert(`Thank you for subscribing with email: ${emailInput.value}`);
            emailInput.value = '';
        } else {
            alert('Please enter your email address');
        }
    });
    
    // Newsletter button in footer left section
    const newsletterBtn = document.querySelector('.footer-left .btn-primary');
    newsletterBtn.addEventListener('click', function() {
        alert('Newsletter subscription form would open here.');
    });
});