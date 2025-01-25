const sampleData = [
    "Apple"
];

function performSearch() {
    const input = document.getElementById('input').ariaValueMax.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    const filtered = sampleData.filter(item => item.toLowerCase().includes(input));

    filtered.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.textContent = item;
        searchResults.appendChild(resultItem);
    });

    if (filtered.length === 0 && input !== '') {
        results.innerHTML = '<p>No results found</p>';
    }
}