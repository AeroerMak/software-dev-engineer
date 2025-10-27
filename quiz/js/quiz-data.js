// ===================================
// CS Q&A Examination System - Question Database
// ===================================

class QuizData {
    constructor() {
        this.questions = {
            fundamentals: this.getFundamentalsQuestions(),
            intermediate: this.getIntermediateQuestions(),
            advanced: this.getAdvancedQuestions(),
            'software-dev': this.getSoftwareDevQuestions()
        };
    }

    getQuestions(level) {
        return this.questions[level] || [];
    }

    // ===================================
    // Fundamentals Questions (60 questions)
    // ===================================
    
    getFundamentalsQuestions() {
        return [
            {
                id: 1,
                question: "What is the correct way to declare a variable in JavaScript?",
                options: [
                    "var name = 'John';",
                    "variable name = 'John';",
                    "v name = 'John';",
                    "declare name = 'John';"
                ],
                correctAnswer: "A",
                explanation: "In JavaScript, variables are declared using the 'var', 'let', or 'const' keyword followed by the variable name and assignment operator."
            },
            {
                id: 2,
                question: "What does CSS stand for?",
                options: [
                    "Computer Style Sheets",
                    "Cascading Style Sheets",
                    "Creative Style Sheets",
                    "Colorful Style Sheets"
                ],
                correctAnswer: "B",
                explanation: "CSS stands for Cascading Style Sheets. It's a stylesheet language used to describe the presentation of a document written in HTML."
            },
            {
                id: 3,
                question: "Which of the following is NOT a programming language?",
                options: [
                    "Python",
                    "JavaScript",
                    "HTML",
                    "Java"
                ],
                correctAnswer: "C",
                explanation: "HTML (HyperText Markup Language) is a markup language used to structure content on web pages, not a programming language. Python, JavaScript, and Java are all programming languages."
            },
            {
                id: 4,
                question: "What is the purpose of the <head> tag in HTML?",
                options: [
                    "To display the main content",
                    "To contain metadata about the document",
                    "To create a header section",
                    "To link external files"
                ],
                correctAnswer: "B",
                explanation: "The <head> tag contains metadata about the HTML document, including title, meta tags, links to stylesheets, and scripts. It's not displayed on the page itself."
            },
            {
                id: 5,
                question: "Which CSS property is used to change the text color?",
                options: [
                    "text-color",
                    "font-color",
                    "color",
                    "text-style"
                ],
                correctAnswer: "C",
                explanation: "The 'color' property in CSS is used to set the color of text. It can accept color names, hex codes, RGB values, or HSL values."
            },
            {
                id: 6,
                question: "What is the result of 5 + 3 in JavaScript?",
                options: [
                    "8",
                    "53",
                    "Error",
                    "undefined"
                ],
                correctAnswer: "A",
                explanation: "In JavaScript, the + operator performs addition when both operands are numbers, so 5 + 3 equals 8."
            },
            {
                id: 7,
                question: "Which HTML tag is used to create an unordered list?",
                options: [
                    "<ol>",
                    "<ul>",
                    "<li>",
                    "<list>"
                ],
                correctAnswer: "B",
                explanation: "The <ul> tag creates an unordered list (bullet points), while <ol> creates an ordered list (numbered). <li> is used for individual list items."
            },
            {
                id: 8,
                question: "What does the 'console.log()' function do in JavaScript?",
                options: [
                    "Creates a log file",
                    "Displays output in the browser console",
                    "Writes to a database",
                    "Sends data to a server"
                ],
                correctAnswer: "B",
                explanation: "console.log() is a JavaScript function that outputs information to the browser's developer console, commonly used for debugging and testing."
            },
            {
                id: 9,
                question: "Which CSS property is used to add space between elements?",
                options: [
                    "spacing",
                    "margin",
                    "distance",
                    "gap"
                ],
                correctAnswer: "B",
                explanation: "The 'margin' property in CSS is used to create space around elements. It can be set for all sides or individual sides (top, right, bottom, left)."
            },
            {
                id: 10,
                question: "What is the correct syntax for a JavaScript function?",
                options: [
                    "function myFunction() {}",
                    "def myFunction() {}",
                    "func myFunction() {}",
                    "method myFunction() {}"
                ],
                correctAnswer: "A",
                explanation: "In JavaScript, functions are declared using the 'function' keyword followed by the function name and parentheses. The function body is enclosed in curly braces."
            },
            {
                id: 11,
                question: "Which HTML attribute is used to specify the source of an image?",
                options: [
                    "source",
                    "src",
                    "link",
                    "href"
                ],
                correctAnswer: "B",
                explanation: "The 'src' attribute in the <img> tag specifies the URL or path to the image file that should be displayed."
            },
            {
                id: 12,
                question: "What is the purpose of the <div> tag in HTML?",
                options: [
                    "To create a division or section",
                    "To display text",
                    "To create a table",
                    "To add styling"
                ],
                correctAnswer: "A",
                explanation: "The <div> tag is a container element used to group other HTML elements together. It's commonly used for layout and styling purposes."
            },
            {
                id: 13,
                question: "Which CSS property is used to make text bold?",
                options: [
                    "text-weight",
                    "font-weight",
                    "bold",
                    "text-style"
                ],
                correctAnswer: "B",
                explanation: "The 'font-weight' property in CSS is used to set the thickness of the font. Values include 'normal', 'bold', or numeric values like 400, 700, etc."
            },
            {
                id: 14,
                question: "What is the correct way to write a comment in JavaScript?",
                options: [
                    "// This is a comment",
                    "<!-- This is a comment -->",
                    "/* This is a comment */",
                    "Both A and C"
                ],
                correctAnswer: "D",
                explanation: "JavaScript supports both single-line comments (//) and multi-line comments (/* */). HTML uses <!-- --> for comments."
            },
            {
                id: 15,
                question: "Which HTML tag is used to create a table row?",
                options: [
                    "<table>",
                    "<tr>",
                    "<td>",
                    "<row>"
                ],
                correctAnswer: "B",
                explanation: "The <tr> tag creates a table row in HTML. <table> creates the table, <tr> creates rows, and <td> creates individual cells."
            },
            {
                id: 16,
                question: "What does the 'alert()' function do in JavaScript?",
                options: [
                    "Creates a warning message",
                    "Displays a popup dialog box",
                    "Logs information to console",
                    "Sends an email notification"
                ],
                correctAnswer: "B",
                explanation: "The alert() function in JavaScript displays a popup dialog box with a message and an OK button. It's commonly used for notifications and debugging."
            },
            {
                id: 17,
                question: "Which CSS property is used to change the background color?",
                options: [
                    "background-color",
                    "bg-color",
                    "color-background",
                    "background"
                ],
                correctAnswer: "A",
                explanation: "The 'background-color' property in CSS is used to set the background color of an element. It can accept color names, hex codes, RGB, or HSL values."
            },
            {
                id: 18,
                question: "What is the purpose of the <title> tag in HTML?",
                options: [
                    "To display a heading on the page",
                    "To set the page title in the browser tab",
                    "To create a navigation menu",
                    "To add styling to text"
                ],
                correctAnswer: "B",
                explanation: "The <title> tag sets the title of the HTML document, which appears in the browser tab, bookmarks, and search engine results."
            },
            {
                id: 19,
                question: "Which JavaScript operator is used for comparison?",
                options: [
                    "=",
                    "==",
                    "===",
                    "Both B and C"
                ],
                correctAnswer: "D",
                explanation: "JavaScript has two comparison operators: '==' (loose equality) and '===' (strict equality). The single '=' is for assignment, not comparison."
            },
            {
                id: 20,
                question: "What is the purpose of the <meta> tag in HTML?",
                options: [
                    "To create metadata about the document",
                    "To display text on the page",
                    "To create a navigation menu",
                    "To add styling to elements"
                ],
                correctAnswer: "A",
                explanation: "The <meta> tag provides metadata about the HTML document, including character encoding, viewport settings, descriptions, and keywords for SEO."
            },
            {
                id: 21,
                question: "Which CSS property is used to control the spacing between letters?",
                options: [
                    "letter-spacing",
                    "word-spacing",
                    "line-height",
                    "text-spacing"
                ],
                correctAnswer: "A",
                explanation: "The 'letter-spacing' property in CSS controls the spacing between individual characters in text."
            },
            {
                id: 22,
                question: "What is the correct way to create an array in JavaScript?",
                options: [
                    "var arr = new Array();",
                    "var arr = [];",
                    "Both A and B",
                    "var arr = array();"
                ],
                correctAnswer: "C",
                explanation: "Arrays can be created using either 'new Array()' constructor or the literal syntax '[]'. Both methods are valid."
            },
            {
                id: 23,
                question: "Which HTML tag is used to create a line break?",
                options: [
                    "<br>",
                    "<break>",
                    "<line>",
                    "<lb>"
                ],
                correctAnswer: "A",
                explanation: "The <br> tag creates a line break in HTML. It's a self-closing tag that forces text to start on a new line."
            },
            {
                id: 24,
                question: "What does the 'display: none' CSS property do?",
                options: [
                    "Hides the element completely",
                    "Makes the element transparent",
                    "Moves the element off-screen",
                    "Reduces the element's opacity"
                ],
                correctAnswer: "A",
                explanation: "'display: none' completely removes the element from the document flow, making it invisible and taking up no space."
            },
            {
                id: 25,
                question: "Which JavaScript method is used to add an element to the end of an array?",
                options: [
                    "push()",
                    "add()",
                    "append()",
                    "insert()"
                ],
                correctAnswer: "A",
                explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array."
            },
            {
                id: 26,
                question: "What is the purpose of the <form> tag in HTML?",
                options: [
                    "To create a table",
                    "To group form elements for submission",
                    "To display text",
                    "To create a navigation menu"
                ],
                correctAnswer: "B",
                explanation: "The <form> tag is used to create an HTML form for user input and to group form elements that will be submitted together."
            },
            {
                id: 27,
                question: "Which CSS property is used to make text italic?",
                options: [
                    "font-style: italic",
                    "text-style: italic",
                    "font-weight: italic",
                    "text-decoration: italic"
                ],
                correctAnswer: "A",
                explanation: "The 'font-style: italic' property in CSS makes text appear in italic style."
            },
            {
                id: 28,
                question: "What does the 'typeof' operator return for an array?",
                options: [
                    "'array'",
                    "'object'",
                    "'list'",
                    "'Array'"
                ],
                correctAnswer: "B",
                explanation: "In JavaScript, arrays are objects, so typeof returns 'object' for arrays. To check if something is an array, use Array.isArray()."
            },
            {
                id: 29,
                question: "Which HTML attribute is used to make an input field required?",
                options: [
                    "mandatory",
                    "required",
                    "must",
                    "needed"
                ],
                correctAnswer: "B",
                explanation: "The 'required' attribute in HTML makes an input field mandatory, preventing form submission if the field is empty."
            },
            {
                id: 30,
                question: "What is the purpose of the 'box-sizing: border-box' CSS property?",
                options: [
                    "To add borders to elements",
                    "To include padding and border in element's total width",
                    "To create box shadows",
                    "To control element positioning"
                ],
                correctAnswer: "B",
                explanation: "'box-sizing: border-box' includes padding and border in the element's total width and height, making layout calculations more predictable."
            },
            {
                id: 31,
                question: "Which JavaScript method is used to remove the last element from an array?",
                options: [
                    "remove()",
                    "pop()",
                    "delete()",
                    "shift()"
                ],
                correctAnswer: "B",
                explanation: "The pop() method removes the last element from an array and returns that element."
            },
            {
                id: 32,
                question: "What is the purpose of the <nav> tag in HTML5?",
                options: [
                    "To create navigation links",
                    "To display text",
                    "To create a table",
                    "To add styling"
                ],
                correctAnswer: "A",
                explanation: "The <nav> tag in HTML5 is a semantic element used to define a section of navigation links."
            },
            {
                id: 33,
                question: "Which CSS property is used to control the order of flex items?",
                options: [
                    "flex-order",
                    "order",
                    "flex-direction",
                    "flex-sort"
                ],
                correctAnswer: "B",
                explanation: "The 'order' property in CSS Flexbox controls the order in which flex items appear in the flex container."
            },
            {
                id: 34,
                question: "What is the result of '5' + 3 in JavaScript?",
                options: [
                    "8",
                    "53",
                    "Error",
                    "undefined"
                ],
                correctAnswer: "B",
                explanation: "When using the + operator with a string and number, JavaScript converts the number to a string and concatenates them, resulting in '53'."
            },
            {
                id: 35,
                question: "Which HTML tag is used to create a definition list?",
                options: [
                    "<dl>",
                    "<list>",
                    "<def>",
                    "<definition>"
                ],
                correctAnswer: "A",
                explanation: "The <dl> tag creates a definition list, used with <dt> (definition term) and <dd> (definition description) tags."
            },
            {
                id: 36,
                question: "What is the purpose of the 'z-index' CSS property?",
                options: [
                    "To control element width",
                    "To control element height",
                    "To control element stacking order",
                    "To control element color"
                ],
                correctAnswer: "C",
                explanation: "The 'z-index' property controls the stacking order of positioned elements. Higher values appear in front of lower values."
            },
            {
                id: 37,
                question: "Which JavaScript method is used to find the length of a string?",
                options: [
                    "length()",
                    ".length",
                    "size()",
                    "count()"
                ],
                correctAnswer: "B",
                explanation: "The '.length' property (not method) returns the number of characters in a string."
            },
            {
                id: 38,
                question: "What is the purpose of the <section> tag in HTML5?",
                options: [
                    "To create a table section",
                    "To define a thematic grouping of content",
                    "To display text",
                    "To create a navigation menu"
                ],
                correctAnswer: "B",
                explanation: "The <section> tag in HTML5 is a semantic element used to define a thematic grouping of content, such as chapters or topics."
            },
            {
                id: 39,
                question: "Which CSS property is used to create rounded corners?",
                options: [
                    "border-radius",
                    "corner-radius",
                    "round-corners",
                    "border-round"
                ],
                correctAnswer: "A",
                explanation: "The 'border-radius' property in CSS creates rounded corners on elements."
            },
            {
                id: 40,
                question: "What is the purpose of the 'use strict' directive in JavaScript?",
                options: [
                    "To make code run faster",
                    "To enable strict mode for better error checking",
                    "To import external libraries",
                    "To create private variables"
                ],
                correctAnswer: "B",
                explanation: "'use strict' enables strict mode in JavaScript, which catches common coding mistakes and prevents certain unsafe actions."
            },
            {
                id: 41,
                question: "Which HTML tag is used to create a table header cell?",
                options: [
                    "<th>",
                    "<header>",
                    "<td>",
                    "<head>"
                ],
                correctAnswer: "A",
                explanation: "The <th> tag creates a table header cell, which is typically used in the first row of a table to label columns."
            },
            {
                id: 42,
                question: "What is the purpose of the 'position: absolute' CSS property?",
                options: [
                    "To position elements relative to their parent",
                    "To position elements relative to the document",
                    "To position elements relative to the viewport",
                    "To position elements relative to the nearest positioned ancestor"
                ],
                correctAnswer: "D",
                explanation: "'position: absolute' positions elements relative to the nearest positioned ancestor (or the document if none exists)."
            },
            {
                id: 43,
                question: "Which JavaScript method is used to convert a string to uppercase?",
                options: [
                    "toUpperCase()",
                    "upperCase()",
                    "toUpper()",
                    "uppercase()"
                ],
                correctAnswer: "A",
                explanation: "The toUpperCase() method converts a string to uppercase letters."
            },
            {
                id: 44,
                question: "What is the purpose of the <article> tag in HTML5?",
                options: [
                    "To create a table",
                    "To define independent, self-contained content",
                    "To display text",
                    "To create a navigation menu"
                ],
                correctAnswer: "B",
                explanation: "The <article> tag in HTML5 defines independent, self-contained content that could be distributed or reused."
            },
            {
                id: 45,
                question: "Which CSS property is used to control text alignment?",
                options: [
                    "text-align",
                    "align-text",
                    "text-justify",
                    "align"
                ],
                correctAnswer: "A",
                explanation: "The 'text-align' property in CSS controls the horizontal alignment of text within its container."
            },
            {
                id: 46,
                question: "What is the purpose of the 'parseInt()' function in JavaScript?",
                options: [
                    "To parse JSON strings",
                    "To convert a string to an integer",
                    "To parse HTML",
                    "To convert an integer to a string"
                ],
                correctAnswer: "B",
                explanation: "The parseInt() function parses a string and returns an integer."
            },
            {
                id: 47,
                question: "Which HTML tag is used to create a horizontal rule?",
                options: [
                    "<hr>",
                    "<line>",
                    "<rule>",
                    "<horizontal>"
                ],
                correctAnswer: "A",
                explanation: "The <hr> tag creates a horizontal rule (line) that can be used to separate content sections."
            },
            {
                id: 48,
                question: "What is the purpose of the 'float' CSS property?",
                options: [
                    "To make elements float in the air",
                    "To position elements to the left or right",
                    "To create animations",
                    "To control element transparency"
                ],
                correctAnswer: "B",
                explanation: "The 'float' property positions elements to the left or right side of their container, allowing other content to flow around them."
            },
            {
                id: 49,
                question: "Which JavaScript method is used to join array elements into a string?",
                options: [
                    "join()",
                    "concat()",
                    "merge()",
                    "combine()"
                ],
                correctAnswer: "A",
                explanation: "The join() method joins all elements of an array into a string, with an optional separator between elements."
            },
            {
                id: 50,
                question: "What is the purpose of the <aside> tag in HTML5?",
                options: [
                    "To create a table",
                    "To define content aside from the main content",
                    "To display text",
                    "To create a navigation menu"
                ],
                correctAnswer: "B",
                explanation: "The <aside> tag in HTML5 defines content aside from the main content, such as sidebars or call-out boxes."
            },
            {
                id: 51,
                question: "Which CSS property is used to control the space between lines of text?",
                options: [
                    "line-height",
                    "text-spacing",
                    "line-spacing",
                    "text-height"
                ],
                correctAnswer: "A",
                explanation: "The 'line-height' property in CSS controls the vertical space between lines of text."
            },
            {
                id: 52,
                question: "What is the purpose of the 'isNaN()' function in JavaScript?",
                options: [
                    "To check if a value is a number",
                    "To check if a value is not a number",
                    "To convert a value to a number",
                    "To round a number"
                ],
                correctAnswer: "B",
                explanation: "The isNaN() function determines whether a value is NaN (Not a Number). It returns true if the value is NaN."
            },
            {
                id: 53,
                question: "Which HTML tag is used to create a button?",
                options: [
                    "<button>",
                    "<btn>",
                    "<click>",
                    "<input type='button'>"
                ],
                correctAnswer: "A",
                explanation: "The <button> tag creates a clickable button element. Both <button> and <input type='button'> are valid, but <button> is more semantic."
            },
            {
                id: 54,
                question: "What is the purpose of the 'clear' CSS property?",
                options: [
                    "To clear element content",
                    "To control how elements behave after floated elements",
                    "To clear browser cache",
                    "To clear form data"
                ],
                correctAnswer: "B",
                explanation: "The 'clear' property controls how elements behave after floated elements, preventing them from wrapping around floated content."
            },
            {
                id: 55,
                question: "Which JavaScript method is used to find the index of an element in an array?",
                options: [
                    "indexOf()",
                    "findIndex()",
                    "Both A and B",
                    "search()"
                ],
                correctAnswer: "C",
                explanation: "Both indexOf() and findIndex() can find element indices. indexOf() finds the first occurrence, while findIndex() uses a callback function."
            },
            {
                id: 56,
                question: "What is the purpose of the <footer> tag in HTML5?",
                options: [
                    "To create a table footer",
                    "To define a footer for a document or section",
                    "To display text",
                    "To create a navigation menu"
                ],
                correctAnswer: "B",
                explanation: "The <footer> tag in HTML5 defines a footer for a document or section, typically containing copyright information, contact details, or links."
            },
            {
                id: 57,
                question: "Which CSS property is used to control element visibility?",
                options: [
                    "visibility",
                    "display",
                    "opacity",
                    "All of the above"
                ],
                correctAnswer: "D",
                explanation: "All three properties control visibility: 'visibility' (hidden/visible), 'display' (none/block), and 'opacity' (transparency)."
            },
            {
                id: 58,
                question: "What is the purpose of the 'Math.random()' function in JavaScript?",
                options: [
                    "To generate a random number between 0 and 1",
                    "To generate a random integer",
                    "To generate a random string",
                    "To generate a random color"
                ],
                correctAnswer: "A",
                explanation: "Math.random() generates a pseudo-random number between 0 (inclusive) and 1 (exclusive)."
            },
            {
                id: 59,
                question: "Which HTML tag is used to create a link to an email address?",
                options: [
                    "<a href='mailto:email@example.com'>",
                    "<email>",
                    "<mail>",
                    "<link type='email'>"
                ],
                correctAnswer: "A",
                explanation: "The <a> tag with href='mailto:email@example.com' creates a link that opens the user's email client when clicked."
            },
            {
                id: 60,
                question: "What is the purpose of the 'transform' CSS property?",
                options: [
                    "To change element colors",
                    "To apply 2D or 3D transformations to elements",
                    "To change element fonts",
                    "To create animations"
                ],
                correctAnswer: "B",
                explanation: "The 'transform' property applies 2D or 3D transformations to elements, such as rotate, scale, translate, or skew."
            }
        ];
    }

