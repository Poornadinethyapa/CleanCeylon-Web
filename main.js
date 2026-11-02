// Local Data Array (Mock Database)
const wasteData = [
    { name: "Plastic Bottle", category: "Recyclable ♻️", instructions: "Rinse and crush before placing in the plastic recycling bin." },
    { name: "Battery", category: "Hazardous ⚠️", instructions: "Do not throw in regular trash. Take to an e-waste collection center." },
    { name: "Glass Jar", category: "Recyclable ♻️", instructions: "Rinse well. If broken, wrap securely in newspaper before disposal." },
    { name: "Food Scraps", category: "Compostable 🌱", instructions: "Use for home composting or place in the organic waste bin." }
];

// Select HTML elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsArea = document.getElementById('resultsArea');

// Search Functionality
function searchWaste() {
    const query = searchInput.value.toLowerCase().trim();
    resultsArea.innerHTML = ''; // Clear previous results

    if (query === "") {
        resultsArea.innerHTML = '<p>Please enter an item to search.</p>';
        return;
    }

    // Filter data based on input
    const results = wasteData.filter(item => item.name.toLowerCase().includes(query));

    // Display results
    if (results.length > 0) {
        results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Category:</strong> ${item.category}</p>
                <p>${item.instructions}</p>
            `;
            resultsArea.appendChild(card);
        });
    } else {
        resultsArea.innerHTML = '<p>Item not found. Try searching for "plastic" or "battery".</p>';
    }
}

// Event Listeners for clicking the button or pressing Enter
searchBtn.addEventListener('click', searchWaste);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchWaste();
});