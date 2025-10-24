// ===================================
// CS Q&A Examination System - Scoring System
// ===================================

class QuizScoring {
    constructor() {
        this.scoringRules = {
            correctAnswer: 10,
            incorrectAnswer: 0,
            skippedQuestion: 0,
            timeBonus: true,
            streakBonus: true
        };
    }

    // ===================================
    // Score Calculation
    // ===================================
    
    calculateScore(userAnswers, totalQuestions, timeSpent) {
        const baseScore = this.calculateBaseScore(userAnswers);
        const timeBonus = this.calculateTimeBonus(userAnswers, timeSpent);
        const streakBonus = this.calculateStreakBonus(userAnswers);
        
        const totalScore = baseScore + timeBonus + streakBonus;
        const percentage = Math.round((totalScore / (totalQuestions * 10)) * 100);
        
        return {
            baseScore: baseScore,
            timeBonus: timeBonus,
            streakBonus: streakBonus,
            totalScore: totalScore,
            percentage: percentage,
            maxPossibleScore: totalQuestions * 10
        };
    }

    calculateBaseScore(userAnswers) {
        let score = 0;
        
        userAnswers.forEach(answer => {
            if (answer.isCorrect) {
                score += this.scoringRules.correctAnswer;
            }
            // Skipped and incorrect answers get 0 points
        });
        
        return score;
    }

    calculateTimeBonus(userAnswers, totalTimeSpent) {
        if (!this.scoringRules.timeBonus) return 0;
        
        const averageTimePerQuestion = totalTimeSpent / userAnswers.length;
        const bonusThreshold = 30; // seconds per question
        
        if (averageTimePerQuestion <= bonusThreshold) {
            const timeSaved = bonusThreshold - averageTimePerQuestion;
            return Math.round(timeSaved * 0.5); // 0.5 points per second saved
        }
        
        return 0;
    }

    calculateStreakBonus(userAnswers) {
        if (!this.scoringRules.streakBonus) return 0;
        
        let currentStreak = 0;
        let maxStreak = 0;
        let bonus = 0;
        
        userAnswers.forEach(answer => {
            if (answer.isCorrect) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
            } else {
                currentStreak = 0;
            }
        });
        
        // Bonus for streaks of 5 or more correct answers
        if (maxStreak >= 5) {
            bonus = Math.floor(maxStreak / 5) * 5; // 5 points for every 5-question streak
        }
        
