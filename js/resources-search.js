/**
 * Resources Search Functionality
 * Provides search and filter capabilities for the resources page
 */

class ResourcesSearch {
    constructor() {
        this.searchInput = document.getElementById('resourcesSearch');
        this.clearSearchBtn = document.getElementById('clearSearch');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.clearAllFiltersBtn = document.getElementById('clearAllFilters');
        this.searchResultsInfo = document.getElementById('searchResultsInfo');
        this.searchResultsCount = document.getElementById('searchResultsCount');
        this.resourceCards = document.querySelectorAll('.resource-card');
        
        this.currentSearchTerm = '';
        this.currentFilter = 'all';
        this.searchTimeout = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.indexResources();
    }
    
    setupEventListeners() {
        // Search input
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
            
            this.searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.clearSearch();
                }
            });
        }
        
        // Clear search button
        if (this.clearSearchBtn) {
            this.clearSearchBtn.addEventListener('click', () => {
                this.clearSearch();
            });
        }
        
        // Filter buttons
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveFilter(e.target.dataset.filter);
            });
        });
        
        // Clear all filters
        if (this.clearAllFiltersBtn) {
            this.clearAllFiltersBtn.addEventListener('click', () => {
                this.clearAllFilters();
            });
        }
    }
    
    indexResources() {
        // Add data attributes to resource cards for better searching
        this.resourceCards.forEach(card => {
            const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent?.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            const badge = card.querySelector('.resource-badge')?.textContent?.toLowerCase() || '';
            
            // Store searchable content
            card.dataset.searchableContent = `${title} ${description} ${tags.join(' ')} ${badge}`;
            card.dataset.badge = badge;
        });
    }
    
    handleSearch(searchTerm) {
        // Clear previous timeout
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        
        // Debounce search
        this.searchTimeout = setTimeout(() => {
            this.currentSearchTerm = searchTerm.toLowerCase().trim();
            this.performSearch();
            this.updateClearButton();
        }, 300);
    }
    
    performSearch() {
        let visibleCount = 0;
        
        this.resourceCards.forEach(card => {
            const matchesSearch = this.matchesSearchTerm(card);
            const matchesFilter = this.matchesFilter(card);
            const shouldShow = matchesSearch && matchesFilter;
            
            if (shouldShow) {
                card.classList.remove('hidden');
                card.classList.add('highlighted');
                visibleCount++;
                
                // Highlight search terms
                this.highlightSearchTerms(card);
            } else {
                card.classList.add('hidden');
                card.classList.remove('highlighted');
                this.removeHighlights(card);
            }
        });
        
        this.updateSearchResults(visibleCount);
        this.updateSectionHeaders();
    }
    
    matchesSearchTerm(card) {
        if (!this.currentSearchTerm) return true;
        
        const searchableContent = card.dataset.searchableContent || '';
        return searchableContent.includes(this.currentSearchTerm);
    }
    
    matchesFilter(card) {
        if (this.currentFilter === 'all') return true;
        
        const badge = card.dataset.badge || '';
        return badge === this.currentFilter;
    }
    
    highlightSearchTerms(card) {
        if (!this.currentSearchTerm) return;
        
        const elements = card.querySelectorAll('h3, p, .tag');
        elements.forEach(element => {
            const originalText = element.textContent;
            const highlightedText = this.highlightText(originalText, this.currentSearchTerm);
            element.innerHTML = highlightedText;
        });
    }
    
    highlightText(text, searchTerm) {
        if (!searchTerm) return text;
        
        const regex = new RegExp(`(${this.escapeRegex(searchTerm)})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }
    
    removeHighlights(card) {
        const elements = card.querySelectorAll('h3, p, .tag');
        elements.forEach(element => {
            const highlightedSpans = element.querySelectorAll('.search-highlight');
            highlightedSpans.forEach(span => {
                span.outerHTML = span.textContent;
            });
        });
    }
    
    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    setActiveFilter(filter) {
        this.currentFilter = filter;
        
        // Update active button
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });
        
        this.performSearch();
    }
    
    clearSearch() {
        this.searchInput.value = '';
        this.currentSearchTerm = '';
        this.performSearch();
        this.updateClearButton();
        this.searchInput.focus();
    }
    
    clearAllFilters() {
        this.clearSearch();
        this.setActiveFilter('all');
    }
    
    updateClearButton() {
        if (this.currentSearchTerm) {
            this.clearSearchBtn.style.display = 'flex';
        } else {
            this.clearSearchBtn.style.display = 'none';
        }
    }
    
    updateSearchResults(count) {
        this.searchResultsCount.textContent = count;
        
        if (this.currentSearchTerm || this.currentFilter !== 'all') {
            this.searchResultsInfo.style.display = 'flex';
        } else {
            this.searchResultsInfo.style.display = 'none';
        }
    }
    
    updateSectionHeaders() {
        // Hide/show section headers based on visible content
        const sections = document.querySelectorAll('.resources-section');
        
        sections.forEach(section => {
            const visibleCards = section.querySelectorAll('.resource-card:not(.hidden)');
            const sectionHeader = section.querySelector('.section-header');
            
            if (visibleCards.length === 0) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
    }
}

// Initialize search functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize on resources page
    if (document.getElementById('resourcesSearch')) {
        new ResourcesSearch();
    }
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ResourcesSearch;
}
