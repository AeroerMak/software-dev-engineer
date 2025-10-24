// ===================================
// Interactive Coding Practice Environment
// ===================================

class PracticeEnvironment {
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
        this.challenges = {};
        this.init();
    }

    init() {
        this.initializeEditor();
        this.setupEventListeners();
        this.loadTemplates();
        this.loadChallenges();
        this.setupDefaultCode();
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
                'F11': function(cm) {
                    cm.setOption('fullScreen', !cm.getOption('fullScreen'));
                },
                'Esc': function(cm) {
                    if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false);
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
        document.getElementById('clearCode').addEventListener('click', () => this.clearCode());
        document.getElementById('saveCode').addEventListener('click', () => this.saveCode());
        document.getElementById('loadTemplate').addEventListener('click', () => this.showTemplateModal());
        document.getElementById('refreshPreview').addEventListener('click', () => this.runCode());
        document.getElementById('fullscreenPreview').addEventListener('click', () => this.toggleFullscreen());

        // Auto-run on code change (delayed)
        this.runTimeout = null;
        this.editor.on('change', () => {
            clearTimeout(this.runTimeout);
            this.runTimeout = setTimeout(() => this.runCode(), 1000);
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

        localStorage.setItem('practiceCode', JSON.stringify(codeData));
        this.showNotification('Code saved successfully!', 'success');
    }

    loadSavedCode() {
        const savedCode = localStorage.getItem('practiceCode');
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

    // ===================================
    // Challenges
    // ===================================
    
    loadChallenges() {
        this.challenges = {
            'calculator': {
                html: `<div class="calculator">
    <input type="text" id="display" readonly>
    <div class="buttons">
        <button onclick="clearDisplay()">C</button>
        <button onclick="appendToDisplay('/')">/</button>
        <button onclick="appendToDisplay('*')">*</button>
        <button onclick="appendToDisplay('-')">-</button>
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="appendToDisplay('+')">+</button>
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="calculate()" class="equals">=</button>
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="appendToDisplay('0')">0</button>
    </div>
</div>`,
                css: `.calculator {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    background: #333;
    border-radius: 10px;
}

#display {
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
    font-size: 2rem;
    text-align: right;
    border: none;
    border-radius: 5px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #666;
    color: white;
}

button:hover {
    background: #777;
}

.equals {
    background: #667eea;
    grid-row: span 2;
}`,
                javascript: `function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid expression!');
    }
}`
            },
            'todo-list': {
                html: `<div class="todo-container">
    <h2>My Todo List</h2>
    <div class="input-group">
        <input type="text" id="todoInput" placeholder="Enter a task...">
        <button onclick="addTodo()">Add</button>
    </div>
    <ul id="todoList"></ul>
</div>`,
                css: `.todo-container {
    max-width: 500px;
    margin: 50px auto;
    padding: 30px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

h2 {
    text-align: center;
    color: #333;
}

.input-group {
    display: flex;
    gap: 10px;
    margin: 20px 0;
}

#todoInput {
    flex: 1;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

button {
    padding: 10px 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#todoList {
    list-style: none;
    padding: 0;
}

#todoList li {
    padding: 15px;
    background: #f5f5f5;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.delete-btn {
    background: #ff6b6b;
    padding: 5px 10px;
    font-size: 0.9rem;
}`,
                javascript: `function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text === '') {
        alert('Please enter a task!');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = \`
        <span>\${text}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    \`;
    
    document.getElementById('todoList').appendChild(li);
    input.value = '';
}

// Allow Enter key to add todo
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});`
            }
        };
    }

    loadChallenge(challengeName) {
        if (this.challenges[challengeName]) {
            const challenge = this.challenges[challengeName];
            this.code = {
                html: challenge.html || '',
                css: challenge.css || '',
                javascript: challenge.javascript || ''
            };
            
            this.editor.setValue(this.code[this.currentTab] || '');
            this.runCode();
            this.showNotification(`Challenge "${challengeName}" loaded!`, 'success');
        }
    }

    // ===================================
    // Terminal Functions
    // ===================================
    
    openCodeEditor() {
        // Open the full-screen code editor
        const editorUrl = 'editor.html';
        window.open(editorUrl, '_blank', 'width=1400,height=900,resizable=yes,scrollbars=yes');
    }
    
    showEditorFeatures() {
        // Show a modal or alert with editor features
        const features = `
DevLearn Code Editor Features:

🚀 Multi-Language Support
• HTML, CSS, JavaScript, Python
• Syntax highlighting for all languages
• Auto-completion and error detection

⚡ Live Preview
• Real-time code execution
• Instant visual feedback
• Responsive preview panel

💾 Project Management
• Save and load your projects
• Local storage for persistence
• Export your code

🎨 Professional Interface
• Clean, modern design
• Full-screen coding experience
• Keyboard shortcuts support

🐍 Python Execution
• Run Python code in the browser
• No server required
• Full Python standard library support
        `;
        
        alert(features);
    }

    // ===================================
    // UI Helpers
    // ===================================
    
    setupDefaultCode() {
        this.code = {
            html: `<div class="welcome">
    <h1>Welcome to DevLearn Practice!</h1>
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
            javascript: `console.log('Welcome to DevLearn Practice Environment!');
console.log('Edit the HTML, CSS, and JavaScript to see changes in real-time.');`,
            python: `# Welcome to Python in DevLearn Practice!
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

    toggleFullscreen() {
        const previewFrame = document.getElementById('previewFrame');
        if (previewFrame.requestFullscreen) {
            previewFrame.requestFullscreen();
        } else if (previewFrame.webkitRequestFullscreen) {
            previewFrame.webkitRequestFullscreen();
        } else if (previewFrame.msRequestFullscreen) {
            previewFrame.msRequestFullscreen();
        }
    }

    showTemplateModal() {
        const templates = Object.keys(this.templates);
        let message = 'Available templates:\n\n';
        templates.forEach((name, index) => {
            message += `${index + 1}. ${name}\n`;
        });
        message += '\nEnter template name:';
        
        const templateName = prompt(message);
        
        if (templateName && this.templates[templateName]) {
            this.loadTemplate(templateName);
        } else if (templateName) {
            this.showNotification('Template not found!', 'error');
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
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
// Initialize Practice Environment
// ===================================

// Global functions for terminal interactions
window.openCodeEditor = function() {
    const editorUrl = 'editor.html';
    window.open(editorUrl, '_blank', 'width=1400,height=900,resizable=yes,scrollbars=yes');
};

// Global function for opening editor with specific practice
window.openEditorWithPractice = function(practiceType) {
    const editorUrl = `editor.html?practice=${practiceType}`;
    window.open(editorUrl, '_blank', 'width=1400,height=900,resizable=yes,scrollbars=yes');
};

window.showEditorFeatures = function() {
    const features = `
DevLearn Code Editor Features:

🚀 Multi-Language Support
• HTML, CSS, JavaScript, Python
• Syntax highlighting for all languages
• Auto-completion and error detection

⚡ Live Preview
• Real-time code execution
• Instant visual feedback
• Responsive preview panel

💾 Project Management
• Save and load your projects
• Local storage for persistence
• Export your code

🎨 Professional Interface
• Clean, modern design
• Full-screen coding experience
• Keyboard shortcuts support

🐍 Python Execution
• Run Python code in the browser
• No server required
• Full Python standard library support
    `;
    
    alert(features);
};

let practiceEnv;

document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for CodeMirror to load
    setTimeout(() => {
        practiceEnv = new PracticeEnvironment();
        window.practiceEnv = practiceEnv;
        console.log('Practice Environment initialized!');
    }, 500);
});

// Global functions for buttons
function loadChallenge(challengeName) {
    if (window.practiceEnv) {
        window.practiceEnv.loadChallenge(challengeName);
    } else {
        console.error('Practice environment not initialized yet');
    }
}

function loadTemplate(templateName) {
    if (window.practiceEnv) {
        window.practiceEnv.loadTemplate(templateName);
    } else {
        console.error('Practice environment not initialized yet');
    }
}

function openTemplateEditor(templateName) {
    const editorUrl = `editor.html?template=${templateName}`;
    window.open(editorUrl, '_blank', 'width=1400,height=900,resizable=yes,scrollbars=yes');
}

