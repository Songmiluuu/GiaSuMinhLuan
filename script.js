function showTab(event, tabId) {
    event.preventDefault();
    
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(tabContent) {
        tabContent.style.display = 'none';
    });

    // Remove active class from all tabs
    var tabs = document.querySelectorAll('nav ul li a');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    var selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';

    // Add active class to the clicked tab
    event.currentTarget.classList.add('active');
}

// Show the first tab by default
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav ul li a').click();
});
