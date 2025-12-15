// ===================================
// CS Q&A Examination System - Quiz Engine
// ===================================

class QuizEngine {
    constructor() {
        this.currentLevel = null;
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        this.timer = null;
        this.questionTimer = null;
        
        this.initializeEventListeners();
    }

    // ===================================
    // Initialization
    // ===================================
    
    initializeEventListeners() {
        // Quiz level selection
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('start-quiz-btn')) {
                const level = e.target.dataset.level;
                this.startQuiz(level);
            }
        });

        // Answer selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.option')) {
                this.selectAnswer(e.target.closest('.option'));
            }
        });

        // Submit answer
        document.getElementById('submitAnswer')?.addEventListener('click', () => {
            this.submitAnswer();
        });

        // Skip question
        document.getElementById('skipQuestion')?.addEventListener('click', () => {
            this.skipQuestion();
        });

        // Next question
        document.getElementById('nextQuestion')?.addEventListener('click', () => {
            this.nextQuestion();
        });

        // Quiz controls
        document.getElementById('pauseQuiz')?.addEventListener('click', () => {
            this.pauseQuiz();
        });

        document.getElementById('exitQuiz')?.addEventListener('click', () => {
            this.exitQuiz();
        });

        // Results actions
        document.getElementById('retakeQuiz')?.addEventListener('click', () => {
            this.retakeQuiz();
        });

        document.getElementById('viewExplanations')?.addEventListener('click', () => {
            this.viewExplanations();
        });

        document.getElementById('backToSelection')?.addEventListener('click', () => {
            this.backToSelection();
        });
    }

    // ===================================
    // Quiz Management
    // ===================================
    
    async startQuiz(level) {
        try {
            this.currentLevel = level;
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            this.startTime = new Date();
            
            // Show loading state
            this.showLoadingState();
            
            // Load questions for the selected level
            await this.loadQuestions(level);
            
            // Hide selection and show quiz interface
            document.getElementById('quizSelection').style.display = 'none';
            document.getElementById('quizInterface').style.display = 'block';
            
            // Update UI for current level
            this.updateLevelInfo(level);
            
            // Start the first question
            this.displayQuestion();
            
            // Start timer
            this.startQuestionTimer();
            
        } catch (error) {
            console.error('Error starting quiz:', error);
            this.showError('Failed to load quiz questions. Please try again.');
        }
    }

    async loadQuestions(level) {
        // In a real implementation, this would load from a database or API
        // For now, we'll use the sample data from quiz-data.js
        const quizData = new QuizData();
        this.questions = quizData.getQuestions(level);
        
        if (this.questions.length === 0) {
            throw new Error('No questions found for this level');
        }
    }

    updateLevelInfo(level) {
        const levelNames = {
            'fundamentals': 'Fundamentals',
            'intermediate': 'Intermediate', 
            'advanced': 'Advanced',
            'software-dev': 'Software-Dev',
            'software-dev-python': 'SDS Foundation (Python)'
        };
        
        const levelNumbers = {
            'fundamentals': 'Level 1',
            'intermediate': 'Level 2',
            'advanced': 'Level 3',
            'software-dev': 'Special',
            'software-dev-python': 'Foundation'
        };
        
        document.getElementById('currentLevelBadge').textContent = levelNumbers[level];
        document.getElementById('currentLevelName').textContent = levelNames[level];
    }

    // ===================================
    // Question Display
    // ===================================
    
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        if (!question) {
            console.error('No question found at index:', this.currentQuestionIndex);
            return;
        }
        
        // Update question number
        document.getElementById('questionNumber').textContent = this.currentQuestionIndex + 1;
        
        // Update progress
        this.updateProgress();
        
        // Display question image if available
        const questionImage = document.getElementById('questionImage');
        const questionCode = document.getElementById('questionCode');
        const questionTable = document.getElementById('questionTable');
        const questionText = document.getElementById('questionText');
        
        // Parse question text for code blocks (markdown style: ```python ... ```)
        const questionTextWithCode = question.question;
        const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
        let match;
        let lastIndex = 0;
        let questionHTML = '';
        let hasCodeBlock = false;
        let codeContent = '';
        let codeLanguage = 'python';
        
        // Check if question contains code blocks
        while ((match = codeBlockRegex.exec(questionTextWithCode)) !== null) {
            // Add text before code block
            questionHTML += this.escapeHtml(questionTextWithCode.substring(lastIndex, match.index));
            
            // Extract code block
            codeLanguage = match[1] || 'python';
            codeContent = match[2];
            hasCodeBlock = true;
            
            lastIndex = match.index + match[0].length;
        }
        
        // Add remaining text after last code block
        if (lastIndex < questionTextWithCode.length) {
            questionHTML += this.escapeHtml(questionTextWithCode.substring(lastIndex));
        }
        
        // If no code blocks found, use original text
        if (!hasCodeBlock) {
            questionHTML = this.escapeHtml(questionTextWithCode);
        }
        
        // Display question text (with code blocks removed)
        questionText.innerHTML = questionHTML;
        
        // Display database table if available
        if (question.table && questionTable) {
            this.renderTable(question.table, questionTable);
            questionTable.style.display = 'block';
            questionImage.style.display = 'none';
            questionImage.innerHTML = '';
            if (questionCode) {
                questionCode.style.display = 'none';
                questionCode.innerHTML = '';
            }
        }
        // Display code block if found
        else if (hasCodeBlock && questionCode) {
            const pre = document.createElement('pre');
            pre.className = 'question-code-block';
            
            const codeElement = document.createElement('code');
            codeElement.textContent = codeContent.trim();
            codeElement.setAttribute('data-language', codeLanguage);
            
            pre.appendChild(codeElement);
            
            questionCode.innerHTML = '';
            questionCode.appendChild(pre);
            questionCode.style.display = 'block';
            questionImage.style.display = 'none';
            questionImage.innerHTML = '';
            if (questionTable) {
                questionTable.style.display = 'none';
                questionTable.innerHTML = '';
            }
        } else if (question.image) {
            questionImage.innerHTML = `<img src="${question.image}" alt="Question illustration" style="max-width: 100%; height: auto;">`;
            questionImage.style.display = 'block';
            if (questionCode) {
                questionCode.style.display = 'none';
                questionCode.innerHTML = '';
            }
        } else if (questionCode && Array.isArray(question.codeSnippet) && question.codeSnippet.length > 0) {
            const pre = document.createElement('pre');
            pre.className = 'question-code-block';
            
            const codeElement = document.createElement('code');
            codeElement.textContent = question.codeSnippet.join('\n');
            
            pre.appendChild(codeElement);
            
            questionCode.innerHTML = '';
            questionCode.appendChild(pre);
            questionCode.style.display = 'block';
            questionImage.style.display = 'none';
            questionImage.innerHTML = '';
        } else {
            questionImage.style.display = 'none';
            questionImage.innerHTML = '';
            if (questionCode) {
                questionCode.style.display = 'none';
                questionCode.innerHTML = '';
            }
            if (questionTable) {
                questionTable.style.display = 'none';
                questionTable.innerHTML = '';
            }
        }
        
        // Display answer options
        this.displayAnswerOptions(question.options);
        
        // Reset UI state
        this.resetQuestionUI();
        
        // Start question timer
        this.startQuestionTimer();
    }

    displayAnswerOptions(options) {
        const optionsContainer = document.getElementById('answerOptions');
        if (!optionsContainer) {
            console.error('Answer options container not found!');
            return;
        }
        
        if (!options || !Array.isArray(options)) {
            console.error('Invalid options provided:', options);
            return;
        }
        
        optionsContainer.innerHTML = '';
        
        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.option = String.fromCharCode(65 + index); // A, B, C, D
            
            // Create option letter
            const optionLetter = document.createElement('div');
            optionLetter.className = 'option-letter';
            optionLetter.textContent = String.fromCharCode(65 + index);
            
            // Create option text (use textContent to prevent HTML interpretation)
            const optionText = document.createElement('div');
            optionText.className = 'option-text';
            optionText.textContent = option;
            
            optionElement.appendChild(optionLetter);
            optionElement.appendChild(optionText);
            optionsContainer.appendChild(optionElement);
        });
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
    }

    resetQuestionUI() {
        // Clear previous selections
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Hide feedback panel
        document.getElementById('feedbackPanel').style.display = 'none';
        
        // Reset submit button
        const submitBtn = document.getElementById('submitAnswer');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Submit Answer';
        
        // Reset question timer
        this.resetQuestionTimer();
    }

    // ===================================
    // Answer Handling
    // ===================================
    
    selectAnswer(optionElement) {
        // Remove previous selection
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Add selection to clicked option
        optionElement.classList.add('selected');
        
        // Enable submit button
        document.getElementById('submitAnswer').disabled = false;
    }

    submitAnswer() {
        const selectedOption = document.querySelector('.option.selected');
        if (!selectedOption) return;
        
        const question = this.questions[this.currentQuestionIndex];
        const userAnswer = selectedOption.dataset.option;
        const correctAnswer = question.correctAnswer;
        const isCorrect = userAnswer === correctAnswer;
        
        // Store user answer
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect,
            timeSpent: this.getQuestionTimeSpent()
        });
        
        // Show feedback
        this.showFeedback(question, userAnswer, correctAnswer, isCorrect);
        
        // Disable submit button
        document.getElementById('submitAnswer').disabled = true;
    }

    skipQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Store as skipped
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            userAnswer: null,
            correctAnswer: question.correctAnswer,
            isCorrect: false,
            timeSpent: this.getQuestionTimeSpent(),
            skipped: true
        });
        
        // Show feedback for skipped question
        this.showFeedback(question, null, question.correctAnswer, false, true);
    }

    showFeedback(question, userAnswer, correctAnswer, isCorrect, skipped = false) {
        const feedbackPanel = document.getElementById('feedbackPanel');
        const feedbackIcon = document.getElementById('feedbackIcon');
        const feedbackTitle = document.getElementById('feedbackTitle');
        const feedbackExplanation = document.getElementById('feedbackExplanation');
        const userAnswerSpan = document.getElementById('userAnswer');
        const correctAnswerSpan = document.getElementById('correctAnswer');
        const pointsEarned = document.getElementById('pointsEarned');
        
        // Update feedback content
        if (skipped) {
            feedbackIcon.innerHTML = '<i class="fas fa-forward"></i>';
            feedbackIcon.className = 'feedback-icon skipped';
            feedbackTitle.textContent = 'Question Skipped';
            feedbackExplanation.textContent = question.explanation || 'You skipped this question.';
        } else if (isCorrect) {
            feedbackIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
            feedbackIcon.className = 'feedback-icon correct';
            feedbackTitle.textContent = 'Correct!';
            feedbackExplanation.textContent = question.explanation || 'Great job! You got it right.';
        } else {
            feedbackIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
            feedbackIcon.className = 'feedback-icon incorrect';
            feedbackTitle.textContent = 'Incorrect';
            feedbackExplanation.textContent = question.explanation || 'Not quite right. Here\'s the explanation.';
        }
        
        // Update answer details
        userAnswerSpan.textContent = userAnswer || 'Skipped';
        correctAnswerSpan.textContent = correctAnswer;
        pointsEarned.textContent = isCorrect ? '10' : '0';
        
        // Show correct/incorrect styling on options
        document.querySelectorAll('.option').forEach(option => {
            const optionLetter = option.dataset.option;
            if (optionLetter === correctAnswer) {
                option.classList.add('correct');
            } else if (optionLetter === userAnswer && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Show feedback panel
        feedbackPanel.style.display = 'block';
        
        // Scroll to feedback
        feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.questions.length) {
            this.finishQuiz();
        } else {
            this.displayQuestion();
        }
    }

    // ===================================
    // Timer Management
    // ===================================
    
    startQuestionTimer() {
        this.questionStartTime = new Date();
        this.updateQuestionTimer();
        
        this.questionTimer = setInterval(() => {
            this.updateQuestionTimer();
        }, 1000);
    }

    updateQuestionTimer() {
        if (!this.questionStartTime) return;
        
        const elapsed = Math.floor((new Date() - this.questionStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        
        document.getElementById('timerDisplay').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    resetQuestionTimer() {
        if (this.questionTimer) {
            clearInterval(this.questionTimer);
            this.questionTimer = null;
        }
        document.getElementById('timerDisplay').textContent = '--:--';
    }

    getQuestionTimeSpent() {
        if (!this.questionStartTime) return 0;
        return Math.floor((new Date() - this.questionStartTime) / 1000);
    }

    // ===================================
    // Quiz Completion
    // ===================================
    
    finishQuiz() {
        this.endTime = new Date();
        
        // Stop any running timers
        this.resetQuestionTimer();
        
        // Calculate results
        const results = this.calculateResults();
        
        // Hide quiz interface and show results
        document.getElementById('quizInterface').style.display = 'none';
        document.getElementById('quizResults').style.display = 'block';
        
        // Display results
        this.displayResults(results);
    }

    calculateResults() {
        const totalQuestions = this.questions.length;
        const correctAnswers = this.userAnswers.filter(answer => answer.isCorrect).length;
        const incorrectAnswers = totalQuestions - correctAnswers;
        const skippedQuestions = this.userAnswers.filter(answer => answer.skipped).length;
        const score = Math.round((correctAnswers / totalQuestions) * 100);
        const totalTime = Math.floor((this.endTime - this.startTime) / 1000);
        
        return {
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            skippedQuestions,
            score,
            totalTime,
            userAnswers: this.userAnswers
        };
    }

    displayResults(results) {
        document.getElementById('finalScore').textContent = `${results.score}%`;
        document.getElementById('correctAnswers').textContent = results.correctAnswers;
        document.getElementById('incorrectAnswers').textContent = results.incorrectAnswers;
        
        const timeSpent = this.formatTime(results.totalTime);
        document.getElementById('timeSpent').textContent = timeSpent;
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // ===================================
    // Quiz Controls
    // ===================================
    
    pauseQuiz() {
        // Implement pause functionality
        console.log('Quiz paused');
    }

    exitQuiz() {
        if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
            this.backToSelection();
        }
    }

    retakeQuiz() {
        if (this.currentLevel) {
            this.startQuiz(this.currentLevel);
        }
    }

    // ===================================
    // Utility Methods
    // ===================================
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    renderTable(tableData, container) {
        if (!tableData || !container) return;

        const { name, columns, rows } = tableData;

        // Create table name header
        const tableName = document.createElement('div');
        tableName.className = 'question-table-name';
        tableName.textContent = name || 'TABLE';

        // Create table element
        const table = document.createElement('table');
        table.className = 'question-table';

        // Create header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        columns.forEach(column => {
            const th = document.createElement('th');
            th.textContent = column;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create body with rows
        const tbody = document.createElement('tbody');
        
        if (rows && rows.length > 0) {
            rows.forEach(row => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
        } else {
            // If no rows provided, show column headers only
            const tr = document.createElement('tr');
            columns.forEach(() => {
                const td = document.createElement('td');
                td.textContent = '—';
                td.style.color = 'var(--text-muted)';
                td.style.fontStyle = 'italic';
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        }
        
        table.appendChild(tbody);

        // Clear container and append
        container.innerHTML = '';
        container.appendChild(tableName);
        container.appendChild(table);
    }

    viewExplanations() {
        // Implement explanations view
        console.log('View explanations');
    }

    backToSelection() {
        // Reset everything
        this.currentLevel = null;
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        
        // Stop timers
        this.resetQuestionTimer();
        
        // Show selection and hide other sections
        document.getElementById('quizSelection').style.display = 'block';
        document.getElementById('quizInterface').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
    }

    // ===================================
    // Utility Methods
    // ===================================
    
    showLoadingState() {
        // Implement loading state
        console.log('Loading quiz...');
    }

    showError(message) {
        alert(message);
    }
}

// ===================================
// Initialize Quiz Engine
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    window.quizEngine = new QuizEngine();
});
