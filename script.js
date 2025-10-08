// ===================================
// Particle Canvas Animation
// ===================================

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null, radius: 150 };

// Set canvas size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

setCanvasSize();
window.addEventListener('resize', () => {
    setCanvasSize();
    initParticles();
});

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap particles around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                const angle = Math.atan2(dy, dx);
                this.x -= Math.cos(angle) * force * 3;
                this.y -= Math.sin(angle) * force * 3;
            }
        }
    }

    draw() {
        ctx.fillStyle = `rgba(88, 166, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize particles
function initParticles() {
    particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// Connect nearby particles
function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                const opacity = (1 - distance / 100) * 0.3;
                ctx.strokeStyle = `rgba(88, 166, 255, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

// Animation loop
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    connectParticles();
    requestAnimationFrame(animateParticles);
}

// Track mouse movement
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

// Start particle animation
initParticles();
animateParticles();

// ===================================
// Floating Dev Icons
// ===================================

const floatingIconsContainer = document.getElementById('floatingIcons');
const devIcons = [
    'fa-code', 'fa-terminal', 'fa-laptop-code', 'fa-brackets-curly',
    'fa-file-code', 'fa-bug', 'fa-database', 'fa-server',
    'fa-cloud', 'fa-rocket', 'fa-bolt', 'fa-star',
    'fa-coffee', 'fa-lightbulb', 'fa-brain', 'fa-microchip'
];

function createFloatingIcon() {
    const icon = document.createElement('i');
    icon.className = `fas ${devIcons[Math.floor(Math.random() * devIcons.length)]} floating-icon`;
    
    // Random position
    icon.style.left = Math.random() * 100 + '%';
    icon.style.top = Math.random() * 100 + '%';
    
    // Random animation delay and duration
    icon.style.animationDelay = Math.random() * 5 + 's';
    icon.style.animationDuration = (Math.random() * 10 + 15) + 's';
    
    // Random size
    const size = Math.random() * 1.5 + 1.5;
    icon.style.fontSize = size + 'rem';
    
    // Random opacity
    icon.style.opacity = Math.random() * 0.15 + 0.05;
    
    // Random color variation
    const colors = ['#58a6ff', '#bc8cff', '#3fb950', '#f778ba', '#ff9f4a'];
    icon.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    floatingIconsContainer.appendChild(icon);
}

// Create floating icons
for (let i = 0; i < 20; i++) {
    createFloatingIcon();
}

// ===================================
// Mobile Menu Toggle
// ===================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navRight = document.querySelector('.nav-right');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle && navRight) {
    mobileMenuToggle.addEventListener('click', () => {
        navRight.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const links = navLinks.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navRight.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navRight.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navRight.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ===================================
// Navbar Scroll Effect
// ===================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Active Navigation Link on Scroll
// ===================================

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// Scroll Reveal Animations
// ===================================

const observeElements = document.querySelectorAll(
    '.module-card, .tech-detail-card, .glow-card'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
                entry.target.style.opacity = '1';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

observeElements.forEach(element => {
    element.style.opacity = '0';
    revealObserver.observe(element);
});

// ===================================
// Terminal Cursor Blink
// ===================================

const terminalCursor = document.querySelector('.terminal-cursor');
if (terminalCursor) {
    setInterval(() => {
        terminalCursor.style.opacity = 
            terminalCursor.style.opacity === '0' ? '1' : '0';
    }, 530);
}

// ===================================
// Typing Effect for Terminal (Optional)
// ===================================

function terminalTypingEffect() {
    const codeOutput = document.querySelector('.code-output code');
    if (!codeOutput) return;
    
    const originalText = codeOutput.innerHTML;
    codeOutput.innerHTML = '';
    
    let index = 0;
    const speed = 15;
    
    function type() {
        if (index < originalText.length) {
            // Skip HTML tags to type them instantly
            if (originalText.charAt(index) === '<') {
                const closeTag = originalText.indexOf('>', index);
                codeOutput.innerHTML += originalText.substring(index, closeTag + 1);
                index = closeTag + 1;
            } else {
                codeOutput.innerHTML += originalText.charAt(index);
                index++;
            }
            setTimeout(type, speed);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Uncomment to enable typing effect
// terminalTypingEffect();

// ===================================
// Parallax Effect for Hero Section
// ===================================

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');
const heroVisual = document.querySelector('.hero-visual');

if (hero && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${rate * 0.4}px)`;
        }
        
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${rate * 0.6}px)`;
        }
    });
}

// ===================================
// Glow Orb Mouse Follow Effect
// ===================================

const glowOrbs = document.querySelectorAll('.glow-orb');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    glowOrbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.05;
        const x = (mouseX - 0.5) * 100 * speed;
        const y = (mouseY - 0.5) * 100 * speed;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===================================
// Tech Badge Interaction
// ===================================

const techBadges = document.querySelectorAll('.tech-badge, .tech-item');

techBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Module Card Interactions
// ===================================

const moduleCards = document.querySelectorAll('.module-card');

moduleCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===================================
// Chat Demo Animation
// ===================================

const chatDemo = document.getElementById('chatDemo');

if (chatDemo) {
    const botResponses = [
        "I can help you learn software development! 🚀",
        "I assist with HTML, CSS, JavaScript, React, Python, and more!",
        "Let's build amazing projects together! 💻"
    ];
    
    let responseIndex = 0;
    
    function showBotResponse() {
        const botMessage = chatDemo.querySelector('.bot-message .message-content');
        const typingIndicator = botMessage.querySelector('.typing-indicator');
        
        // Show typing for 2 seconds
        setTimeout(() => {
            // Hide typing indicator and show response
            botMessage.classList.remove('typing');
            botMessage.innerHTML = botResponses[responseIndex];
            
            // Switch to next response
            responseIndex = (responseIndex + 1) % botResponses.length;
            
            // After 3 seconds, reset to typing
            setTimeout(() => {
                botMessage.classList.add('typing');
                botMessage.innerHTML = '<span class="typing-indicator"><span></span><span></span><span></span></span>';
                
                // Wait 1 second before showing next response
                setTimeout(showBotResponse, 1000);
            }, 3000);
        }, 2000);
    }
    
    // Start the animation after page load
    setTimeout(showBotResponse, 1500);
}

// ===================================
// Dynamic Year in Footer
// ===================================

const footerYearElement = document.getElementById('currentYear');
if (footerYearElement) {
    const currentYear = new Date().getFullYear();
    footerYearElement.textContent = currentYear;
}

// ===================================
// Console Easter Egg
// ===================================

console.log(
    '%c🚀 Welcome to DevLearn Platform!',
    'color: #58a6ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(88, 166, 255, 0.5);'
);

console.log(
    '%c━'.repeat(50),
    'color: #30363d;'
);

console.log(
    '%cInterested in how this works? 🤔',
    'color: #e6edf3; font-size: 14px; font-weight: bold;'
);

console.log(
    '%cCheck out the source code and start learning!',
    'color: #7d8590; font-size: 14px;'
);

console.log(
    '%c💡 Pro tip: This entire site is built with HTML, CSS, and JavaScript!',
    'color: #3fb950; font-size: 13px; font-style: italic;'
);

console.log(
    '%c━'.repeat(50),
    'color: #30363d;'
);

console.log(
    '%cHappy Learning! 🎯',
    'color: #bc8cff; font-size: 16px; font-weight: bold;'
);

// ===================================
// Performance Monitoring
// ===================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(
                `%c⚡ Page loaded in ${pageLoadTime}ms`,
                'color: #ff9f4a; font-size: 12px; font-weight: bold;'
            );
        }, 0);
    });
}

// ===================================
// Keyboard Navigation Enhancement
// ===================================

document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navRight && navRight.classList.contains('active')) {
        navRight.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ===================================
// Button Click Ripple Effect
// ===================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        const existingRipple = this.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles dynamically
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// ===================================
// Accessibility: Skip to Content
// ===================================

const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to content';

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.prepend(skipLink);

// ===================================
// Loading Animation Complete
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger any delayed animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            el.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
        });
    }, 100);
});

// ===================================
// Prevent Page Flash
// ===================================

document.documentElement.style.opacity = '0';
window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.transition = 'opacity 0.3s ease';
    document.documentElement.style.opacity = '1';
});
