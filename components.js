// ===================================
// Dynamic Components System
// ===================================

class ComponentSystem {
    constructor() {
        this.components = {
            header: null,
            footer: null
        };
        this.config = window.DevLearnConfig || {};
        this.init();
    }

    init() {
        this.loadComponents();
        this.setupEventListeners();
    }

    // ===================================
    // Header Component
    // ===================================
    
    getHeaderHTML() {
        return `
        <!-- Navigation -->
        <nav class="navbar" id="navbar">
            <div class="container nav-container">
                <a href="index.html" class="logo">
                    <div class="logo-icon">
                        <span class="logo-bracket">&lt;</span>
                        <span class="logo-slash">/</span>
                        <span class="logo-bracket">&gt;</span>
                    </div>
                    <div class="logo-content">
                        <span class="logo-text">DevLearn</span>
                        <span class="logo-tagline">Software Development Platform</span>
                    </div>
                </a>
                <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="nav-right">
                    <ul class="nav-links" id="navLinks">
                        <li><a href="modules.html" class="nav-link ${this.getCurrentPage() === 'modules' ? 'active' : ''}">
                            <i class="fas fa-book"></i>
                            <span>Modules</span>
                        </a></li>
                        <li><a href="resources.html" class="nav-link ${this.getCurrentPage() === 'resources' ? 'active' : ''}">
                            <i class="fas fa-folder-open"></i>
                            <span>Resources</span>
                        </a></li>
                    </ul>
                    <a href="practice.html" class="btn-nav-cta">
                        <i class="fas fa-rocket"></i>
                        Practice Lab
                    </a>
                </div>
            </div>
        </nav>`;
    }

    // ===================================
    // Footer Component
    // ===================================
    
    getFooterHTML() {
        return `
        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <!-- Footer Main Content -->
                <div class="footer-content">
                    <div class="footer-section footer-brand">
                        <a href="index.html" class="footer-logo">
                            <div class="logo-icon">
                                <span class="logo-bracket">&lt;</span>
                                <span class="logo-slash">/</span>
                                <span class="logo-bracket">&gt;</span>
                            </div>
                            <div class="logo-content">
                                <span class="logo-text">DevLearn</span>
                                <span class="logo-tagline">Software Development Platform</span>
                            </div>
                        </a>
                        <p class="footer-description">
                            Empowering aspiring developers with structured learning paths, hands-on projects, 
                            and real-world skills to succeed in the tech industry.
                        </p>
                        
                        <!-- Tech Stack Showcase -->
                        <div class="footer-tech-stack">
                            <span class="footer-stack-label">Learn:</span>
                            <div class="footer-tech-icons">
                                <span class="footer-tech-icon" title="HTML5"><i class="fab fa-html5"></i></span>
                                <span class="footer-tech-icon" title="CSS3"><i class="fab fa-css3-alt"></i></span>
                                <span class="footer-tech-icon" title="JavaScript"><i class="fab fa-js"></i></span>
                                <span class="footer-tech-icon" title="React"><i class="fab fa-react"></i></span>
                                <span class="footer-tech-icon" title="Python"><i class="fab fa-python"></i></span>
                                <span class="footer-tech-icon" title="AWS"><i class="fab fa-aws"></i></span>
                            </div>
                        </div>

                        <!-- Social Links -->
                        <div class="footer-social">
                            <span class="footer-social-label">Connect:</span>
                            <div class="social-links">
                                <a href="#" class="social-link" aria-label="GitHub">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="#" class="social-link" aria-label="LinkedIn">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="#" class="social-link" aria-label="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-link" aria-label="YouTube">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a href="#" class="social-link" aria-label="Discord">
                                    <i class="fab fa-discord"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="footer-section">
                        <h4><i class="fas fa-book"></i> Foundation Modules</h4>
                        <ul class="footer-links">
                            <li><a href="modules.html#module-01"><i class="fas fa-chevron-right"></i> Module 01: Environment Setup & Developer Tools</a></li>
                            <li><a href="modules.html#module-02"><i class="fas fa-chevron-right"></i> Module 02: HTML & CSS Fundamentals</a></li>
                            <li><a href="modules.html#module-03"><i class="fas fa-chevron-right"></i> Module 03: JavaScript Essentials</a></li>
                            <li><a href="modules.html#module-04"><i class="fas fa-chevron-right"></i> Module 04: React.js Development</a></li>
                            <li><a href="modules.html#module-05"><i class="fas fa-chevron-right"></i> Module 05: Python Programming Fundamentals</a></li>
                            <li><a href="modules.html#module-06"><i class="fas fa-chevron-right"></i> Module 06: Animation using Python (Manim)</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4><i class="fas fa-rocket"></i> Advanced Modules</h4>
                        <ul class="footer-links">
                            <li><a href="modules.html#module-07"><i class="fas fa-chevron-right"></i> Module 07: AI Chatbot Integration</a></li>
                            <li><a href="modules.html#module-08"><i class="fas fa-chevron-right"></i> Module 08: Video Streaming Integration</a></li>
                            <li><a href="modules.html#module-09"><i class="fas fa-chevron-right"></i> Module 09: Cloud Data Collection</a></li>
                            <li><a href="modules.html#module-10"><i class="fas fa-chevron-right"></i> Module 10: Web Optimization & Metadata</a></li>
                            <li><a href="modules.html#module-11"><i class="fas fa-chevron-right"></i> Module 11: Cloudflare, AWS & Google Cloud</a></li>
                            <li><a href="modules.html#module-12"><i class="fas fa-chevron-right"></i> Module 12: Web Hosting & Performance</a></li>
                            <li><a href="modules.html#module-13"><i class="fas fa-chevron-right"></i> Module 13: Web Security & Protection</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4><i class="fas fa-user-tie"></i> Instructor</h4>
                        <div class="instructor-card">
                            <div class="instructor-avatar">
                                <i class="fas fa-user-graduate"></i>
                            </div>
                            <div class="instructor-info">
                                <p class="instructor-name">Mohammed Asif</p>
                                <p class="instructor-title">Software Development Trainer</p>
                                <p class="instructor-bio">Passionate about teaching and empowering the next generation of developers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer Bottom -->
                <div class="footer-bottom">
                    <div class="footer-bottom-left">
                        <p>&copy; <span id="currentYear">2025</span> DevLearn Platform. All rights reserved.</p>
                        <span class="footer-divider">•</span>
                        <p>Built for developers</p>
                    </div>
                </div>
            </div>
        </footer>`;
    }

