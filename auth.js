// ===================================
// DevLearn Authentication System
// ===================================

const DevLearnAuth = {
    // Configuration
    config: {
        tokenKey: 'devlearn_auth_token',
        emailKey: 'devlearn_user_email',
        loginTimeKey: 'devlearn_login_time',
        sessionTimeoutHours: 24
    },

    // Check if user is authenticated
    isAuthenticated() {
        const token = localStorage.getItem(this.config.tokenKey);
        return !!token;
    },

    // Get current user email
    getUserEmail() {
        return localStorage.getItem(this.config.emailKey);
    },

    // Get login time
    getLoginTime() {
        return localStorage.getItem(this.config.loginTimeKey);
    },

    // Check if session is expired
    isSessionExpired() {
        const loginTime = this.getLoginTime();
        if (!loginTime) return true;

        const loginDate = new Date(loginTime);
        const currentDate = new Date();
        const hoursSinceLogin = (currentDate - loginDate) / (1000 * 60 * 60);

        return hoursSinceLogin > this.config.sessionTimeoutHours;
    },

    // Login user
    login(email, token) {
        localStorage.setItem(this.config.tokenKey, token);
        localStorage.setItem(this.config.emailKey, email);
        localStorage.setItem(this.config.loginTimeKey, new Date().toISOString());
    },

    // Logout user
    logout() {
        localStorage.removeItem(this.config.tokenKey);
        localStorage.removeItem(this.config.emailKey);
        localStorage.removeItem(this.config.loginTimeKey);
    },

    // Protect page - redirect if not authenticated
    protectPage(redirectUrl = 'login.html') {
        if (!this.isAuthenticated()) {
            window.location.href = redirectUrl;
            return false;
        }

        if (this.isSessionExpired()) {
            alert('Your session has expired. Please login again.');
            this.logout();
            window.location.href = redirectUrl;
            return false;
        }

        return true;
    },

    // Redirect if already logged in (for login page)
    redirectIfAuthenticated(redirectUrl = 'webapp.html') {
        if (this.isAuthenticated() && !this.isSessionExpired()) {
            window.location.href = redirectUrl;
            return true;
        }
        return false;
    },

    // Display user info
    displayUserInfo(elementId = 'userEmail') {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = this.getUserEmail() || 'User';
        }
    },

    // Setup logout button
    setupLogoutButton(buttonId = 'logoutBtn', redirectUrl = 'login.html', confirmMessage = 'Are you sure you want to logout?') {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                if (confirm(confirmMessage)) {
                    this.logout();
                    alert('You have been logged out successfully!');
                    window.location.href = redirectUrl;
                }
            });
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DevLearnAuth;
}

