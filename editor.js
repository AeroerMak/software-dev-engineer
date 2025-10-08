// ===================================
// Full-Screen Code Editor
// ===================================

class FullScreenEditor {
    constructor() {
        this.editor = null;
        this.currentTab = 'html';
        this.code = {
            html: '',
            css: '',
            javascript: '',
            python: ''
        };
        this.templates = {};
        this.init();
    }

    init() {
        this.loadTemplates();
        this.initializeEditor();
        this.setupEventListeners();
        this.loadTemplateFromURL();
        this.hideLoading();
    }

    // ===================================
    // CodeMirror Editor Setup
    // ===================================
    
    initializeEditor() {
        const textarea = document.getElementById('codeEditor');
        
        this.editor = CodeMirror.fromTextArea(textarea, {
            lineNumbers: true,
            mode: 'htmlmixed',
            theme: 'material-darker',
            autoCloseTags: true,
            autoCloseBrackets: true,
            matchBrackets: true,
            indentUnit: 2,
            tabSize: 2,
            lineWrapping: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            extraKeys: {
                'Ctrl-Space': 'autocomplete',
                'F11': () => this.toggleFullscreen(),
                'Esc': () => this.exitFullscreen(),
                'Ctrl-S': (cm) => {
                    this.saveCode();
                    return false;
                },
                'Ctrl-R': (cm) => {
                    this.runCode();
                    return false;
                }
            }
        });

        this.editor.on('change', () => {
            this.updateCode();
        });
    }

    // ===================================
    // Event Listeners
    // ===================================
    
    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                this.switchTab(tab);
            });
        });

        // Control buttons
        document.getElementById('runCode').addEventListener('click', () => this.runCode());
        document.getElementById('saveCode').addEventListener('click', () => this.saveCode());
        document.getElementById('clearCode').addEventListener('click', () => this.clearCode());
        document.getElementById('fullscreenToggle').addEventListener('click', () => this.toggleFullscreen());
        document.getElementById('refreshPreview').addEventListener('click', () => this.runCode());
        document.getElementById('newWindowPreview').addEventListener('click', () => this.openPreviewInNewWindow());

        // Auto-run on code change (delayed)
        this.runTimeout = null;
        this.editor.on('change', () => {
            clearTimeout(this.runTimeout);
            this.runTimeout = setTimeout(() => this.runCode(), 1000);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 's':
                        e.preventDefault();
                        this.saveCode();
                        break;
                    case 'r':
                        e.preventDefault();
                        this.runCode();
                        break;
                }
            }
        });
    }

    // ===================================
    // Tab Management
    // ===================================
    
    switchTab(tab) {
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

        // Save current code
        this.code[this.currentTab] = this.editor.getValue();

        // Switch to new tab
        this.currentTab = tab;
        
        // Update editor mode and content
        const modes = {
            'html': 'htmlmixed',
            'css': 'css',
            'javascript': 'javascript',
            'python': 'python'
        };

        this.editor.setOption('mode', modes[tab]);
        this.editor.setValue(this.code[tab] || '');
    }

    // ===================================
    // Code Execution
    // ===================================
    
    updateCode() {
        this.code[this.currentTab] = this.editor.getValue();
    }

    runCode() {
        const previewFrame = document.getElementById('previewFrame');
        const htmlContent = this.generateHTML();
        
        previewFrame.srcdoc = htmlContent;
    }

    generateHTML() {
        const html = this.code.html || '';
        const css = this.code.css || '';
        const js = this.code.javascript || '';
        const python = this.code.python || '';

        // If Python code exists, create a Python execution environment
        if (python && this.currentTab === 'python') {
            return this.generatePythonPreview(python);
        }

        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Preview</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
        }
        ${css}
    </style>
</head>
<body>
    ${html}
    <script>
        try {
            ${js}
        } catch (error) {
            console.error('JavaScript Error:', error);
            document.body.innerHTML += '<div style="background: #ff4444; color: white; padding: 10px; margin: 10px 0; border-radius: 5px;">Error: ' + error.message + '</div>';
        }
    </script>
