(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const buttons = Array.from(document.querySelectorAll('.assignment-filter .filter-btn'));
        const cards = Array.from(document.querySelectorAll('.assignment-card'));
        if (!buttons.length || !cards.length) {
            return;
        }

        const setActive = (selected) => {
            buttons.forEach((btn) => {
                const isActive = btn === selected;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', String(isActive));
                btn.setAttribute('tabindex', isActive ? '0' : '-1');
            });
        };

        const applyFilter = (filter) => {
            cards.forEach((card) => {
                const category = card.getAttribute('data-category');
                const show = filter === 'all' || category === filter;
                card.classList.toggle('hidden', !show);
                card.setAttribute('aria-hidden', String(!show));
            });
        };

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                setActive(button);
                applyFilter(filter);
            });

            button.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    button.click();
                }
            });
        });

        // Initialize default filter
        applyFilter('all');
    });
})();
