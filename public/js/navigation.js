// Injects the modular navigation components into the page
document.addEventListener("DOMContentLoaded", () => {
    
    // Fetch and inject Header Component
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) headerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Fetch and inject Bottom Navigation Component
    fetch('/components/bottom-nav.html')
        .then(response => response.text())
        .then(data => {
            const bottomNavPlaceholder = document.getElementById('bottom-nav-placeholder');
            if (bottomNavPlaceholder) bottomNavPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading bottom navigation:', error));
        
});