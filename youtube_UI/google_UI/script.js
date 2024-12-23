document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    
    if (query) {
        // Redirect to Google search with the query
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

// Allow pressing Enter to trigger the search
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