</body>
</html>`;
    }

    generatePythonPreview(pythonCode) {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Code Preview</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #1a1a1a;
            color: #e6e6e6;
        }
        .python-output {
            background: #2d2d2d;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            white-space: pre-wrap;
            min-height: 200px;
        }
        .python-error {
            background: #ff4444;
            color: white;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
        .loading {
            color: #888;
            font-style: italic;
        }
        .python-code {
            background: #2d2d2d;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            white-space: pre-wrap;
            color: #e6e6e6;
        }
        .run-button {
            background: #667eea;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px 0;
        }
        .run-button:hover {
            background: #5a9fd4;
        }
    </style>
</head>
<body>
    <h2>🐍 Python Code</h2>
    <div class="python-code">${pythonCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
    
    <button class="run-button" onclick="runPython()">▶ Run Python Code</button>
    
    <h3>Output:</h3>
    <div id="python-output" class="python-output">Click "Run Python Code" to execute your code</div>
    
    <script>
        let pyodideLoaded = false;
        
        async function loadPyodide() {
            if (pyodideLoaded) return;
            
            const output = document.getElementById('python-output');
            output.textContent = 'Loading Python environment... (This may take a moment)';
            
            try {
                // Load Pyodide dynamically
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
                document.head.appendChild(script);
                
                await new Promise((resolve, reject) => {
                    script.onload = resolve;
                    script.onerror = reject;
                });
                
                await loadPyodide();
                pyodideLoaded = true;
                output.textContent = 'Python environment loaded! Click "Run Python Code" to execute.';
                
            } catch (error) {
                output.innerHTML = '<div class="python-error">Failed to load Python environment: ' + error.message + '</div>';
            }
        }
        
        async function runPython() {
            const output = document.getElementById('python-output');
            const pythonCode = \`${pythonCode.replace(/`/g, '\\`')}\`;
            
            if (!pyodideLoaded) {
                await loadPyodide();
                if (!pyodideLoaded) return;
            }
            
            try {
                output.textContent = 'Running Python code...';
                
                // Run Python code and capture output
                const pythonScript = "import sys\n" +
                    "from io import StringIO\n" +
                    "\n" +
                    "# Capture stdout\n" +
                    "old_stdout = sys.stdout\n" +
                    "sys.stdout = mystdout = StringIO()\n" +
                    "\n" +
                    "try:\n" +
                    "    exec('''" + pythonCode.replace(/'/g, "\\'") + "''')\n" +
                    "except Exception as e:\n" +
                    "    print(f'Error: {e}')\n" +
                    "finally:\n" +
                    "    sys.stdout = old_stdout\n" +
                    "    print(mystdout.getvalue())";
                
                pyodide.runPython(pythonScript);
                
                // Get the output
                const result = pyodide.runPython('mystdout.getvalue()');
                output.textContent = result || 'No output';
                
            } catch (error) {
                output.innerHTML = '<div class="python-error">Error: ' + error.message + '</div>';
            }
        }
    </script>
</body>
</html>`;
    }

    // ===================================
    // Code Management
    // ===================================
    
    clearCode() {
        if (confirm('Are you sure you want to clear all code?')) {
            this.code = { html: '', css: '', javascript: '', python: '' };
            this.editor.setValue('');
            this.runCode();
            this.showNotification('Code cleared!', 'success');
        }
    }

    saveCode() {
        const codeData = {
            html: this.code.html,
            css: this.code.css,
            javascript: this.code.javascript,
            python: this.code.python,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('fullscreenCode', JSON.stringify(codeData));
        this.showNotification('Code saved successfully!', 'success');
    }

    loadSavedCode() {
        const savedCode = localStorage.getItem('fullscreenCode');
        if (savedCode) {
            const codeData = JSON.parse(savedCode);
            this.code = codeData;
            this.editor.setValue(this.code[this.currentTab] || '');
            this.runCode();
            this.showNotification('Code loaded successfully!', 'success');
        }
    }

    // ===================================
    // Templates
    // ===================================
    
    loadTemplates() {
        this.templates = {
            'landing-page': {
                html: `<header class="hero">
    <nav class="navbar">
        <div class="nav-brand">YourBrand</div>
        <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
    <div class="hero-content">
        <h1>Welcome to the Future</h1>
        <p>Build amazing things with our platform</p>
        <button class="cta-button">Get Started</button>
    </div>
</header>
<main>
    <section class="features">
        <div class="feature-card">
            <h3>Fast</h3>
            <p>Lightning fast performance</p>
        </div>
        <div class="feature-card">
            <h3>Secure</h3>
            <p>Enterprise-grade security</p>
        </div>
        <div class="feature-card">
            <h3>Scalable</h3>
            <p>Grows with your business</p>
        </div>
    </section>
</main>`,
                css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;
}

.nav-links a:hover {
    opacity: 0.8;
}

.hero-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease-out;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    animation: fadeInUp 1s ease-out 0.2s both;
}

.cta-button {
    background: #ff6b6b;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    animation: fadeInUp 1s ease-out 0.4s both;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`,
                javascript: `// Add some interactivity
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', function() {
    alert('Welcome! This is just a demo.');
});

// Add smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Navigation clicked!');
    });
});`
            },
            'product-card': {
                html: `<div class="product-card">
    <div class="product-image">
        <img src="https://via.placeholder.com/300x200" alt="Product">
        <div class="product-badge">New</div>
    </div>
    <div class="product-info">
        <h3 class="product-title">Amazing Product</h3>
        <p class="product-description">This is an amazing product that will change your life.</p>
        <div class="product-price">
            <span class="current-price">$99.99</span>
            <span class="original-price">$149.99</span>
        </div>
        <button class="add-to-cart">Add to Cart</button>
    </div>
</div>`,
                css: `.product-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 300px;
    margin: 20px;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.product-image {
    position: relative;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.product-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff6b6b;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
}

.product-info {
    padding: 20px;
}

.product-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #333;
}

.product-description {
    color: #666;
    margin-bottom: 15px;
    line-height: 1.4;
}

.product-price {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.current-price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2ecc71;
}

.original-price {
    font-size: 1rem;
    color: #999;
    text-decoration: line-through;
}

.add-to-cart {
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.add-to-cart:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}`,
                javascript: `const addToCartBtn = document.querySelector('.add-to-cart');

addToCartBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    this.textContent = 'Added!';
    this.style.background = '#2ecc71';
    
    setTimeout(() => {
        this.style.transform = 'scale(1)';
        this.textContent = 'Add to Cart';
        this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }, 1000);
});`
            },
            'blog-layout': {
                html: `<article class="blog-post">
    <header class="post-header">
        <h1>My First Blog Post</h1>
        <div class="post-meta">
            <span class="author">By John Doe</span>
            <span class="date">March 15, 2024</span>
        </div>
    </header>
    <div class="post-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
</article>`,
                css: `.blog-post {
    max-width: 700px;
    margin: 40px auto;
    padding: 40px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.post-header {
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 20px;
    margin-bottom: 30px;
}

.post-header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #333;
}

.post-meta {
    display: flex;
    gap: 20px;
    color: #666;
    font-size: 0.9rem;
}

.post-content p {
    line-height: 1.8;
    margin-bottom: 20px;
    color: #444;
}`,
                javascript: `console.log('Blog layout loaded!');`
            },
            'mobile-ui': {
                html: `<div class="mobile-screen">
    <div class="mobile-header">
        <button class="back-btn">←</button>
        <h2>My App</h2>
        <button class="menu-btn">☰</button>
    </div>
    <div class="mobile-content">
        <div class="card">
            <h3>Welcome!</h3>
            <p>This is a mobile UI example</p>
            <button class="mobile-btn">Tap Me</button>
        </div>
    </div>
</div>`,
                css: `.mobile-screen {
    max-width: 375px;
    margin: 20px auto;
    background: white;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.mobile-header button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

.mobile-content {
    padding: 20px;
}

.card {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
}

.mobile-btn {
    background: #667eea;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 15px;
}`,
                javascript: `const mobileBtn = document.querySelector('.mobile-btn');

mobileBtn.addEventListener('click', function() {
    alert('Button tapped!');
});`
            }
        };
    }

    loadTemplate(templateName) {
        if (this.templates[templateName]) {
            const template = this.templates[templateName];
            this.code = {
                html: template.html || '',
                css: template.css || '',
                javascript: template.javascript || ''
            };
            
            this.editor.setValue(this.code[this.currentTab] || '');
            this.runCode();
            this.showNotification(`Template "${templateName}" loaded!`, 'success');
        }
    }

    loadTemplateFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const template = urlParams.get('template');
        
        if (template && this.templates[template]) {
            this.loadTemplate(template);
        } else {
            this.setupDefaultCode();
        }
    }

    setupDefaultCode() {
        // Check for practice parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        const practiceType = urlParams.get('practice');
        
        if (practiceType) {
            this.loadPracticeCode(practiceType);
        } else {
            this.loadDefaultCode();
        }
    }
    
    loadDefaultCode() {
        this.code = {
            html: `<div class="welcome">
    <h1>Welcome to DevLearn Editor!</h1>
    <p>Start coding and see your results instantly.</p>
    <button onclick="alert('Hello from DevLearn!')">Click Me</button>
</div>`,
            css: `body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.welcome {
    text-align: center;
    background: white;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

h1 {
    color: #333;
    margin-bottom: 20px;
}

p {
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 30px;
}

button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

button:hover {
    transform: translateY(-3px);
}`,
            javascript: `console.log('Welcome to DevLearn Full-Screen Editor!');
console.log('Edit the HTML, CSS, and JavaScript to see changes in real-time.');`,
            python: `# Welcome to Python in DevLearn Editor!
print("Hello, World!")
print("Welcome to DevLearn Python Environment")

# Basic Python example
name = "DevLearn Student"
age = 25
print(f"Hello, {name}! You are {age} years old.")

# Simple calculation
numbers = [1, 2, 3, 4, 5]
total = sum(numbers)
print(f"Sum of numbers {numbers} is {total}")

# Python list comprehension
squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")`
        };
        
        this.editor.setValue(this.code[this.currentTab]);
        this.runCode();
    }
    
    loadPracticeCode(practiceType) {
        const practiceTemplates = {
            'calculator': {
                html: `<div class="calculator">
    <div class="display">
        <input type="text" id="result" readonly>
    </div>
    <div class="buttons">
        <button onclick="clearDisplay()">C</button>
        <button onclick="deleteLast()">⌫</button>
        <button onclick="appendToDisplay('/')">/</button>
        <button onclick="appendToDisplay('*')">×</button>
        
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="appendToDisplay('-')">-</button>
        
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="appendToDisplay('+')">+</button>
        
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="calculate()" class="equals">=</button>
        
        <button onclick="appendToDisplay('0')" class="zero">0</button>
        <button onclick="appendToDisplay('.')">.</button>
    </div>
</div>`,
                css: `body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.calculator {
    background: #2c3e50;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    width: 300px;
}

.display {
    margin-bottom: 20px;
}

#result {
    width: 100%;
    height: 60px;
    font-size: 24px;
    text-align: right;
    padding: 0 15px;
    border: none;
    border-radius: 10px;
    background: #34495e;
    color: white;
    box-sizing: border-box;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    height: 60px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #34495e;
    color: white;
}

button:hover {
    background: #4a6741;
    transform: scale(1.05);
}

button:active {
    transform: scale(0.95);
}

.equals {
    background: #e74c3c !important;
}

.zero {
    grid-column: span 2;
}`,
                javascript: `let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('result').value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}

function calculate() {
    if (operator && previousInput && currentInput) {
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        let result;
        
        switch(operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
        }
        
        document.getElementById('result').value = result;
        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }
}

// Add operator handling
function setOperator(op) {
    if (currentInput) {
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }
}

// Update appendToDisplay to handle operators
function appendToDisplay(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        setOperator(value);
    } else {
        currentInput += value;
        document.getElementById('result').value = currentInput;
    }
}`
            },
            'todo-list': {
                html: `<div class="todo-container">
    <h1>Todo List</h1>
    <div class="input-section">
        <input type="text" id="todoInput" placeholder="Add a new task...">
        <button onclick="addTodo()">Add Task</button>
    </div>
    <ul id="todoList" class="todo-list"></ul>
    <div class="stats">
        <span id="totalTasks">Total: 0</span>
        <span id="completedTasks">Completed: 0</span>
    </div>
</div>`,
                css: `body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 20px;
    min-height: 100vh;
}

.todo-container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.input-section {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

#todoInput {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}

button {
    padding: 12px 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
}

button:hover {
    background: #5a6fd8;
}

.todo-list {
    list-style: none;
    padding: 0;
}

.todo-item {
    display: flex;
    align-items: center;
    padding: 15px;
    margin: 10px 0;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

.todo-item.completed {
    text-decoration: line-through;
    opacity: 0.6;
    border-left-color: #28a745;
}

.todo-item input[type="checkbox"] {
    margin-right: 15px;
    transform: scale(1.2);
}

.todo-text {
    flex: 1;
    font-size: 16px;
}

.delete-btn {
    background: #dc3545;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}

.delete-btn:hover {
    background: #c82333;
}

.stats {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
    font-weight: bold;
    color: #666;
}`,
                javascript: `let todos = [];
let todoId = 0;

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text) {
        const todo = {
            id: todoId++,
            text: text,
            completed: false
        };
        todos.push(todo);
        input.value = '';
        renderTodos();
        updateStats();
    }
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        updateStats();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
    updateStats();
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = \`todo-item \${todo.completed ? 'completed' : ''}\`;
        li.innerHTML = \`
            <input type="checkbox" \${todo.completed ? 'checked' : ''} onchange="toggleTodo(\${todo.id})">
            <span class="todo-text">\${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(\${todo.id})">Delete</button>
        \`;
        todoList.appendChild(li);
    });
}

function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    
    document.getElementById('totalTasks').textContent = \`Total: \${total}\`;
    document.getElementById('completedTasks').textContent = \`Completed: \${completed}\`;
}

// Allow adding todos with Enter key
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});`
            },
            'form': {
                html: `<div class="form-container">
    <h1>Contact Form</h1>
    <form id="contactForm">
        <div class="form-group">
            <label for="name">Full Name *</label>
            <input type="text" id="name" name="name" required>
            <span class="error" id="nameError"></span>
        </div>
        
        <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" id="email" name="email" required>
            <span class="error" id="emailError"></span>
        </div>
        
        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone">
            <span class="error" id="phoneError"></span>
        </div>
        
        <div class="form-group">
            <label for="subject">Subject *</label>
            <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales Question</option>
                <option value="feedback">Feedback</option>
            </select>
            <span class="error" id="subjectError"></span>
        </div>
        
        <div class="form-group">
            <label for="message">Message *</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <span class="error" id="messageError"></span>
        </div>
        
        <div class="form-group">
            <label class="checkbox-label">
                <input type="checkbox" id="newsletter" name="newsletter">
                Subscribe to our newsletter
            </label>
        </div>
        
        <button type="submit">Send Message</button>
    </form>
    
    <div id="successMessage" class="success-message" style="display: none;">
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully.</p>
    </div>
</div>`,
                css: `body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 20px;
    min-height: 100vh;
}

.form-container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 25px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
}

input, select, textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #667eea;
}

.error {
    color: #dc3545;
    font-size: 14px;
    margin-top: 5px;
    display: block;
}

.checkbox-label {
    display: flex;
    align-items: center;
    font-weight: normal;
    cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
}

button {
    width: 100%;
    padding: 15px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: #5a6fd8;
}

.success-message {
    text-align: center;
    padding: 30px;
    background: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 8px;
    color: #155724;
}

.success-message h3 {
    color: #155724;
    margin-bottom: 10px;
}`,
                javascript: `document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    // Validate form
    if (validateForm()) {
        // Show success message
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // In a real application, you would send the data to a server here
        console.log('Form submitted successfully!');
    }
});

function validateForm() {
    let isValid = true;
    
    // Validate name
    const name = document.getElementById('name').value.trim();
    if (name.length < 2) {
        showError('nameError', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone (optional but if provided, must be valid)
    const phone = document.getElementById('phone').value.trim();
    if (phone && !/^[\\d\\s\\-\\+\\(\\)]+$/.test(phone)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate subject
    const subject = document.getElementById('subject').value;
    if (!subject) {
        showError('subjectError', 'Please select a subject');
        isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}`
            },
            'ai-chatbot': {
                html: `<div class="chatbot-container">
    <div class="chat-header">
        <h2>AI Assistant</h2>
        <div class="status">Online</div>
    </div>
    
    <div class="chat-messages" id="chatMessages">
        <div class="message bot-message">
            <div class="message-content">
                Hello! I'm your AI assistant. How can I help you today?
            </div>
        </div>
    </div>
    
    <div class="chat-input">
        <input type="text" id="messageInput" placeholder="Type your message...">
        <button onclick="sendMessage()">Send</button>
    </div>
</div>`,
                css: `body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 20px;
    min-height: 100vh;
}

.chatbot-container {
    max-width: 500px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    overflow: hidden;
}

.chat-header {
    background: #667eea;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.status {
    background: #28a745;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
}

.chat-messages {
    height: 400px;
    overflow-y: auto;
    padding: 20px;
    background: #f8f9fa;
}

.message {
    margin-bottom: 15px;
    display: flex;
}

.user-message {
    justify-content: flex-end;
}

.bot-message {
    justify-content: flex-start;
}

.message-content {
    max-width: 70%;
    padding: 12px 16px;
    border-radius: 18px;
    word-wrap: break-word;
}

.user-message .message-content {
    background: #667eea;
    color: white;
    border-bottom-right-radius: 5px;
}

.bot-message .message-content {
    background: white;
    color: #333;
    border: 1px solid #ddd;
    border-bottom-left-radius: 5px;
}

.chat-input {
    display: flex;
    padding: 20px;
    background: white;
    border-top: 1px solid #ddd;
}

#messageInput {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
}

#messageInput:focus {
    border-color: #667eea;
}

button {
    margin-left: 10px;
    padding: 12px 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
}

button:hover {
    background: #5a6fd8;
}

.typing-indicator {
    display: flex;
    align-items: center;
    color: #666;
    font-style: italic;
}

.typing-dots {
    display: inline-block;
    margin-left: 5px;
}

.typing-dots span {
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #666;
    border-radius: 50%;
    margin: 0 1px;
    animation: typing 1.4s infinite;
}

.typing-dots span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-dots span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {
    0%, 60%, 100% {
        transform: translateY(0);
    }
    30% {
        transform: translateY(-10px);
    }
}`,
                javascript: `const responses = [
    "That's interesting! Tell me more about that.",
    "I understand. How can I help you with that?",
    "That's a great question! Let me think about it...",
    "I see what you mean. What would you like to do next?",
    "That sounds exciting! Can you provide more details?",
    "I'm here to help! What specific information do you need?",
    "That's a common concern. Here's what I suggest...",
    "I appreciate you sharing that with me. How can I assist you further?",
    "That's a good point! Let me help you with that.",
    "I'm glad you brought that up. Here's what I think..."
];

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, 'user');
        input.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate AI response after delay
        setTimeout(() => {
            hideTypingIndicator();
            const response = getAIResponse(message);
            addMessage(response, 'bot');
        }, 1500);
    }
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = \`message \${sender}-message\`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = \`
        <div class="message-content">
            AI is typing
            <span class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
    \`;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function getAIResponse(userMessage) {
    // Simple keyword-based responses
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! Nice to meet you! How can I assist you today?";
    } else if (lowerMessage.includes('help')) {
        return "I'm here to help! What specific assistance do you need?";
    } else if (lowerMessage.includes('thank')) {
        return "You're welcome! I'm happy to help. Is there anything else you'd like to know?";
    } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
        return "Goodbye! It was nice chatting with you. Feel free to come back anytime!";
    } else {
        // Return random response
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Allow sending messages with Enter key
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});`
            },
            'data-viz': {
                html: `<div class="chart-container">
    <h1>Data Visualization Dashboard</h1>
    
    <div class="controls">
        <button onclick="generateRandomData()">Generate Random Data</button>
        <button onclick="changeChartType()">Change Chart Type</button>
        <button onclick="animateChart()">Animate Chart</button>
    </div>
    
    <div class="chart-wrapper">
        <canvas id="dataChart" width="600" height="400"></canvas>
    </div>
    
    <div class="stats">
        <div class="stat-item">
            <span class="stat-label">Total Data Points:</span>
            <span id="totalPoints">0</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Average Value:</span>
            <span id="averageValue">0</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Max Value:</span>
            <span id="maxValue">0</span>
        </div>
    </div>
</div>`,
                css: `body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 20px;
    min-height: 100vh;
}

.chart-container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.controls {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    justify-content: center;
    flex-wrap: wrap;
}

button {
    padding: 12px 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
}

button:hover {
    background: #5a6fd8;
}

.chart-wrapper {
    text-align: center;
    margin-bottom: 30px;
    background: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
}

#dataChart {
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
}

.stats {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
}

.stat-item {
    text-align: center;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    min-width: 150px;
}

.stat-label {
    display: block;
    font-weight: bold;
    color: #666;
    margin-bottom: 5px;
}

.stat-item span:last-child {
    font-size: 24px;
    font-weight: bold;
    color: #667eea;
}`,
                javascript: `let chartData = [];
let chartType = 'bar';
let animationFrame = null;

// Initialize chart
function initChart() {
    generateRandomData();
    drawChart();
}

function generateRandomData() {
    chartData = [];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 0; i < labels.length; i++) {
        chartData.push({
            label: labels[i],
            value: Math.floor(Math.random() * 100) + 1
        });
    }
    
    updateStats();
    drawChart();
}

function changeChartType() {
    chartType = chartType === 'bar' ? 'line' : 'bar';
    drawChart();
}

function animateChart() {
    let progress = 0;
    const duration = 1000;
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        progress = Math.min(elapsed / duration, 1);
        
        drawChart(progress);
        
        if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
        }
    }
    
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
    
    animate();
}

function drawChart(progress = 1) {
    const canvas = document.getElementById('dataChart');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const padding = 40;
    const chartWidth = canvas.width - (padding * 2);
    const chartHeight = canvas.height - (padding * 2);
    const maxValue = Math.max(...chartData.map(d => d.value));
    
    // Draw axes
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Draw data
    if (chartType === 'bar') {
        drawBarChart(ctx, padding, chartWidth, chartHeight, maxValue, progress);
    } else {
        drawLineChart(ctx, padding, chartWidth, chartHeight, maxValue, progress);
    }
    
    // Draw labels
    drawLabels(ctx, padding, chartWidth, chartHeight);
}

function drawBarChart(ctx, padding, chartWidth, chartHeight, maxValue, progress) {
    const barWidth = chartWidth / chartData.length * 0.8;
    const barSpacing = chartWidth / chartData.length;
    
    chartData.forEach((data, index) => {
        const barHeight = (data.value / maxValue) * chartHeight * progress;
        const x = padding + (index * barSpacing) + (barSpacing - barWidth) / 2;
        const y = canvas.height - padding - barHeight;
        
        // Bar color
        const hue = (index * 30) % 360;
        ctx.fillStyle = \`hsl(\${hue}, 70%, 50%)\`;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Value label
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(data.value, x + barWidth/2, y - 5);
    });
}

function drawLineChart(ctx, padding, chartWidth, chartHeight, maxValue, progress) {
    const pointSpacing = chartWidth / (chartData.length - 1);
    
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    chartData.forEach((data, index) => {
        const x = padding + (index * pointSpacing);
        const y = canvas.height - padding - (data.value / maxValue) * chartHeight * progress;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw points
    chartData.forEach((data, index) => {
        const x = padding + (index * pointSpacing);
        const y = canvas.height - padding - (data.value / maxValue) * chartHeight * progress;
        
        ctx.fillStyle = '#667eea';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function drawLabels(ctx, padding, chartWidth, chartHeight) {
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    chartData.forEach((data, index) => {
        const x = padding + (index * chartWidth / chartData.length) + (chartWidth / chartData.length / 2);
        const y = canvas.height - padding + 20;
        ctx.fillText(data.label, x, y);
    });
}

function updateStats() {
    const total = chartData.length;
    const average = chartData.reduce((sum, data) => sum + data.value, 0) / total;
    const max = Math.max(...chartData.map(d => d.value));
    
    document.getElementById('totalPoints').textContent = total;
    document.getElementById('averageValue').textContent = average.toFixed(1);
    document.getElementById('maxValue').textContent = max;
}

// Initialize when page loads
window.addEventListener('load', initChart);`
            },
            'python-analyzer': {
                html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Data Analyzer</title>
</head>
<body>
    <h1>🐍 Python Student Grade Analyzer</h1>
    <p>This is a Python-based data analysis project. Switch to the Python tab to see and run the code!</p>
    <p><strong>Note:</strong> Click "Run Python Code" in the preview panel to execute the Python script.</p>
</body>
</html>`,
                css: `body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 40px;
    min-height: 100vh;
    color: white;
}

h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

p {
    text-align: center;
    font-size: 1.2rem;
    background: rgba(255,255,255,0.1);
    padding: 15px;
    border-radius: 10px;
    margin: 20px auto;
    max-width: 600px;
}`,
                javascript: `// This project focuses on Python
// Switch to the Python tab to see the main code
console.log('Python Data Analyzer Project');
console.log('Switch to Python tab to see the analysis code');`,
                python: `# ========================================
# Student Grade Analyzer
# A comprehensive Python data analysis project
# ========================================

class StudentGradeAnalyzer:
    """Analyze student grades and generate statistics"""
    
    def __init__(self):
        self.students = []
        self.subjects = ['Math', 'Science', 'English', 'History', 'Computer Science']
        
    def add_student(self, name, grades):
        """Add a student with their grades"""
        student = {
            'name': name,
            'grades': grades,
            'average': sum(grades) / len(grades)
        }
        self.students.append(student)
        
    def calculate_class_statistics(self):
        """Calculate overall class statistics"""
        if not self.students:
            return None
            
        all_averages = [student['average'] for student in self.students]
        
        stats = {
            'class_average': sum(all_averages) / len(all_averages),
            'highest_average': max(all_averages),
            'lowest_average': min(all_averages),
            'total_students': len(self.students)
        }
        
        return stats
    
    def get_top_students(self, n=3):
        """Get top N students by average grade"""
        sorted_students = sorted(
            self.students, 
            key=lambda x: x['average'], 
            reverse=True
        )
        return sorted_students[:n]
    
    def get_subject_statistics(self):
        """Calculate statistics for each subject"""
        subject_stats = {}
        
        for i, subject in enumerate(self.subjects):
            grades = [student['grades'][i] for student in self.students]
            subject_stats[subject] = {
                'average': sum(grades) / len(grades),
                'highest': max(grades),
                'lowest': min(grades)
            }
            
        return subject_stats
    
    def generate_report(self):
        """Generate a comprehensive report"""
        print("=" * 60)
        print("📊 STUDENT GRADE ANALYSIS REPORT")
        print("=" * 60)
        print()
        
        # Class Statistics
        stats = self.calculate_class_statistics()
        print("📈 CLASS STATISTICS")
        print("-" * 60)
        print(f"Total Students: {stats['total_students']}")
        print(f"Class Average: {stats['class_average']:.2f}")
        print(f"Highest Average: {stats['highest_average']:.2f}")
        print(f"Lowest Average: {stats['lowest_average']:.2f}")
        print()
        
        # Top Students
        print("🏆 TOP 3 STUDENTS")
        print("-" * 60)
        top_students = self.get_top_students(3)
        for i, student in enumerate(top_students, 1):
            print(f"{i}. {student['name']}: {student['average']:.2f}")
        print()
        
        # Subject Statistics
        print("📚 SUBJECT STATISTICS")
        print("-" * 60)
        subject_stats = self.get_subject_statistics()
        for subject, stats in subject_stats.items():
            print(f"\\n{subject}:")
            print(f"  Average: {stats['average']:.2f}")
            print(f"  Highest: {stats['highest']}")
            print(f"  Lowest: {stats['lowest']}")
        print()
        
        # Individual Student Details
        print("👨‍🎓 INDIVIDUAL STUDENT DETAILS")
        print("-" * 60)
        for student in self.students:
            print(f"\\n{student['name']} (Average: {student['average']:.2f})")
            for i, subject in enumerate(self.subjects):
                grade = student['grades'][i]
                print(f"  {subject}: {grade}")
        
        print()
        print("=" * 60)
        print("Report generated successfully! ✅")
        print("=" * 60)


# ========================================
# MAIN PROGRAM
# ========================================

def main():
    """Main function to run the analyzer"""
    
    # Create analyzer instance
    analyzer = StudentGradeAnalyzer()
    
    # Add sample students with grades
    # Grades: [Math, Science, English, History, Computer Science]
    analyzer.add_student("Alice Johnson", [95, 88, 92, 85, 98])
    analyzer.add_student("Bob Smith", [78, 82, 75, 88, 80])
    analyzer.add_student("Charlie Brown", [92, 95, 89, 91, 94])
    analyzer.add_student("Diana Prince", [88, 90, 94, 87, 92])
    analyzer.add_student("Ethan Hunt", [85, 79, 83, 90, 88])
    analyzer.add_student("Fiona Green", [91, 93, 88, 92, 95])
    analyzer.add_student("George Wilson", [76, 80, 78, 82, 79])
    analyzer.add_student("Hannah Lee", [94, 96, 93, 95, 97])
    
    # Generate comprehensive report
    analyzer.generate_report()
    
    # Additional analysis
    print("\\n🔍 ADDITIONAL INSIGHTS")
    print("-" * 60)
    
    # Find students who need improvement (average < 80)
    struggling_students = [
        s for s in analyzer.students 
        if s['average'] < 80
    ]
    
    if struggling_students:
        print("\\nStudents who may need additional support:")
        for student in struggling_students:
            print(f"  • {student['name']} (Average: {student['average']:.2f})")
    else:
        print("\\nAll students are performing well! 🎉")
    
    # Find honor roll students (average >= 90)
    honor_roll = [
        s for s in analyzer.students 
        if s['average'] >= 90
    ]
    
    if honor_roll:
        print("\\n🌟 Honor Roll Students (Average >= 90):")
        for student in honor_roll:
            print(f"  • {student['name']} (Average: {student['average']:.2f})")
    
    print("\\n" + "=" * 60)
    print("Analysis complete! 🎓")
    print("=" * 60)


# Run the program
if __name__ == "__main__":
    main()


# ========================================
# LEARNING OBJECTIVES:
# ========================================
# 1. Object-Oriented Programming (Classes)
# 2. Data structures (Lists, Dictionaries)
# 3. List comprehensions
# 4. Statistical calculations
# 5. String formatting
# 6. Sorting and filtering data
# 7. Report generation
# 8. Code organization and documentation
# ========================================`
            }
        };
        
        if (practiceTemplates[practiceType]) {
            this.code = practiceTemplates[practiceType];
            this.editor.setValue(this.code[this.currentTab]);
            this.runCode();
        } else {
            this.loadDefaultCode();
        }
    }

    // ===================================
    // UI Helpers
    // ===================================
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    exitFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }

    openPreviewInNewWindow() {
        const htmlContent = this.generateHTML();
        const newWindow = window.open('', '_blank', 'width=800,height=600');
        newWindow.document.write(htmlContent);
        newWindow.document.close();
    }

    hideLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 300);
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
            font-weight: 600;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            notification.style.transition = 'all 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// ===================================
// Initialize Full-Screen Editor
// ===================================

let fullScreenEditor;

document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for CodeMirror to load
    setTimeout(() => {
        fullScreenEditor = new FullScreenEditor();
        window.fullScreenEditor = fullScreenEditor;
        console.log('Full-Screen Editor initialized!');
    }, 500);
});

// Global function for opening template editor
function openTemplateEditor(templateName) {
    const editorUrl = `editor.html?template=${templateName}`;
    window.open(editorUrl, '_blank', 'width=1400,height=900,resizable=yes,scrollbars=yes');
}
