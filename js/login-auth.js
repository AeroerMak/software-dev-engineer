// ===================================
// Login Authentication System
// ===================================

// Hardcoded credentials
const VALID_CREDENTIALS = {
    username: 'Maset',
    password: 'coding-web'
};

// Check if already logged in
function checkExistingSession() {
    if (localStorage.getItem('devlearn_auth_token')) {
        window.location.href = 'webapp.html';
    }
}

// Initialize login system
function initializeLoginSystem() {
    // Check for existing session
    checkExistingSession();
    
    // Setup login form handler
    setupLoginForm();
    
    // Setup password toggle
    setupPasswordToggle();
}

// Setup login form submission
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        const messageEl = document.getElementById('loginMessage');
        const messageText = document.getElementById('messageText');
        
        if (username && password) {
            // Show loading state
            const submitBtn = this.querySelector('.login-btn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Signing in...</span>';
            submitBtn.disabled = true;
            
            // Simulate login process
            setTimeout(() => {
                // Check credentials against hardcoded values
                if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
                    // Successful login
                    handleSuccessfulLogin(username, remember, messageEl, messageText);
                } else {
                    // Failed login
                    handleFailedLogin(messageEl, messageText, submitBtn);
                }
            }, 1500);
        }
    });
}

// Handle successful login
function handleSuccessfulLogin(username, remember, messageEl, messageText) {
    // Create authentication token
    const authData = {
        token: 'devlearn_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        username: username,
        loginTime: new Date().toISOString(),
        remember: remember
    };
    
    // Store authentication data
    localStorage.setItem('devlearn_auth_token', authData.token);
    localStorage.setItem('devlearn_user_email', authData.username);
    localStorage.setItem('devlearn_login_time', authData.loginTime);
    
    // Show success message
    messageEl.style.display = 'flex';
    messageEl.style.background = 'rgba(63, 185, 80, 0.1)';
    messageEl.style.borderColor = 'rgba(63, 185, 80, 0.3)';
    messageEl.querySelector('i').style.color = '#3fb950';
    messageText.textContent = 'Login successful! Redirecting...';
    
    // Redirect to webapp after 1 second
    setTimeout(() => {
        window.location.href = 'webapp.html';
    }, 1000);
}

// Handle failed login
function handleFailedLogin(messageEl, messageText, submitBtn) {
    messageEl.style.display = 'flex';
    messageEl.style.background = 'rgba(248, 81, 73, 0.1)';
    messageEl.style.borderColor = 'rgba(248, 81, 73, 0.3)';
    messageEl.querySelector('i').style.color = '#f85149';
    messageText.textContent = 'Invalid username or password. Please try again.';
    
    submitBtn.innerHTML = '<span>Sign In</span> <i class="fas fa-arrow-right"></i>';
    submitBtn.disabled = false;
}

// Setup password toggle functionality
function setupPasswordToggle() {
    const passwordToggle = document.getElementById('passwordToggle');
    if (!passwordToggle) return;
    
    passwordToggle.addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const icon = this.querySelector('i');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLoginSystem();
});

