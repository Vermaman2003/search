function filterResults() {
    const searchBox = document.getElementById('searchBox').value.toLowerCase();
    const categoryFilter = document.getElementById('category').value;
    const results = document.querySelectorAll('.result');

    results.forEach(result => {
        const title = result.querySelector('h2 a').textContent.toLowerCase();
        const category = result.getAttribute('data-category');

        const matchesSearch = title.includes(searchBox);
        const matchesCategory = categoryFilter === "" || category === categoryFilter;

        if (matchesSearch && matchesCategory) {
            result.style.display = ""; // Show the result
        } else {
            result.style.display = "none"; // Hide the result
        }
    });
}