        return bonus;
    }

    // ===================================
    // Performance Analysis
    // ===================================
    
    analyzePerformance(userAnswers, questions) {
        const analysis = {
            totalQuestions: userAnswers.length,
            correctAnswers: 0,
            incorrectAnswers: 0,
            skippedQuestions: 0,
            averageTimePerQuestion: 0,
            strongestTopics: [],
            weakestTopics: [],
            recommendations: []
        };
        
        let totalTime = 0;
        const topicPerformance = {};
        
        userAnswers.forEach((answer, index) => {
            const question = questions[index];
            
            // Count answer types
            if (answer.skipped) {
                analysis.skippedQuestions++;
            } else if (answer.isCorrect) {
                analysis.correctAnswers++;
            } else {
                analysis.incorrectAnswers++;
            }
            
            // Calculate time
            totalTime += answer.timeSpent || 0;
            
            // Analyze by topic (if available)
            if (question.topic) {
                if (!topicPerformance[question.topic]) {
                    topicPerformance[question.topic] = { correct: 0, total: 0 };
                }
                topicPerformance[question.topic].total++;
                if (answer.isCorrect) {
                    topicPerformance[question.topic].correct++;
                }
            }
        });
        
        analysis.averageTimePerQuestion = Math.round(totalTime / userAnswers.length);
        
        // Analyze topic performance
        Object.keys(topicPerformance).forEach(topic => {
            const performance = topicPerformance[topic];
            const accuracy = (performance.correct / performance.total) * 100;
            
            if (accuracy >= 80) {
                analysis.strongestTopics.push(topic);
            } else if (accuracy < 60) {
                analysis.weakestTopics.push(topic);
            }
        });
        
        // Generate recommendations
        analysis.recommendations = this.generateRecommendations(analysis, topicPerformance);
        
        return analysis;
    }

    generateRecommendations(analysis, topicPerformance) {
        const recommendations = [];
        
        // Overall performance recommendations
        if (analysis.percentage >= 90) {
            recommendations.push("Excellent performance! Consider taking the next difficulty level.");
        } else if (analysis.percentage >= 70) {
            recommendations.push("Good performance! Review the incorrect answers to improve further.");
        } else if (analysis.percentage >= 50) {
            recommendations.push("Fair performance. Focus on the topics you struggled with and retake the quiz.");
        } else {
            recommendations.push("Consider reviewing the fundamentals before retaking this quiz.");
        }
        
        // Time-based recommendations
        if (analysis.averageTimePerQuestion > 60) {
            recommendations.push("Try to answer questions more quickly. Practice with similar questions to improve speed.");
        } else if (analysis.averageTimePerQuestion < 15) {
            recommendations.push("Great speed! Make sure you're not rushing and missing important details.");
        }
        
        // Topic-specific recommendations
        if (analysis.weakestTopics.length > 0) {
            recommendations.push(`Focus on improving your knowledge of: ${analysis.weakestTopics.join(', ')}`);
        }
        
        // Skipped questions recommendation
        if (analysis.skippedQuestions > 0) {
            recommendations.push(`You skipped ${analysis.skippedQuestions} questions. Try to answer all questions for better practice.`);
        }
        
        return recommendations;
    }

    // ===================================
    // Grade Assignment
    // ===================================
    
    assignGrade(percentage) {
        if (percentage >= 97) return { grade: 'A+', description: 'Outstanding' };
        if (percentage >= 93) return { grade: 'A', description: 'Excellent' };
        if (percentage >= 90) return { grade: 'A-', description: 'Very Good' };
        if (percentage >= 87) return { grade: 'B+', description: 'Good' };
        if (percentage >= 83) return { grade: 'B', description: 'Above Average' };
        if (percentage >= 80) return { grade: 'B-', description: 'Average' };
        if (percentage >= 77) return { grade: 'C+', description: 'Below Average' };
        if (percentage >= 73) return { grade: 'C', description: 'Needs Improvement' };
        if (percentage >= 70) return { grade: 'C-', description: 'Poor' };
        if (percentage >= 67) return { grade: 'D+', description: 'Very Poor' };
        if (percentage >= 63) return { grade: 'D', description: 'Unsatisfactory' };
        if (percentage >= 60) return { grade: 'D-', description: 'Failing' };
        return { grade: 'F', description: 'Failed' };
    }

    // ===================================
    // Achievement System
    // ===================================
    
    calculateAchievements(userAnswers, score, timeSpent) {
        const achievements = [];
        
        // Score-based achievements
        if (score.percentage === 100) {
            achievements.push({
                name: 'Perfect Score',
                description: 'Answered all questions correctly!',
                icon: 'fas fa-star',
                rarity: 'legendary'
            });
        }
        
        if (score.percentage >= 90) {
            achievements.push({
                name: 'Excellent Performance',
                description: 'Scored 90% or higher!',
                icon: 'fas fa-trophy',
                rarity: 'epic'
            });
        }
        
        // Speed achievements
        const averageTimePerQuestion = timeSpent / userAnswers.length;
        if (averageTimePerQuestion <= 20) {
            achievements.push({
                name: 'Speed Demon',
                description: 'Answered questions quickly!',
                icon: 'fas fa-bolt',
                rarity: 'rare'
            });
        }
        
        // Streak achievements
        const maxStreak = this.calculateMaxStreak(userAnswers);
        if (maxStreak >= 10) {
            achievements.push({
                name: 'Hot Streak',
                description: `Got ${maxStreak} questions correct in a row!`,
                icon: 'fas fa-fire',
                rarity: 'epic'
            });
        }
        
        // Completion achievements
        const skippedCount = userAnswers.filter(answer => answer.skipped).length;
        if (skippedCount === 0) {
            achievements.push({
                name: 'Completionist',
                description: 'Answered every question!',
                icon: 'fas fa-check-circle',
                rarity: 'rare'
            });
        }
        
        return achievements;
    }

    calculateMaxStreak(userAnswers) {
        let currentStreak = 0;
        let maxStreak = 0;
        
        userAnswers.forEach(answer => {
            if (answer.isCorrect) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
            } else {
                currentStreak = 0;
            }
        });
        
        return maxStreak;
    }

    // ===================================
    // Progress Tracking
    // ===================================
    
    trackProgress(userId, quizLevel, score, achievements) {
        // In a real implementation, this would save to a database
        const progressData = {
            userId: userId,
            quizLevel: quizLevel,
            score: score,
            achievements: achievements,
            timestamp: new Date().toISOString(),
            attempts: this.getAttemptCount(userId, quizLevel) + 1
        };
        
        // Save to localStorage for demo purposes
        const existingProgress = JSON.parse(localStorage.getItem('quizProgress') || '[]');
        existingProgress.push(progressData);
        localStorage.setItem('quizProgress', JSON.stringify(existingProgress));
        
        return progressData;
    }

    getAttemptCount(userId, quizLevel) {
        const progress = JSON.parse(localStorage.getItem('quizProgress') || '[]');
        return progress.filter(attempt => 
            attempt.userId === userId && attempt.quizLevel === quizLevel
        ).length;
    }

    getUserProgress(userId) {
        const progress = JSON.parse(localStorage.getItem('quizProgress') || '[]');
        return progress.filter(attempt => attempt.userId === userId);
    }

    // ===================================
    // Leaderboard
    // ===================================
    
    generateLeaderboard(quizLevel, limit = 10) {
        const progress = JSON.parse(localStorage.getItem('quizProgress') || '[]');
        const levelProgress = progress.filter(attempt => attempt.quizLevel === quizLevel);
        
        // Sort by score percentage
        levelProgress.sort((a, b) => b.score.percentage - a.score.percentage);
        
        return levelProgress.slice(0, limit).map((entry, index) => ({
            rank: index + 1,
            userId: entry.userId,
            score: entry.score.percentage,
            timeSpent: entry.timeSpent,
            achievements: entry.achievements.length,
            timestamp: entry.timestamp
        }));
    }
}

// ===================================
// Export for use in other scripts
// ===================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizScoring;
}
