// ===================================
// DevLearn Platform Configuration
// ===================================

const DevLearnConfig = {
    // ===================================
    // Site Information
    // ===================================
    site: {
        name: "DevLearn",
        tagline: "Software Development Platform",
        description: "Empowering aspiring developers with structured learning paths, hands-on projects, and real-world skills to succeed in the tech industry.",
        author: "Mohammed Asif",
        year: new Date().getFullYear()
    },

    // ===================================
    // Navigation Configuration
    // ===================================
    navigation: {
        items: [
            {
                href: "modules.html",
                icon: "fas fa-book",
                text: "Modules",
                page: "modules"
            },
            {
                href: "resources.html",
                icon: "fas fa-folder-open",
                text: "Resources",
                page: "resources"
            },
            {
                href: "practice.html",
                icon: "fas fa-code",
                text: "Practice",
                page: "practice"
            }
        ],
        cta: {
            href: "modules.html",
            icon: "fas fa-rocket",
            text: "Start Learning"
        }
    },

    // ===================================
    // Social Media Links
    // ===================================
    social: {
        links: [
            {
                name: "GitHub",
                url: "#",
                icon: "fab fa-github"
            },
            {
                name: "LinkedIn",
                url: "#",
                icon: "fab fa-linkedin"
            },
            {
                name: "Twitter",
                url: "#",
                icon: "fab fa-twitter"
            },
            {
                name: "YouTube",
                url: "#",
                icon: "fab fa-youtube"
            },
            {
                name: "Discord",
                url: "#",
                icon: "fab fa-discord"
            }
        ]
    },

    // ===================================
    // Tech Stack Icons
    // ===================================
    techStack: [
        {
            name: "HTML5",
            icon: "fab fa-html5",
            title: "HTML5"
        },
        {
            name: "CSS3",
            icon: "fab fa-css3-alt",
            title: "CSS3"
        },
        {
            name: "JavaScript",
            icon: "fab fa-js",
            title: "JavaScript"
        },
        {
            name: "React",
            icon: "fab fa-react",
            title: "React"
        },
        {
            name: "Python",
            icon: "fab fa-python",
            title: "Python"
        },
        {
            name: "AWS",
            icon: "fab fa-aws",
            title: "AWS"
        }
    ],

    // ===================================
    // Instructor Information
    // ===================================
    instructor: {
        name: "Mohammed Asif",
        title: "Software Development Trainer",
        bio: "Passionate about teaching and empowering the next generation of developers."
    },

    // ===================================
    // Module Configuration
    // ===================================
    modules: {
        foundation: [
            {
                id: "module-01",
                title: "Environment Setup & Developer Tools",
                icon: "fas fa-tools"
            },
            {
                id: "module-02",
                title: "HTML & CSS Fundamentals",
                icon: "fab fa-html5"
            },
            {
                id: "module-03",
                title: "JavaScript Essentials",
                icon: "fab fa-js"
            },
            {
                id: "module-04",
                title: "React.js Development",
                icon: "fab fa-react"
            },
            {
                id: "module-05",
                title: "Python Programming Fundamentals",
                icon: "fab fa-python"
            },
            {
                id: "module-06",
                title: "Animation using Python (Manim)",
                icon: "fas fa-play-circle"
            }
        ],
        advanced: [
            {
                id: "module-07",
                title: "AI Chatbot Integration",
                icon: "fas fa-robot"
            },
            {
                id: "module-08",
                title: "Video Streaming Integration",
                icon: "fas fa-video"
            },
            {
                id: "module-09",
                title: "Cloud Data Collection",
                icon: "fas fa-database"
            },
            {
                id: "module-10",
                title: "Web Optimization & Metadata",
                icon: "fas fa-tachometer-alt"
            },
            {
                id: "module-11",
                title: "Cloudflare, AWS & Google Cloud",
                icon: "fas fa-cloud"
            },
            {
                id: "module-12",
                title: "Web Hosting & Performance",
                icon: "fas fa-server"
            },
            {
                id: "module-13",
                title: "Web Security & Protection",
                icon: "fas fa-shield-alt"
            }
        ]
    },

    // ===================================
    // Statistics
    // ===================================
    stats: [
        {
            count: "13",
            text: "Modules",
            icon: "fas fa-book"
        },
        {
            count: "Resources",
            text: "Learning",
            icon: "fas fa-code"
        },
        {
            count: "Real World",
            text: "Projects",
            icon: "fas fa-project-diagram"
        },
        {
            count: "Practicing",
            text: "Hours",
            icon: "fas fa-clock"
        }
    ],

    // ===================================
    // API Methods
    // ===================================
    getNavigationItems() {
        return this.navigation.items;
    },

    getSocialLinks() {
        return this.social.links;
    },

    getTechStack() {
        return this.techStack;
    },

    getInstructorInfo() {
        return this.instructor;
    },

    getFoundationModules() {
        return this.modules.foundation;
    },

    getAdvancedModules() {
        return this.modules.advanced;
    },

    getAllModules() {
        return [...this.modules.foundation, ...this.modules.advanced];
    },

    getStats() {
        return this.stats;
    },

    getSiteInfo() {
        return this.site;
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DevLearnConfig;
}
