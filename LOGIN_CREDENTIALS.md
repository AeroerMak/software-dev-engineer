# DevLearn Platform - Login Credentials

## Student Login Access

To access the WebApp page, use the following credentials:

### Login Information:
- **Username:** `Maset`
- **Password:** `coding-web`

---

## Features:
✅ Simple hardcoded authentication  
✅ Username/Password validation  
✅ Session management with localStorage  
✅ Auto-logout after 24 hours  
✅ Remember me functionality  
✅ Password visibility toggle  

## Files:
- **Login Page:** `login.html`
- **Protected Page:** `webapp.html` (requires login)
- **Authentication Logic:** `login-auth.js` (contains credentials and login functions)
- **Auth Helper:** `auth.js` (reusable authentication utilities)

## Code Structure:
The login credentials are stored in `login-auth.js`:
```javascript
const VALID_CREDENTIALS = {
    username: 'Maset',
    password: 'coding-web'
};
```

## Notes:
- Username is case-sensitive (must be exactly "Maset")
- Password is case-sensitive (must be exactly "coding-web")
- Login session persists in browser localStorage
- Session automatically expires after 24 hours
- All authentication logic is separated into external JS files for better maintainability

---

**Malaysian Association of Science and Engineering Technology**