    // ===================================
    // Utility Methods
    // ===================================
    
    getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop().split('.')[0];
        return filename || 'index';
    }

    loadComponents() {
        // Load header
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = this.getHeaderHTML();
        }

        // Load footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = this.getFooterHTML();
        }
    }

    setupEventListeners() {
        // Mobile menu toggle
        document.addEventListener('click', (e) => {
            if (e.target.closest('#mobileMenuToggle')) {
                const navRight = document.querySelector('.nav-right');
                const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                
                if (navRight && mobileMenuToggle) {
                    navRight.classList.toggle('active');
                    mobileMenuToggle.classList.toggle('active');
                }
            }

            // Close mobile menu when clicking outside
            if (e.target.closest('.nav-right') || e.target.closest('#mobileMenuToggle')) {
                return;
            }
            
            const navRight = document.querySelector('.nav-right');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            if (navRight && mobileMenuToggle) {
                navRight.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });

        // Dynamic year update
        const currentYearElement = document.getElementById('currentYear');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navRight = document.querySelector('.nav-right');
                const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                if (navRight && navRight.classList.contains('active')) {
                    navRight.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    }

    // ===================================
    // Public API Methods
    // ===================================
    
    updateHeader(newHeaderHTML) {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = newHeaderHTML;
            this.setupEventListeners();
        }
    }

    updateFooter(newFooterHTML) {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = newFooterHTML;
            this.setupEventListeners();
        }
    }

    addNavigationItem(item) {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${item.href}" class="nav-link ${this.getCurrentPage() === item.page ? 'active' : ''}">
                    <i class="${item.icon}"></i>
                    <span>${item.text}</span>
                </a>
            `;
            navLinks.appendChild(li);
        }
    }

    updateSocialLinks(links) {
        const socialLinks = document.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.innerHTML = links.map(link => `
                <a href="${link.url}" class="social-link" aria-label="${link.name}">
                    <i class="${link.icon}"></i>
                </a>
            `).join('');
        }
    }

    updateInstructorInfo(info) {
        const instructorName = document.querySelector('.instructor-name');
        const instructorTitle = document.querySelector('.instructor-title');
        const instructorBio = document.querySelector('.instructor-bio');
        
        if (instructorName) instructorName.textContent = info.name;
        if (instructorTitle) instructorTitle.textContent = info.title;
        if (instructorBio) instructorBio.textContent = info.bio;
    }
}

// ===================================
// Initialize Component System
// ===================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.componentSystem = new ComponentSystem();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentSystem;
}