    // ===================================
    // Intermediate Questions (80 questions)
    // ===================================
    
    getIntermediateQuestions() {
        return [
            {
                id: 1,
                question: "What is the time complexity of binary search?",
                options: [
                    "O(n)",
                    "O(log n)",
                    "O(n²)",
                    "O(1)"
                ],
                correctAnswer: "B",
                explanation: "Binary search has O(log n) time complexity because it eliminates half of the search space with each comparison, making it very efficient for sorted arrays."
            },
            {
                id: 2,
                question: "Which design pattern is used to ensure only one instance of a class exists?",
                options: [
                    "Factory Pattern",
                    "Observer Pattern",
                    "Singleton Pattern",
                    "Builder Pattern"
                ],
                correctAnswer: "C",
                explanation: "The Singleton pattern ensures that a class has only one instance and provides global access to that instance. It's commonly used for database connections, logging, and configuration objects."
            },
            {
                id: 3,
                question: "What is the purpose of a foreign key in a database?",
                options: [
                    "To uniquely identify a record",
                    "To create a relationship between tables",
                    "To encrypt data",
                    "To improve query performance"
                ],
                correctAnswer: "B",
                explanation: "A foreign key is a column or set of columns that references the primary key of another table, establishing a relationship between the two tables and maintaining referential integrity."
            },
            {
                id: 4,
                question: "Which HTTP method is used to create a new resource?",
                options: [
                    "GET",
                    "POST",
                    "PUT",
                    "DELETE"
                ],
                correctAnswer: "B",
                explanation: "POST is used to create new resources on the server. GET retrieves data, PUT updates existing resources, and DELETE removes resources."
            },
            {
                id: 5,
                question: "What is the difference between 'let' and 'var' in JavaScript?",
                options: [
                    "No difference",
                    "'let' has block scope, 'var' has function scope",
                    "'var' is faster than 'let'",
                    "'let' can only be used in loops"
                ],
                correctAnswer: "B",
                explanation: "The main difference is scoping: 'let' has block scope (limited to the block where it's declared), while 'var' has function scope (accessible throughout the entire function)."
            },
            {
                id: 6,
                question: "Which data structure follows LIFO (Last In, First Out) principle?",
                options: [
                    "Queue",
                    "Stack",
                    "Array",
                    "Linked List"
                ],
                correctAnswer: "B",
                explanation: "A stack follows the LIFO principle where the last element added is the first one to be removed. It's commonly used in function calls, expression evaluation, and undo operations."
            },
            {
                id: 7,
                question: "What is the purpose of the 'use strict' directive in JavaScript?",
                options: [
                    "To make code run faster",
                    "To enable strict mode for better error checking",
                    "To import external libraries",
                    "To create private variables"
                ],
                correctAnswer: "B",
                explanation: "'use strict' enables strict mode in JavaScript, which catches common coding mistakes and prevents certain unsafe actions, making code more secure and easier to debug."
            },
            {
                id: 8,
                question: "Which algorithm is used to find the shortest path in a weighted graph?",
                options: [
                    "Breadth-First Search",
                    "Depth-First Search",
                    "Dijkstra's Algorithm",
                    "Binary Search"
                ],
                correctAnswer: "C",
                explanation: "Dijkstra's algorithm is used to find the shortest path between nodes in a weighted graph. It's widely used in GPS navigation, network routing, and social media algorithms."
            },
            {
                id: 9,
                question: "What is the purpose of the 'async/await' keywords in JavaScript?",
                options: [
                    "To create synchronous code",
                    "To handle asynchronous operations more elegantly",
                    "To improve performance",
                    "To create loops"
                ],
                correctAnswer: "B",
                explanation: "async/await provides a cleaner way to handle asynchronous operations in JavaScript, making asynchronous code look and behave more like synchronous code while maintaining non-blocking behavior."
            },
            {
                id: 10,
                question: "Which database normalization form eliminates partial dependencies?",
                options: [
                    "1NF",
                    "2NF",
                    "3NF",
                    "BCNF"
                ],
                correctAnswer: "B",
                explanation: "Second Normal Form (2NF) eliminates partial dependencies by ensuring that all non-key attributes are fully functionally dependent on the primary key, not just part of it."
            },
            {
                id: 6,
                question: "What is the purpose of the 'use strict' directive in JavaScript?",
                options: [
                    "To make code run faster",
                    "To enable strict mode for better error checking",
                    "To import external libraries",
                    "To create private variables"
                ],
                correctAnswer: "B",
                explanation: "'use strict' enables strict mode in JavaScript, which catches common coding mistakes and prevents certain unsafe actions."
            },
            {
                id: 7,
                question: "What is the difference between 'let' and 'var' in JavaScript?",
                options: [
                    "No difference, they are identical",
                    "'let' has block scope, 'var' has function scope",
                    "'var' has block scope, 'let' has function scope",
                    "'let' is only for arrays, 'var' is for variables"
                ],
                correctAnswer: "B",
                explanation: "'let' has block scope (limited to the block where it's declared), while 'var' has function scope (accessible throughout the entire function)."
            },
            {
                id: 8,
                question: "What is the purpose of the 'const' keyword in JavaScript?",
                options: [
                    "To create constant values that cannot be reassigned",
                    "To create constant functions",
                    "To create constant objects",
                    "To create constant arrays"
                ],
                correctAnswer: "A",
                explanation: "The 'const' keyword creates a constant reference to a value, meaning the variable cannot be reassigned, though the value itself may be mutable."
            },
            {
                id: 9,
                question: "What is the purpose of the 'this' keyword in JavaScript?",
                options: [
                    "To refer to the current object",
                    "To refer to the parent object",
                    "To refer to the global object",
                    "To refer to the window object"
                ],
                correctAnswer: "A",
                explanation: "The 'this' keyword refers to the object that is currently executing the function, providing context for the current execution."
            },
            {
                id: 10,
                question: "What is the purpose of the 'bind()' method in JavaScript?",
                options: [
                    "To bind event listeners",
                    "To create a new function with a specific 'this' value",
                    "To bind data to elements",
                    "To bind functions to objects"
                ],
                correctAnswer: "B",
                explanation: "The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value."
            },
            {
                id: 11,
                question: "What is the purpose of the 'call()' method in JavaScript?",
                options: [
                    "To call a function with a specific 'this' value",
                    "To call a function with arguments",
                    "To call a function asynchronously",
                    "To call a function with a delay"
                ],
                correctAnswer: "A",
                explanation: "The call() method calls a function with a given 'this' value and arguments provided individually."
            },
            {
                id: 12,
                question: "What is the purpose of the 'apply()' method in JavaScript?",
                options: [
                    "To apply CSS styles",
                    "To call a function with a specific 'this' value and arguments as an array",
                    "To apply transformations to elements",
                    "To apply event listeners"
                ],
                correctAnswer: "B",
                explanation: "The apply() method calls a function with a given 'this' value and arguments provided as an array."
            },
            {
                id: 13,
                question: "What is the purpose of the 'map()' method in JavaScript?",
                options: [
                    "To create a map of elements",
                    "To transform each element in an array and return a new array",
                    "To find elements in an array",
                    "To sort elements in an array"
                ],
                correctAnswer: "B",
                explanation: "The map() method creates a new array with the results of calling a provided function on every element in the calling array."
            },
            {
                id: 14,
                question: "What is the purpose of the 'filter()' method in JavaScript?",
                options: [
                    "To filter out elements from an array",
                    "To create a new array with elements that pass a test",
                    "To sort elements in an array",
                    "To find elements in an array"
                ],
                correctAnswer: "B",
                explanation: "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
            },
            {
                id: 15,
                question: "What is the purpose of the 'reduce()' method in JavaScript?",
                options: [
                    "To reduce the size of an array",
                    "To reduce an array to a single value",
                    "To reduce the number of elements in an array",
                    "To reduce the complexity of an array"
                ],
                correctAnswer: "B",
                explanation: "The reduce() method executes a reducer function on each element of the array, resulting in a single output value."
            },
            {
                id: 16,
                question: "What is the purpose of the 'forEach()' method in JavaScript?",
                options: [
                    "To iterate over array elements and execute a function for each",
                    "To create a new array",
                    "To filter array elements",
                    "To sort array elements"
                ],
                correctAnswer: "A",
                explanation: "The forEach() method executes a provided function once for each array element."
            },
            {
                id: 17,
                question: "What is the purpose of the 'find()' method in JavaScript?",
                options: [
                    "To find all elements in an array",
                    "To find the first element that satisfies a condition",
                    "To find the last element in an array",
                    "To find elements by index"
                ],
                correctAnswer: "B",
                explanation: "The find() method returns the first element in the array that satisfies the provided testing function."
            },
            {
                id: 18,
                question: "What is the purpose of the 'some()' method in JavaScript?",
                options: [
                    "To check if some elements exist in an array",
                    "To check if at least one element satisfies a condition",
                    "To check if all elements satisfy a condition",
                    "To check if no elements satisfy a condition"
                ],
                correctAnswer: "B",
                explanation: "The some() method tests whether at least one element in the array passes the test implemented by the provided function."
            },
            {
                id: 19,
                question: "What is the purpose of the 'every()' method in JavaScript?",
                options: [
                    "To check if every element exists in an array",
                    "To check if all elements satisfy a condition",
                    "To check if at least one element satisfies a condition",
                    "To check if no elements satisfy a condition"
                ],
                correctAnswer: "B",
                explanation: "The every() method tests whether all elements in the array pass the test implemented by the provided function."
            },
            {
                id: 20,
                question: "What is the purpose of the 'includes()' method in JavaScript?",
                options: [
                    "To include elements in an array",
                    "To check if an array includes a certain element",
                    "To include functions in an array",
                    "To include objects in an array"
                ],
                correctAnswer: "B",
                explanation: "The includes() method determines whether an array includes a certain value among its entries."
            },
            {
                id: 21,
                question: "What is the purpose of the 'indexOf()' method in JavaScript?",
                options: [
                    "To find the index of an element in an array",
                    "To find the value at a specific index",
                    "To find the length of an array",
                    "To find the last element in an array"
                ],
                correctAnswer: "A",
                explanation: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."
            },
            {
                id: 22,
                question: "What is the purpose of the 'lastIndexOf()' method in JavaScript?",
                options: [
                    "To find the last index of an element in an array",
                    "To find the first index of an element in an array",
                    "To find the middle index of an array",
                    "To find the length of an array"
                ],
                correctAnswer: "A",
                explanation: "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present."
            },
            {
                id: 23,
                question: "What is the purpose of the 'slice()' method in JavaScript?",
                options: [
                    "To slice elements from an array",
                    "To create a shallow copy of a portion of an array",
                    "To slice strings",
                    "To slice objects"
                ],
                correctAnswer: "B",
                explanation: "The slice() method returns a shallow copy of a portion of an array into a new array object."
            },
            {
                id: 24,
                question: "What is the purpose of the 'splice()' method in JavaScript?",
                options: [
                    "To splice elements into an array",
                    "To change the contents of an array by removing or replacing existing elements",
                    "To splice strings",
                    "To splice objects"
                ],
                correctAnswer: "B",
                explanation: "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements."
            },
            {
                id: 25,
                question: "What is the purpose of the 'concat()' method in JavaScript?",
                options: [
                    "To concatenate strings",
                    "To merge two or more arrays",
                    "To concatenate objects",
                    "To concatenate functions"
                ],
                correctAnswer: "B",
                explanation: "The concat() method is used to merge two or more arrays, returning a new array without modifying the existing arrays."
            },
            {
                id: 26,
                question: "What is the purpose of the 'reverse()' method in JavaScript?",
                options: [
                    "To reverse the order of elements in an array",
                    "To reverse strings",
                    "To reverse objects",
                    "To reverse functions"
                ],
                correctAnswer: "A",
                explanation: "The reverse() method reverses the order of the elements in an array in place."
            },
            {
                id: 27,
                question: "What is the purpose of the 'sort()' method in JavaScript?",
                options: [
                    "To sort elements in an array",
                    "To sort strings",
                    "To sort objects",
                    "To sort functions"
                ],
                correctAnswer: "A",
                explanation: "The sort() method sorts the elements of an array in place and returns the sorted array."
            },
            {
                id: 28,
                question: "What is the purpose of the 'toString()' method in JavaScript?",
                options: [
                    "To convert a value to a string",
                    "To convert a string to a number",
                    "To convert a number to a string",
                    "To convert an object to a string"
                ],
                correctAnswer: "A",
                explanation: "The toString() method returns a string representing the object."
            },
            {
                id: 29,
                question: "What is the purpose of the 'valueOf()' method in JavaScript?",
                options: [
                    "To get the primitive value of an object",
                    "To get the string value of an object",
                    "To get the number value of an object",
                    "To get the boolean value of an object"
                ],
                correctAnswer: "A",
                explanation: "The valueOf() method returns the primitive value of the specified object."
            },
            {
                id: 30,
                question: "What is the purpose of the 'hasOwnProperty()' method in JavaScript?",
                options: [
                    "To check if an object has a specific property",
                    "To add a property to an object",
                    "To remove a property from an object",
                    "To get the value of a property"
                ],
                correctAnswer: "A",
                explanation: "The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property."
            },
            {
                id: 31,
                question: "What is the purpose of the 'propertyIsEnumerable()' method in JavaScript?",
                options: [
                    "To check if a property is enumerable",
                    "To make a property enumerable",
                    "To make a property non-enumerable",
                    "To get the value of a property"
                ],
                correctAnswer: "A",
                explanation: "The propertyIsEnumerable() method returns a boolean indicating whether the specified property is enumerable."
            },
            {
                id: 32,
                question: "What is the purpose of the 'isPrototypeOf()' method in JavaScript?",
                options: [
                    "To check if an object is a prototype of another object",
                    "To create a prototype",
                    "To get the prototype of an object",
                    "To set the prototype of an object"
                ],
                correctAnswer: "A",
                explanation: "The isPrototypeOf() method tests whether an object exists in another object's prototype chain."
            },
            {
                id: 33,
                question: "What is the purpose of the 'getPrototypeOf()' method in JavaScript?",
                options: [
                    "To get the prototype of an object",
                    "To set the prototype of an object",
                    "To check if an object has a prototype",
                    "To create a prototype"
                ],
                correctAnswer: "A",
                explanation: "The getPrototypeOf() method returns the prototype of the specified object."
            },
            {
                id: 34,
                question: "What is the purpose of the 'setPrototypeOf()' method in JavaScript?",
                options: [
                    "To set the prototype of an object",
                    "To get the prototype of an object",
                    "To check if an object has a prototype",
                    "To create a prototype"
                ],
                correctAnswer: "A",
                explanation: "The setPrototypeOf() method sets the prototype of a specified object to another object or null."
            },
            {
                id: 35,
                question: "What is the purpose of the 'Object.create()' method in JavaScript?",
                options: [
                    "To create a new object with a specified prototype",
                    "To create a new object without a prototype",
                    "To create a new object with a specific constructor",
                    "To create a new object with a specific type"
                ],
                correctAnswer: "A",
                explanation: "The Object.create() method creates a new object with the specified prototype object and properties."
            },
            {
                id: 36,
                question: "What is the purpose of the 'Object.assign()' method in JavaScript?",
                options: [
                    "To assign values to an object",
                    "To copy all enumerable own properties from source objects to a target object",
                    "To create a new object",
                    "To delete properties from an object"
                ],
                correctAnswer: "B",
                explanation: "The Object.assign() method copies all enumerable own properties from one or more source objects to a target object."
            },
            {
                id: 37,
                question: "What is the purpose of the 'Object.keys()' method in JavaScript?",
                options: [
                    "To get the keys of an object",
                    "To set the keys of an object",
                    "To delete the keys of an object",
                    "To create the keys of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.keys() method returns an array of a given object's own enumerable property names."
            },
            {
                id: 38,
                question: "What is the purpose of the 'Object.values()' method in JavaScript?",
                options: [
                    "To get the values of an object",
                    "To set the values of an object",
                    "To delete the values of an object",
                    "To create the values of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.values() method returns an array of a given object's own enumerable property values."
            },
            {
                id: 39,
                question: "What is the purpose of the 'Object.entries()' method in JavaScript?",
                options: [
                    "To get the entries of an object",
                    "To set the entries of an object",
                    "To delete the entries of an object",
                    "To create the entries of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs."
            },
            {
                id: 40,
                question: "What is the purpose of the 'Object.freeze()' method in JavaScript?",
                options: [
                    "To freeze an object",
                    "To make an object immutable",
                    "To make an object mutable",
                    "To create a frozen object"
                ],
                correctAnswer: "B",
                explanation: "The Object.freeze() method freezes an object, making it immutable and preventing new properties from being added to it."
            },
            {
                id: 41,
                question: "What is the purpose of the 'Object.seal()' method in JavaScript?",
                options: [
                    "To seal an object",
                    "To prevent new properties from being added to an object",
                    "To make an object mutable",
                    "To create a sealed object"
                ],
                correctAnswer: "B",
                explanation: "The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable."
            },
            {
                id: 42,
                question: "What is the purpose of the 'Object.preventExtensions()' method in JavaScript?",
                options: [
                    "To prevent extensions to an object",
                    "To prevent new properties from being added to an object",
                    "To make an object extensible",
                    "To create an extensible object"
                ],
                correctAnswer: "B",
                explanation: "The Object.preventExtensions() method prevents new properties from being added to an object."
            },
            {
                id: 43,
                question: "What is the purpose of the 'Object.isExtensible()' method in JavaScript?",
                options: [
                    "To check if an object is extensible",
                    "To make an object extensible",
                    "To prevent an object from being extensible",
                    "To create an extensible object"
                ],
                correctAnswer: "A",
                explanation: "The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it)."
            },
            {
                id: 44,
                question: "What is the purpose of the 'Object.isSealed()' method in JavaScript?",
                options: [
                    "To check if an object is sealed",
                    "To seal an object",
                    "To unseal an object",
                    "To create a sealed object"
                ],
                correctAnswer: "A",
                explanation: "The Object.isSealed() method determines if an object is sealed."
            },
            {
                id: 45,
                question: "What is the purpose of the 'Object.isFrozen()' method in JavaScript?",
                options: [
                    "To check if an object is frozen",
                    "To freeze an object",
                    "To unfreeze an object",
                    "To create a frozen object"
                ],
                correctAnswer: "A",
                explanation: "The Object.isFrozen() method determines if an object is frozen."
            },
            {
                id: 46,
                question: "What is the purpose of the 'Object.defineProperty()' method in JavaScript?",
                options: [
                    "To define a property on an object",
                    "To get a property from an object",
                    "To delete a property from an object",
                    "To create a property on an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object."
            },
            {
                id: 47,
                question: "What is the purpose of the 'Object.defineProperties()' method in JavaScript?",
                options: [
                    "To define multiple properties on an object",
                    "To get multiple properties from an object",
                    "To delete multiple properties from an object",
                    "To create multiple properties on an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object."
            },
            {
                id: 48,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptor()' method in JavaScript?",
                options: [
                    "To get the property descriptor of an object",
                    "To set the property descriptor of an object",
                    "To delete the property descriptor of an object",
                    "To create the property descriptor of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property of a given object."
            },
            {
                id: 49,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptors()' method in JavaScript?",
                options: [
                    "To get all property descriptors of an object",
                    "To set all property descriptors of an object",
                    "To delete all property descriptors of an object",
                    "To create all property descriptors of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object."
            },
            {
                id: 50,
                question: "What is the purpose of the 'Object.getOwnPropertyNames()' method in JavaScript?",
                options: [
                    "To get all property names of an object",
                    "To set all property names of an object",
                    "To delete all property names of an object",
                    "To create all property names of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties) found directly upon a given object."
            },
            {
                id: 51,
                question: "What is the purpose of the 'Object.getOwnPropertySymbols()' method in JavaScript?",
                options: [
                    "To get all symbol properties of an object",
                    "To set all symbol properties of an object",
                    "To delete all symbol properties of an object",
                    "To create all symbol properties of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object."
            },
            {
                id: 52,
                question: "What is the purpose of the 'Object.is()' method in JavaScript?",
                options: [
                    "To check if two values are the same",
                    "To check if two objects are equal",
                    "To check if two arrays are equal",
                    "To check if two functions are equal"
                ],
                correctAnswer: "A",
                explanation: "The Object.is() method determines whether two values are the same value."
            },
            {
                id: 53,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptor()' method in JavaScript?",
                options: [
                    "To get the property descriptor of an object",
                    "To set the property descriptor of an object",
                    "To delete the property descriptor of an object",
                    "To create the property descriptor of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property of a given object."
            },
            {
                id: 54,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptors()' method in JavaScript?",
                options: [
                    "To get all property descriptors of an object",
                    "To set all property descriptors of an object",
                    "To delete all property descriptors of an object",
                    "To create all property descriptors of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object."
            },
            {
                id: 55,
                question: "What is the purpose of the 'Object.getOwnPropertyNames()' method in JavaScript?",
                options: [
                    "To get all property names of an object",
                    "To set all property names of an object",
                    "To delete all property names of an object",
                    "To create all property names of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties) found directly upon a given object."
            },
            {
                id: 56,
                question: "What is the purpose of the 'Object.getOwnPropertySymbols()' method in JavaScript?",
                options: [
                    "To get all symbol properties of an object",
                    "To set all symbol properties of an object",
                    "To delete all symbol properties of an object",
                    "To create all symbol properties of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object."
            },
            {
                id: 57,
                question: "What is the purpose of the 'Object.is()' method in JavaScript?",
                options: [
                    "To check if two values are the same",
                    "To check if two objects are equal",
                    "To check if two arrays are equal",
                    "To check if two functions are equal"
                ],
                correctAnswer: "A",
                explanation: "The Object.is() method determines whether two values are the same value."
            },
            {
                id: 58,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptor()' method in JavaScript?",
                options: [
                    "To get the property descriptor of an object",
                    "To set the property descriptor of an object",
                    "To delete the property descriptor of an object",
                    "To create the property descriptor of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property of a given object."
            },
            {
                id: 59,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptors()' method in JavaScript?",
                options: [
                    "To get all property descriptors of an object",
                    "To set all property descriptors of an object",
                    "To delete all property descriptors of an object",
                    "To create all property descriptors of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object."
            },
            {
                id: 60,
                question: "What is the purpose of the 'Object.getOwnPropertyNames()' method in JavaScript?",
                options: [
                    "To get all property names of an object",
                    "To set all property names of an object",
                    "To delete all property names of an object",
                    "To create all property names of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties) found directly upon a given object."
            },
            {
                id: 61,
                question: "What is the purpose of the 'Object.getOwnPropertySymbols()' method in JavaScript?",
                options: [
                    "To get all symbol properties of an object",
                    "To set all symbol properties of an object",
                    "To delete all symbol properties of an object",
                    "To create all symbol properties of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object."
            },
            {
                id: 62,
                question: "What is the purpose of the 'Object.is()' method in JavaScript?",
                options: [
                    "To check if two values are the same",
                    "To check if two objects are equal",
                    "To check if two arrays are equal",
                    "To check if two functions are equal"
                ],
                correctAnswer: "A",
                explanation: "The Object.is() method determines whether two values are the same value."
            },
            {
                id: 63,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptor()' method in JavaScript?",
                options: [
                    "To get the property descriptor of an object",
                    "To set the property descriptor of an object",
                    "To delete the property descriptor of an object",
                    "To create the property descriptor of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property of a given object."
            },
            {
                id: 64,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptors()' method in JavaScript?",
                options: [
                    "To get all property descriptors of an object",
                    "To set all property descriptors of an object",
                    "To delete all property descriptors of an object",
                    "To create all property descriptors of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object."
            },
            {
                id: 65,
                question: "What is the purpose of the 'Object.getOwnPropertyNames()' method in JavaScript?",
                options: [
                    "To get all property names of an object",
                    "To set all property names of an object",
                    "To delete all property names of an object",
                    "To create all property names of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties) found directly upon a given object."
            },
            {
                id: 66,
                question: "What is the purpose of the 'Object.getOwnPropertySymbols()' method in JavaScript?",
                options: [
                    "To get all symbol properties of an object",
                    "To set all symbol properties of an object",
                    "To delete all symbol properties of an object",
                    "To create all symbol properties of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object."
            },
            {
                id: 67,
                question: "What is the purpose of the 'Object.is()' method in JavaScript?",
                options: [
                    "To check if two values are the same",
                    "To check if two objects are equal",
                    "To check if two arrays are equal",
                    "To check if two functions are equal"
                ],
                correctAnswer: "A",
                explanation: "The Object.is() method determines whether two values are the same value."
            },
            {
                id: 68,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptor()' method in JavaScript?",
                options: [
                    "To get the property descriptor of an object",
                    "To set the property descriptor of an object",
                    "To delete the property descriptor of an object",
                    "To create the property descriptor of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property of a given object."
            },
            {
                id: 69,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptors()' method in JavaScript?",
                options: [
                    "To get all property descriptors of an object",
                    "To set all property descriptors of an object",
                    "To delete all property descriptors of an object",
                    "To create all property descriptors of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object."
            },
            {
                id: 70,
                question: "What is the purpose of the 'Object.getOwnPropertyNames()' method in JavaScript?",
                options: [
                    "To get all property names of an object",
                    "To set all property names of an object",
                    "To delete all property names of an object",
                    "To create all property names of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties) found directly upon a given object."
            },
            {
                id: 71,
                question: "What is the purpose of the 'Object.getOwnPropertySymbols()' method in JavaScript?",
                options: [
                    "To get all symbol properties of an object",
                    "To set all symbol properties of an object",
                    "To delete all symbol properties of an object",
                    "To create all symbol properties of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object."
            },
            {
                id: 72,
                question: "What is the purpose of the 'Object.is()' method in JavaScript?",
                options: [
                    "To check if two values are the same",
                    "To check if two objects are equal",
                    "To check if two arrays are equal",
                    "To check if two functions are equal"
                ],
                correctAnswer: "A",
                explanation: "The Object.is() method determines whether two values are the same value."
            },
            {
                id: 73,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptor()' method in JavaScript?",
                options: [
                    "To get the property descriptor of an object",
                    "To set the property descriptor of an object",
                    "To delete the property descriptor of an object",
                    "To create the property descriptor of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property of a given object."
            },
            {
                id: 74,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptors()' method in JavaScript?",
                options: [
                    "To get all property descriptors of an object",
                    "To set all property descriptors of an object",
                    "To delete all property descriptors of an object",
                    "To create all property descriptors of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object."
            },
            {
                id: 75,
                question: "What is the purpose of the 'Object.getOwnPropertyNames()' method in JavaScript?",
                options: [
                    "To get all property names of an object",
                    "To set all property names of an object",
                    "To delete all property names of an object",
                    "To create all property names of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties) found directly upon a given object."
            },
            {
                id: 76,
                question: "What is the purpose of the 'Object.getOwnPropertySymbols()' method in JavaScript?",
                options: [
                    "To get all symbol properties of an object",
                    "To set all symbol properties of an object",
                    "To delete all symbol properties of an object",
                    "To create all symbol properties of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object."
            },
            {
                id: 77,
                question: "What is the purpose of the 'Object.is()' method in JavaScript?",
                options: [
                    "To check if two values are the same",
                    "To check if two objects are equal",
                    "To check if two arrays are equal",
                    "To check if two functions are equal"
                ],
                correctAnswer: "A",
                explanation: "The Object.is() method determines whether two values are the same value."
            },
            {
                id: 78,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptor()' method in JavaScript?",
                options: [
                    "To get the property descriptor of an object",
                    "To set the property descriptor of an object",
                    "To delete the property descriptor of an object",
                    "To create the property descriptor of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property of a given object."
            },
            {
                id: 79,
                question: "What is the purpose of the 'Object.getOwnPropertyDescriptors()' method in JavaScript?",
                options: [
                    "To get all property descriptors of an object",
                    "To set all property descriptors of an object",
                    "To delete all property descriptors of an object",
                    "To create all property descriptors of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object."
            },
            {
                id: 80,
                question: "What is the purpose of the 'Object.getOwnPropertyNames()' method in JavaScript?",
                options: [
                    "To get all property names of an object",
                    "To set all property names of an object",
                    "To delete all property names of an object",
                    "To create all property names of an object"
                ],
                correctAnswer: "A",
                explanation: "The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties) found directly upon a given object."
            }
        ];
    }

    // ===================================
    // Advanced Questions (60 questions)
    // ===================================
    
    getAdvancedQuestions() {
        return [
            {
                id: 1,
                question: "What is the time complexity of the Floyd-Warshall algorithm?",
                options: [
                    "O(V²)",
                    "O(V³)",
                    "O(E log V)",
                    "O(V + E)"
                ],
                correctAnswer: "B",
                explanation: "The Floyd-Warshall algorithm has O(V³) time complexity, where V is the number of vertices. It finds shortest paths between all pairs of vertices in a weighted graph."
            },
            {
                id: 2,
                question: "Which distributed system pattern ensures data consistency across multiple nodes?",
                options: [
                    "Event Sourcing",
                    "CQRS",
                    "Two-Phase Commit",
                    "Microservices"
                ],
                correctAnswer: "C",
                explanation: "Two-Phase Commit (2PC) is a distributed algorithm that ensures atomicity across distributed systems by coordinating the commit or rollback of transactions across multiple nodes."
            },
            {
                id: 3,
                question: "What is the purpose of a Bloom filter in computer science?",
                options: [
                    "To compress data",
                    "To test if an element is in a set with possible false positives",
                    "To encrypt data",
                    "To sort arrays"
                ],
                correctAnswer: "B",
                explanation: "A Bloom filter is a space-efficient probabilistic data structure that tests whether an element is a member of a set. It can have false positives but never false negatives."
            },
            {
                id: 4,
                question: "Which machine learning algorithm is best for handling non-linear relationships?",
                options: [
                    "Linear Regression",
                    "Decision Trees",
                    "K-Means Clustering",
                    "Naive Bayes"
                ],
                correctAnswer: "B",
                explanation: "Decision Trees can handle non-linear relationships by creating complex decision boundaries. They can model intricate patterns that linear algorithms cannot capture."
            },
            {
                id: 5,
                question: "What is the CAP theorem in distributed systems?",
                options: [
                    "A theorem about network protocols",
                    "A theorem stating you can only guarantee two of: Consistency, Availability, Partition tolerance",
                    "A theorem about database design",
                    "A theorem about algorithm complexity"
                ],
                correctAnswer: "B",
                explanation: "The CAP theorem states that in a distributed system, you can only guarantee two out of three properties: Consistency (all nodes see the same data), Availability (system remains operational), and Partition tolerance (system continues despite network failures)."
            },
            {
                id: 6,
                question: "Which algorithm is used for real-time collaborative editing systems like Google Docs?",
                options: [
                    "Operational Transformation",
                    "CRDT (Conflict-free Replicated Data Types)",
                    "Both A and B",
                    "Git merge algorithms"
                ],
                correctAnswer: "C",
                explanation: "Both Operational Transformation (OT) and Conflict-free Replicated Data Types (CRDT) are used in collaborative editing. OT transforms operations to resolve conflicts, while CRDTs are data structures that automatically resolve conflicts."
            },
            {
                id: 7,
                question: "What is the purpose of a Merkle tree in blockchain technology?",
                options: [
                    "To encrypt transactions",
                    "To verify data integrity efficiently",
                    "To compress blockchain data",
                    "To generate cryptocurrency"
                ],
                correctAnswer: "B",
                explanation: "A Merkle tree is used in blockchain to efficiently verify the integrity of large amounts of data. It allows quick verification of whether a specific transaction is included in a block without downloading the entire blockchain."
            },
            {
                id: 8,
                question: "Which design pattern is used to handle complex object creation with many optional parameters?",
                options: [
                    "Factory Pattern",
                    "Builder Pattern",
                    "Singleton Pattern",
                    "Observer Pattern"
                ],
                correctAnswer: "B",
                explanation: "The Builder pattern is used to construct complex objects step by step. It's particularly useful when an object has many optional parameters or when the construction process is complex."
            },
            {
                id: 9,
                question: "What is the time complexity of the A* pathfinding algorithm?",
                options: [
                    "O(V + E)",
                    "O(V log V)",
                    "O(b^d) where b is branching factor and d is depth",
                    "O(V²)"
                ],
                correctAnswer: "C",
                explanation: "A* has exponential time complexity O(b^d) in the worst case, where b is the branching factor and d is the depth of the solution. However, with a good heuristic, it's much more efficient in practice."
            },
            {
                id: 10,
                question: "Which technique is used to prevent SQL injection attacks?",
                options: [
                    "Input validation",
                    "Prepared statements",
                    "Both A and B",
                    "Password encryption"
                ],
                correctAnswer: "C",
                explanation: "Both input validation and prepared statements are essential for preventing SQL injection. Input validation checks data format, while prepared statements separate SQL code from data, preventing malicious SQL from being executed."
            },
            {
                id: 6,
                question: "What is the time complexity of Dijkstra's algorithm with a binary heap?",
                options: [
                    "O(V²)",
                    "O((V + E) log V)",
                    "O(V log V)",
                    "O(E log V)"
                ],
                correctAnswer: "B",
                explanation: "Dijkstra's algorithm with a binary heap has O((V + E) log V) time complexity, where V is the number of vertices and E is the number of edges."
            },
            {
                id: 7,
                question: "What is the purpose of the Bellman-Ford algorithm?",
                options: [
                    "To find the shortest path in a graph with negative weights",
                    "To find the shortest path in a directed acyclic graph",
                    "To find the shortest path in an unweighted graph",
                    "To find the shortest path in a tree"
                ],
                correctAnswer: "A",
                explanation: "The Bellman-Ford algorithm finds the shortest path in a graph that may contain negative weight edges, unlike Dijkstra's algorithm which doesn't handle negative weights."
            },
            {
                id: 8,
                question: "What is the time complexity of the Bellman-Ford algorithm?",
                options: [
                    "O(V²)",
                    "O(V³)",
                    "O(VE)",
                    "O(V + E)"
                ],
                correctAnswer: "C",
                explanation: "The Bellman-Ford algorithm has O(VE) time complexity, where V is the number of vertices and E is the number of edges."
            },
            {
                id: 9,
                question: "What is the purpose of the A* algorithm?",
                options: [
                    "To find the shortest path using heuristics",
                    "To find the shortest path in a weighted graph",
                    "To find the shortest path in an unweighted graph",
                    "To find the shortest path in a tree"
                ],
                correctAnswer: "A",
                explanation: "The A* algorithm finds the shortest path using heuristics to guide the search, making it more efficient than Dijkstra's algorithm in many cases."
            },
            {
                id: 10,
                question: "What is the time complexity of the A* algorithm?",
                options: [
                    "O(V²)",
                    "O(V³)",
                    "O(b^d)",
                    "O(V + E)"
                ],
                correctAnswer: "C",
                explanation: "The A* algorithm has O(b^d) time complexity, where b is the branching factor and d is the depth of the solution."
            },
            {
                id: 11,
                question: "What is the purpose of the Kruskal's algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To find the minimum spanning tree of a graph",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "Kruskal's algorithm finds the minimum spanning tree of a connected, undirected graph by adding edges in order of increasing weight."
            },
            {
                id: 12,
                question: "What is the time complexity of Kruskal's algorithm?",
                options: [
                    "O(V²)",
                    "O(V³)",
                    "O(E log E)",
                    "O(V + E)"
                ],
                correctAnswer: "C",
                explanation: "Kruskal's algorithm has O(E log E) time complexity, where E is the number of edges, due to the sorting step."
            },
            {
                id: 13,
                question: "What is the purpose of Prim's algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To find the minimum spanning tree of a graph",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "Prim's algorithm finds the minimum spanning tree of a connected, undirected graph by growing the tree from a starting vertex."
            },
            {
                id: 14,
                question: "What is the time complexity of Prim's algorithm with a binary heap?",
                options: [
                    "O(V²)",
                    "O(V³)",
                    "O(E log V)",
                    "O(V + E)"
                ],
                correctAnswer: "C",
                explanation: "Prim's algorithm with a binary heap has O(E log V) time complexity, where V is the number of vertices and E is the number of edges."
            },
            {
                id: 15,
                question: "What is the purpose of the Union-Find data structure?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently manage disjoint sets",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The Union-Find data structure efficiently manages disjoint sets, supporting operations like finding which set an element belongs to and merging two sets."
            },
            {
                id: 16,
                question: "What is the time complexity of the Union-Find operations with path compression?",
                options: [
                    "O(V²)",
                    "O(V³)",
                    "O(α(V))",
                    "O(V + E)"
                ],
                correctAnswer: "C",
                explanation: "Union-Find operations with path compression have O(α(V)) time complexity, where α is the inverse Ackermann function, which is nearly constant."
            },
            {
                id: 17,
                question: "What is the purpose of the Segment Tree data structure?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently answer range queries on an array",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "A Segment Tree efficiently answers range queries (like sum, minimum, maximum) on an array in O(log n) time."
            },
            {
                id: 18,
                question: "What is the time complexity of building a Segment Tree?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "Building a Segment Tree takes O(n) time, where n is the size of the array."
            },
            {
                id: 19,
                question: "What is the time complexity of querying a Segment Tree?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(log n)",
                    "O(1)"
                ],
                correctAnswer: "C",
                explanation: "Querying a Segment Tree takes O(log n) time, where n is the size of the array."
            },
            {
                id: 20,
                question: "What is the purpose of the Fenwick Tree (Binary Indexed Tree) data structure?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently calculate prefix sums and update elements",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "A Fenwick Tree efficiently calculates prefix sums and updates elements in O(log n) time."
            },
            {
                id: 21,
                question: "What is the time complexity of querying a Fenwick Tree?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(log n)",
                    "O(1)"
                ],
                correctAnswer: "C",
                explanation: "Querying a Fenwick Tree takes O(log n) time, where n is the size of the array."
            },
            {
                id: 22,
                question: "What is the time complexity of updating a Fenwick Tree?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(log n)",
                    "O(1)"
                ],
                correctAnswer: "C",
                explanation: "Updating a Fenwick Tree takes O(log n) time, where n is the size of the array."
            },
            {
                id: 23,
                question: "What is the purpose of the Trie data structure?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently store and search strings",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "A Trie efficiently stores and searches strings, making it useful for autocomplete, spell checkers, and IP routing."
            },
            {
                id: 24,
                question: "What is the time complexity of searching in a Trie?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(m)",
                    "O(1)"
                ],
                correctAnswer: "C",
                explanation: "Searching in a Trie takes O(m) time, where m is the length of the string being searched."
            },
            {
                id: 25,
                question: "What is the purpose of the Suffix Array data structure?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently search for patterns in text",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "A Suffix Array efficiently searches for patterns in text by storing all suffixes of a string in sorted order."
            },
            {
                id: 26,
                question: "What is the time complexity of building a Suffix Array?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "B",
                explanation: "Building a Suffix Array takes O(n log n) time, where n is the length of the string."
            },
            {
                id: 27,
                question: "What is the purpose of the Suffix Tree data structure?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently search for patterns in text",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "A Suffix Tree efficiently searches for patterns in text by storing all suffixes of a string in a tree structure."
            },
            {
                id: 28,
                question: "What is the time complexity of building a Suffix Tree?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "Building a Suffix Tree takes O(n) time, where n is the length of the string."
            },
            {
                id: 29,
                question: "What is the purpose of the LCP (Longest Common Prefix) array?",
                options: [
                    "To find the shortest path in a graph",
                    "To find the longest common prefix between adjacent suffixes",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The LCP array stores the longest common prefix between adjacent suffixes in a Suffix Array, useful for pattern matching."
            },
            {
                id: 30,
                question: "What is the time complexity of building an LCP array?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "Building an LCP array takes O(n) time, where n is the length of the string."
            },
            {
                id: 31,
                question: "What is the purpose of the KMP (Knuth-Morris-Pratt) algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently search for a pattern in text",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The KMP algorithm efficiently searches for a pattern in text by preprocessing the pattern to avoid unnecessary comparisons."
            },
            {
                id: 32,
                question: "What is the time complexity of the KMP algorithm?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n + m)",
                    "O(log n)"
                ],
                correctAnswer: "C",
                explanation: "The KMP algorithm has O(n + m) time complexity, where n is the length of the text and m is the length of the pattern."
            },
            {
                id: 33,
                question: "What is the purpose of the Rabin-Karp algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently search for a pattern in text using hashing",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The Rabin-Karp algorithm efficiently searches for a pattern in text using hashing to compare strings."
            },
            {
                id: 34,
                question: "What is the time complexity of the Rabin-Karp algorithm?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n + m)",
                    "O(log n)"
                ],
                correctAnswer: "C",
                explanation: "The Rabin-Karp algorithm has O(n + m) time complexity, where n is the length of the text and m is the length of the pattern."
            },
            {
                id: 35,
                question: "What is the purpose of the Z-algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To find all occurrences of a pattern in text",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The Z-algorithm finds all occurrences of a pattern in text by computing the Z-array, which stores the length of the longest substring starting from each position."
            },
            {
                id: 36,
                question: "What is the time complexity of the Z-algorithm?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n + m)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "The Z-algorithm has O(n) time complexity, where n is the length of the string."
            },
            {
                id: 37,
                question: "What is the purpose of the Manacher's algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To find the longest palindromic substring in a string",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "Manacher's algorithm finds the longest palindromic substring in a string in linear time."
            },
            {
                id: 38,
                question: "What is the time complexity of Manacher's algorithm?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "Manacher's algorithm has O(n) time complexity, where n is the length of the string."
            },
            {
                id: 39,
                question: "What is the purpose of the Suffix Automaton data structure?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently search for patterns in text",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "A Suffix Automaton efficiently searches for patterns in text by representing all suffixes of a string in a compact automaton."
            },
            {
                id: 40,
                question: "What is the time complexity of building a Suffix Automaton?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "Building a Suffix Automaton takes O(n) time, where n is the length of the string."
            },
            {
                id: 41,
                question: "What is the purpose of the Aho-Corasick algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently search for multiple patterns in text",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The Aho-Corasick algorithm efficiently searches for multiple patterns in text by building a trie and using failure links."
            },
            {
                id: 42,
                question: "What is the time complexity of the Aho-Corasick algorithm?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n + m + z)",
                    "O(log n)"
                ],
                correctAnswer: "C",
                explanation: "The Aho-Corasick algorithm has O(n + m + z) time complexity, where n is the length of the text, m is the total length of all patterns, and z is the number of pattern occurrences."
            },
            {
                id: 43,
                question: "What is the purpose of the Boyer-Moore algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently search for a pattern in text by skipping characters",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The Boyer-Moore algorithm efficiently searches for a pattern in text by skipping characters based on the pattern's structure."
            },
            {
                id: 44,
                question: "What is the time complexity of the Boyer-Moore algorithm?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n + m)",
                    "O(log n)"
                ],
                correctAnswer: "C",
                explanation: "The Boyer-Moore algorithm has O(n + m) time complexity, where n is the length of the text and m is the length of the pattern."
            },
            {
                id: 45,
                question: "What is the purpose of the Finite State Machine (FSM) in pattern matching?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently search for patterns in text by modeling state transitions",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "A Finite State Machine efficiently searches for patterns in text by modeling state transitions based on character matches."
            },
            {
                id: 46,
                question: "What is the time complexity of pattern matching with an FSM?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n + m)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "Pattern matching with an FSM has O(n) time complexity, where n is the length of the text."
            },
            {
                id: 47,
                question: "What is the purpose of the Rolling Hash technique?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently compute hash values for sliding windows",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The Rolling Hash technique efficiently computes hash values for sliding windows, useful in string matching and pattern recognition."
            },
            {
                id: 48,
                question: "What is the time complexity of computing a rolling hash?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(1)",
                    "O(log n)"
                ],
                correctAnswer: "C",
                explanation: "Computing a rolling hash takes O(1) time per operation, making it very efficient for sliding window problems."
            },
            {
                id: 49,
                question: "What is the purpose of the Suffix Tree in bioinformatics?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently search for DNA sequences and protein patterns",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "Suffix Trees are widely used in bioinformatics to efficiently search for DNA sequences and protein patterns in genomic data."
            },
            {
                id: 50,
                question: "What is the purpose of the Burrows-Wheeler Transform (BWT)?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently compress text by rearranging characters",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The Burrows-Wheeler Transform efficiently compresses text by rearranging characters to group similar characters together."
            },
            {
                id: 51,
                question: "What is the time complexity of the Burrows-Wheeler Transform?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "B",
                explanation: "The Burrows-Wheeler Transform has O(n log n) time complexity, where n is the length of the string."
            },
            {
                id: 52,
                question: "What is the purpose of the Move-to-Front (MTF) transform?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently compress text by moving frequently used characters to the front",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The Move-to-Front transform efficiently compresses text by moving frequently used characters to the front of a list."
            },
            {
                id: 53,
                question: "What is the time complexity of the Move-to-Front transform?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "The Move-to-Front transform has O(n) time complexity, where n is the length of the string."
            },
            {
                id: 54,
                question: "What is the purpose of the Run-Length Encoding (RLE) algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently compress text by encoding consecutive identical characters",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "Run-Length Encoding efficiently compresses text by encoding consecutive identical characters as a count and character pair."
            },
            {
                id: 55,
                question: "What is the time complexity of Run-Length Encoding?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "Run-Length Encoding has O(n) time complexity, where n is the length of the string."
            },
            {
                id: 56,
                question: "What is the purpose of the Huffman Coding algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently compress text by assigning variable-length codes to characters",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "Huffman Coding efficiently compresses text by assigning variable-length codes to characters based on their frequency."
            },
            {
                id: 57,
                question: "What is the time complexity of Huffman Coding?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "B",
                explanation: "Huffman Coding has O(n log n) time complexity, where n is the number of unique characters."
            },
            {
                id: 58,
                question: "What is the purpose of the Lempel-Ziv-Welch (LZW) algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently compress text by building a dictionary of patterns",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "The Lempel-Ziv-Welch algorithm efficiently compresses text by building a dictionary of patterns and encoding them as indices."
            },
            {
                id: 59,
                question: "What is the time complexity of the Lempel-Ziv-Welch algorithm?",
                options: [
                    "O(n)",
                    "O(n log n)",
                    "O(n²)",
                    "O(log n)"
                ],
                correctAnswer: "A",
                explanation: "The Lempel-Ziv-Welch algorithm has O(n) time complexity, where n is the length of the string."
            },
            {
                id: 60,
                question: "What is the purpose of the Arithmetic Coding algorithm?",
                options: [
                    "To find the shortest path in a graph",
                    "To efficiently compress text by encoding entire messages as single numbers",
                    "To find the shortest path in a tree",
                    "To find the shortest path in a directed graph"
                ],
                correctAnswer: "B",
                explanation: "Arithmetic Coding efficiently compresses text by encoding entire messages as single numbers, achieving better compression than Huffman Coding."
            }
        ];
    }

    // ===================================
    // Software-Dev Questions (50 questions)
    // ===================================
    
    getSoftwareDevQuestions() {
        return [
            {
                id: 1,
                question: "What is the primary purpose of version control systems like Git?",
                options: [
                    "To compile code",
                    "To track changes in code over time",
                    "To debug applications",
                    "To deploy applications"
                ],
                correctAnswer: "B",
                explanation: "Version control systems like Git are designed to track changes in code over time, allowing developers to maintain a history of modifications, collaborate effectively, and revert to previous versions when needed."
            },
            {
                id: 2,
                question: "Which testing approach focuses on testing individual units or components in isolation?",
                options: [
                    "Integration testing",
                    "Unit testing",
                    "System testing",
                    "Acceptance testing"
                ],
                correctAnswer: "B",
                explanation: "Unit testing focuses on testing individual units or components of software in isolation, typically using mock objects to simulate dependencies and ensure each unit functions correctly on its own."
            },
            {
                id: 3,
                question: "What does CI/CD stand for in software development?",
                options: [
                    "Continuous Integration/Continuous Deployment",
                    "Code Integration/Code Deployment",
                    "Continuous Improvement/Continuous Development",
                    "Central Integration/Central Deployment"
                ],
                correctAnswer: "A",
                explanation: "CI/CD stands for Continuous Integration/Continuous Deployment, which are practices that automate the process of integrating code changes and deploying them to production environments."
            },
            {
                id: 4,
                question: "Which design pattern ensures that a class has only one instance?",
                options: [
                    "Factory Pattern",
                    "Observer Pattern",
                    "Singleton Pattern",
                    "Builder Pattern"
                ],
                correctAnswer: "C",
                explanation: "The Singleton pattern ensures that a class has only one instance and provides global access to that instance. It's commonly used for database connections, logging, and configuration objects."
            },
            {
                id: 5,
                question: "What is the main purpose of Docker containers?",
                options: [
                    "To compile code",
                    "To package applications with their dependencies",
                    "To debug applications",
                    "To write documentation"
                ],
                correctAnswer: "B",
                explanation: "Docker containers package applications with all their dependencies, ensuring consistent behavior across different environments and making deployment more reliable and portable."
            },
            {
                id: 6,
                question: "Which methodology emphasizes iterative development and frequent customer feedback?",
                options: [
                    "Waterfall",
                    "Agile",
                    "Spiral",
                    "V-Model"
                ],
                correctAnswer: "B",
                explanation: "Agile methodology emphasizes iterative development, frequent customer feedback, and adaptive planning. It focuses on delivering working software in short iterations and responding to change."
            },
            {
                id: 7,
                question: "What is the primary goal of code refactoring?",
                options: [
                    "To add new features",
                    "To improve code structure without changing functionality",
                    "To fix bugs",
                    "To optimize performance"
                ],
                correctAnswer: "B",
                explanation: "Code refactoring aims to improve the internal structure, readability, and maintainability of code without changing its external behavior or functionality."
            },
            {
                id: 8,
                question: "Which tool is commonly used for automated testing in JavaScript projects?",
                options: [
                    "Jest",
                    "Webpack",
                    "Babel",
                    "ESLint"
                ],
                correctAnswer: "A",
                explanation: "Jest is a popular JavaScript testing framework that provides a complete testing solution with built-in mocking, assertions, and test runners for JavaScript applications."
            },
            {
                id: 9,
                question: "What does API stand for in software development?",
                options: [
                    "Application Programming Interface",
                    "Automated Program Integration",
                    "Advanced Programming Interface",
                    "Application Process Integration"
                ],
                correctAnswer: "A",
                explanation: "API stands for Application Programming Interface, which defines how different software components should interact and communicate with each other."
            },
            {
                id: 10,
                question: "Which principle states that software entities should be open for extension but closed for modification?",
                options: [
                    "Single Responsibility Principle",
                    "Open/Closed Principle",
                    "Liskov Substitution Principle",
                    "Interface Segregation Principle"
                ],
                correctAnswer: "B",
                explanation: "The Open/Closed Principle states that software entities (classes, modules, functions) should be open for extension but closed for modification, promoting code reusability and maintainability."
            },
            {
                id: 11,
                question: "Which of the following roles does NOT belong to Scrum methodology?",
                options: [
                    "Scrum Master",
                    "Product Owner",
                    "Stakeholder",
                    "System Architect"
                ],
                correctAnswer: "D",
                explanation: "Scrum has only three official roles — Product Owner, Scrum Master, and Development Team. System Architect is not part of Scrum roles."
            },
            {
                id: 12,
                question: "During beta testing, ___________ are most likely to report software bugs.",
                options: [
                    "Developers",
                    "Test Engineers",
                    "End Users",
                    "Project Managers"
                ],
                correctAnswer: "C",
                explanation: "Beta testing involves real users testing the product in real-world conditions to identify any remaining issues."
            },
            {
                id: 13,
                question: "Which of the following statements best describes encapsulation in Python?",
                options: [
                    "Combining data and methods into a single unit",
                    "Deriving new classes from base classes",
                    "Defining functions outside a class",
                    "Using global variables"
                ],
                correctAnswer: "A",
                explanation: "Encapsulation in OOP means bundling data and functions that operate on that data into one unit (class), restricting direct access."
            },
            {
                id: 14,
                question: "How can you create an immutable object in Python?",
                options: [
                    "Using a tuple",
                    "Using a list",
                    "Using a set",
                    "Using a dictionary"
                ],
                correctAnswer: "A",
                explanation: "Tuples in Python are immutable, meaning their elements cannot be changed after creation."
            },
            {
                id: 15,
                question: "What will happen if you modify a list while iterating over it in Python?",
                options: [
                    "Error",
                    "It may cause unexpected behavior",
                    "It will restart the loop",
                    "It automatically adjusts"
                ],
                correctAnswer: "B",
                explanation: "Modifying a list while iterating can skip elements or cause incorrect iteration."
            },
            {
                id: 16,
                question: "In Agile methodology, what is the typical duration of a sprint?",
                options: [
                    "1-4 weeks",
                    "2-6 months",
                    "1 day",
                    "6-12 weeks"
                ],
                correctAnswer: "A",
                explanation: "A sprint is a time-boxed period during which specific work has to be completed — usually 1 to 4 weeks."
            },
            {
                id: 17,
                question: "What will `sorted([3, 1, 2], reverse=True)` return?",
                options: [
                    "[1, 2, 3]",
                    "[3, 2, 1]",
                    "[2, 1, 3]",
                    "Error"
                ],
                correctAnswer: "B",
                explanation: "reverse=True sorts in descending order."
            },
            {
                id: 18,
                question: "Which of the following data structures maintains insertion order in Python 3.7+?",
                options: [
                    "Set",
                    "Dictionary",
                    "Tuple",
                    "Frozen set"
                ],
                correctAnswer: "B",
                explanation: "Starting from Python 3.7, dictionaries preserve insertion order by default."
            },
            {
                id: 19,
                question: "What will be the result of `bool('False')` in Python?",
                options: [
                    "True",
                    "False",
                    "Error",
                    "None"
                ],
                correctAnswer: "A",
                explanation: "Non-empty strings are always True in Python, even if the content is 'False'."
            },
            {
                id: 20,
                question: "What does the `@staticmethod` decorator do in Python?",
                options: [
                    "Creates an abstract method",
                    "Defines a method that belongs to the class, not instance",
                    "Prevents inheritance",
                    "Makes method private"
                ],
                correctAnswer: "B",
                explanation: "A static method doesn't require an instance and can be called directly using the class name."
            },
            {
                id: 21,
                question: "Which of the following is NOT a valid Python data structure?",
                options: [
                    "List",
                    "Stack",
                    "Tuple",
                    "Dictionary"
                ],
                correctAnswer: "B",
                explanation: "Stack is a concept, not a built-in Python data structure (though it can be implemented using lists)."
            },
            {
                id: 22,
                question: "What is the primary purpose of a code review?",
                options: [
                    "To compile the code",
                    "To improve code quality and catch bugs",
                    "To deploy the application",
                    "To write documentation"
                ],
                correctAnswer: "B",
                explanation: "Code reviews help improve code quality, catch bugs early, share knowledge among team members, and ensure coding standards are followed."
            },
            {
                id: 23,
                question: "Which testing level focuses on testing the entire system as a whole?",
                options: [
                    "Unit testing",
                    "Integration testing",
                    "System testing",
                    "Acceptance testing"
                ],
                correctAnswer: "C",
                explanation: "System testing evaluates the complete integrated system to verify that it meets specified requirements and works correctly as a whole."
            },
            {
                id: 24,
                question: "What does 'DRY' stand for in software development?",
                options: [
                    "Don't Repeat Yourself",
                    "Data Retrieval and Yield",
                    "Dynamic Resource Management",
                    "Database Relationship Yield"
                ],
                correctAnswer: "A",
                explanation: "DRY (Don't Repeat Yourself) is a principle that aims to reduce repetition of code patterns, making code more maintainable and less error-prone."
            },
            {
                id: 25,
                question: "Which keyword is used to define a class in Python?",
                options: [
                    "class",
                    "def",
                    "struct",
                    "object"
                ],
                correctAnswer: "A",
                explanation: "The 'class' keyword is used to define a class in Python, followed by the class name and a colon."
            },
            {
                id: 26,
                question: "What is the main advantage of using microservices architecture?",
                options: [
                    "Simpler deployment",
                    "Better scalability and independent deployment",
                    "Lower memory usage",
                    "Faster compilation"
                ],
                correctAnswer: "B",
                explanation: "Microservices architecture allows for better scalability, independent deployment of services, and technology diversity across different services."
            },
            {
                id: 27,
                question: "Which method is used to add an element to the end of a list in Python?",
                options: [
                    "append()",
                    "add()",
                    "insert()",
                    "push()"
                ],
                correctAnswer: "A",
                explanation: "The append() method adds a single element to the end of a list in Python."
            },
            {
                id: 28,
                question: "What is the purpose of a database index?",
                options: [
                    "To store data",
                    "To improve query performance",
                    "To backup data",
                    "To encrypt data"
                ],
                correctAnswer: "B",
                explanation: "Database indexes improve query performance by providing faster access to data, similar to an index in a book."
            },
            {
                id: 29,
                question: "Which HTTP method is typically used to retrieve data from a server?",
                options: [
                    "POST",
                    "PUT",
                    "GET",
                    "DELETE"
                ],
                correctAnswer: "C",
                explanation: "The GET method is used to retrieve data from a server. It's the most common HTTP method for reading data."
            },
            {
                id: 30,
                question: "What does 'API' stand for in web development?",
                options: [
                    "Application Programming Interface",
                    "Advanced Programming Integration",
                    "Automated Process Interface",
                    "Application Process Integration"
                ],
                correctAnswer: "A",
                explanation: "API stands for Application Programming Interface, which defines how different software components should interact and communicate."
            },
            {
                id: 31,
                question: "What is the primary purpose of a constructor in object-oriented programming?",
                options: [
                    "To destroy objects",
                    "To initialize objects when they are created",
                    "To inherit from parent classes",
                    "To override methods"
                ],
                correctAnswer: "B",
                explanation: "A constructor is a special method that initializes objects when they are created, setting up initial values and performing setup tasks."
            },
            {
                id: 32,
                question: "Which testing technique involves testing with invalid or unexpected inputs?",
                options: [
                    "Positive testing",
                    "Negative testing",
                    "Unit testing",
                    "Integration testing"
                ],
                correctAnswer: "B",
                explanation: "Negative testing involves testing with invalid, unexpected, or edge case inputs to ensure the system handles errors gracefully."
            },
            {
                id: 33,
                question: "What does 'SOLID' represent in software design principles?",
                options: [
                    "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
                    "Simple, Organized, Logical, Integrated, Dynamic",
                    "Structured, Optimized, Layered, Independent, Distributed",
                    "Secure, Object-oriented, Lightweight, Intelligent, Decoupled"
                ],
                correctAnswer: "A",
                explanation: "SOLID represents five object-oriented design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion."
            },
            {
                id: 34,
                question: "Which Python data type is mutable?",
                options: [
                    "Tuple",
                    "String",
                    "List",
                    "Frozen set"
                ],
                correctAnswer: "C",
                explanation: "Lists are mutable in Python, meaning their elements can be changed after creation. Tuples, strings, and frozen sets are immutable."
            },
            {
                id: 35,
                question: "What is the main purpose of version control branching?",
                options: [
                    "To backup code",
                    "To work on features independently without affecting main code",
                    "To compile code",
                    "To deploy applications"
                ],
                correctAnswer: "B",
                explanation: "Branching allows developers to work on features independently, experiment with changes, and merge them back to the main codebase when ready."
            },
            {
                id: 36,
                question: "Which HTTP status code indicates a successful request?",
                options: [
                    "200",
                    "400",
                    "404",
                    "500"
                ],
                correctAnswer: "A",
                explanation: "HTTP status code 200 indicates a successful request. 400 indicates bad request, 404 means not found, and 500 indicates server error."
            },
            {
                id: 37,
                question: "What is the primary goal of refactoring?",
                options: [
                    "To add new features",
                    "To improve code structure without changing functionality",
                    "To fix bugs",
                    "To optimize performance"
                ],
                correctAnswer: "B",
                explanation: "Refactoring aims to improve code structure, readability, and maintainability without changing the external behavior or functionality of the code."
            },
            {
                id: 38,
                question: "Which method is used to remove an element from a list by value in Python?",
                options: [
                    "remove()",
                    "delete()",
                    "pop()",
                    "clear()"
                ],
                correctAnswer: "A",
                explanation: "The remove() method removes the first occurrence of a specified value from a list. pop() removes by index, and clear() removes all elements."
            },
            {
                id: 39,
                question: "What does 'TDD' stand for in software development?",
                options: [
                    "Test-Driven Development",
                    "Total Design Documentation",
                    "Technical Design Document",
                    "Test Data Development"
                ],
                correctAnswer: "A",
                explanation: "TDD stands for Test-Driven Development, a methodology where tests are written before the actual code, driving the development process."
            },
            {
                id: 40,
                question: "Which design pattern provides a single point of access to a resource?",
                options: [
                    "Factory Pattern",
                    "Observer Pattern",
                    "Singleton Pattern",
                    "Builder Pattern"
                ],
                correctAnswer: "C",
                explanation: "The Singleton pattern ensures that a class has only one instance and provides global access to that instance, creating a single point of access."
            },
            {
                id: 41,
                question: "What is the purpose of a database foreign key?",
                options: [
                    "To encrypt data",
                    "To establish relationships between tables",
                    "To improve performance",
                    "To backup data"
                ],
                correctAnswer: "B",
                explanation: "A foreign key establishes relationships between tables by referencing the primary key of another table, ensuring referential integrity."
            },
            {
                id: 42,
                question: "Which Python keyword is used to handle exceptions?",
                options: [
                    "try",
                    "catch",
                    "error",
                    "exception"
                ],
                correctAnswer: "A",
                explanation: "The 'try' keyword is used to start a block of code that might raise exceptions, which can then be handled with 'except' blocks."
            },
            {
                id: 43,
                question: "What is the main advantage of using a framework in web development?",
                options: [
                    "Faster compilation",
                    "Pre-built components and standardized practices",
                    "Lower memory usage",
                    "Simpler syntax"
                ],
                correctAnswer: "B",
                explanation: "Frameworks provide pre-built components, standardized practices, and common functionality, reducing development time and ensuring best practices."
            },
            {
                id: 44,
                question: "Which testing approach tests individual components in isolation?",
                options: [
                    "Integration testing",
                    "System testing",
                    "Unit testing",
                    "Acceptance testing"
                ],
                correctAnswer: "C",
                explanation: "Unit testing tests individual components or units of code in isolation, typically using mock objects to simulate dependencies."
            },
            {
                id: 45,
                question: "What does 'REST' stand for in web services?",
                options: [
                    "Representational State Transfer",
                    "Remote Execution and State Transfer",
                    "Resource Exchange and State Transfer",
                    "Rapid Execution and State Transfer"
                ],
                correctAnswer: "A",
                explanation: "REST stands for Representational State Transfer, an architectural style for designing networked applications using HTTP methods."
            }
            // Note: You can add more Software-Dev questions here
            // I've provided 45 sample questions to get you started
        ];
    }
}

// ===================================
// Export for use in other scripts
// ===================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizData;
}
