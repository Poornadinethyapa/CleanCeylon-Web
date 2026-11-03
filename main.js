// Local Data Array (Expanded Database with SVGs integrated in logic)
const wasteData = [
    { name: "Plastic Bottle", category: "Recyclable", instructions: "Rinse and crush before placing in the plastic recycling bin." },
    { name: "Battery", category: "Hazardous", instructions: "Do not throw in regular trash. Take to an e-waste collection center." },
    { name: "Glass Jar", category: "Recyclable", instructions: "Rinse well. If broken, wrap securely in newspaper before disposal." },
    { name: "Food Scraps", category: "Compostable", instructions: "Use for home composting or place in the organic waste bin." },
    { name: "Cardboard Box", category: "Recyclable", instructions: "Flatten completely and keep dry. Place in the paper/cardboard recycling bin." },
    { name: "Mobile Phone", category: "E-Waste", instructions: "Wipe all personal data. Hand over to certified e-waste recyclers like Cleantech." },
    { name: "Polythene Bag", category: "Non-Recyclable", instructions: "Avoid use when possible. Dispose of in the general waste bin as most local centers do not recycle these." },
    { name: "Aluminum Can", category: "Recyclable", instructions: "Empty, rinse, and crush to save space. Place in the metal recycling bin." },
    { name: "CFL Light Bulb", category: "Hazardous", instructions: "Contains toxic mercury. Wrap carefully so it does not break and take to an e-waste drop-off." },
    { name: "Old Clothing", category: "Donation", instructions: "If in good condition, donate to a local charity. Otherwise, repurpose as cleaning rags." }
];

// Select HTML elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsArea = document.getElementById('resultsArea');

// Generate SVG Icons based on Category
function getCategoryIcon(category) {
    if (category === "Recyclable") {
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b7235" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`; 
    } else if (category === "Hazardous" || category === "E-Waste") {
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`; 
    } else if (category === "Compostable") {
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b7235" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>`; 
    } else {
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>`; 
    }
}

// Search Functionality
function searchWaste() {
    const query = searchInput.value.toLowerCase().trim();
    resultsArea.innerHTML = ''; 

    if (query === "") {
        resultsArea.innerHTML = '<p>Please enter an item to search.</p>';
        return;
    }

    const results = wasteData.filter(item => item.name.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p class="category-label">${getCategoryIcon(item.category)} <strong>Category:</strong> ${item.category}</p>
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

// EcoChallenge Quiz Logic
function checkAnswer(answer) {
    const feedbackElement = document.getElementById('quizFeedback');
    
    if (answer === 'correct') {
        feedbackElement.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b7235" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 5px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Correct! Broken glass should be wrapped and placed in the Red Bin.`;
        feedbackElement.style.color = "#4b7235"; 
    } else {
        feedbackElement.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 5px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not quite! Glass items belong in the Red Bin.`;
        feedbackElement.style.color = "#d32f2f"; 
    }
}
// Cleanup Events Data (Mock Database)
const eventsData = [
    { id: 1, title: "Belihuloya Campus Cleanup", date: "Nov 15, 2026", location: "Sabaragamuwa University", volunteers: 24 },
    { id: 2, title: "Galle Face Beach Sweep", date: "Nov 20, 2026", location: "Galle Face Green, Colombo", volunteers: 58 },
    { id: 3, title: "Kandy Lake Shramadana", date: "Nov 28, 2026", location: "Kandy Lake Round", volunteers: 12 }
];

// Render Events to the Page
function renderEvents() {
    const eventGrid = document.getElementById('eventGrid');
    if (!eventGrid) return;
    
    eventGrid.innerHTML = ''; 
    
    eventsData.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <h3>${event.title}</h3>
            <div class="event-meta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                ${event.date}
            </div>
            <div class="event-meta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${event.location}
            </div>
            <div class="volunteer-count">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b7235" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span id="vol-count-${event.id}">${event.volunteers} Volunteers</span>
            </div>
            <button class="btn rsvp-btn" id="btn-${event.id}" onclick="joinEvent(${event.id})">Count Me In</button>
        `;
        eventGrid.appendChild(card);
    });
}

// RSVP Interaction Logic
function joinEvent(id) {
    const btn = document.getElementById(`btn-${id}`);
    const countSpan = document.getElementById(`vol-count-${id}`);
    
    // Prevent clicking multiple times
    if (!btn.classList.contains('joined')) {
        const event = eventsData.find(e => e.id === id);
        if (event) {
            event.volunteers++;
            countSpan.innerText = `${event.volunteers} Volunteers`;
            btn.classList.add('joined');
            btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: text-bottom; margin-right: 5px;"><polyline points="20 6 9 17 4 12"></polyline></svg> You're In!`;
        }
    }
}

// Initialize on page load
renderEvents();
// Report Form Logic
const reportForm = document.getElementById('reportForm');
if (reportForm) {
    reportForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the default page reload
        
        const btn = this.querySelector('button[type="submit"]');
        const feedback = document.getElementById('formFeedback');
        
        // Update UI to simulate successful submission
        btn.style.display = 'none';
        feedback.style.color = '#4b7235';
        feedback.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 5px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Report submitted successfully to local municipal authorities!`;
        
        // Clear the input fields
        this.reset();
    });
}
// EcoChallenge Quiz Data & Logic
const quizQuestions = [
    {
        question: "Which bin should you use for a broken glass bottle?",
        options: ["Blue Bin (Paper)", "Red Bin (Glass)", "Orange Bin (Plastic)"],
        correctAnswer: 1, // Refers to "Red Bin (Glass)" (index 1)
        feedback: "Glass items belong in the Red Bin. Always wrap broken glass securely!"
    },
    {
        question: "What is the most eco-friendly way to dispose of food scraps?",
        options: ["Throw in general trash", "Burn in the garden", "Start a compost bin"],
        correctAnswer: 2,
        feedback: "Composting turns organic waste into nutrient-rich soil for your garden."
    },
    {
        question: "Where should you dispose of an old mobile phone?",
        options: ["Regular trash bin", "Certified e-waste center", "Bury it underground"],
        correctAnswer: 1,
        feedback: "E-waste contains toxic heavy metals and must be handled by certified centers."
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('questionText').innerText = q.question;
    
    const optionsDiv = document.getElementById('quizOptions');
    optionsDiv.innerHTML = ''; // Clear previous options
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn quiz-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('quizFeedback').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const q = quizQuestions[currentQuestionIndex];
    const feedbackElement = document.getElementById('quizFeedback');
    const nextBtn = document.getElementById('nextBtn');
    const buttons = document.querySelectorAll('#quizOptions .quiz-btn');
    
    // Disable buttons after clicking
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === q.correctAnswer) {
        score++;
        feedbackElement.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b7235" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 5px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Correct! ${q.feedback}`;
        feedbackElement.style.color = "#4b7235"; 
    } else {
        feedbackElement.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 5px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not quite! ${q.feedback}`;
        feedbackElement.style.color = "#d32f2f"; 
    }
    
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById('questionText').innerText = `Quiz Complete! You scored ${score} out of ${quizQuestions.length}.`;
        document.getElementById('quizOptions').innerHTML = '';
        document.getElementById('quizFeedback').innerHTML = '';
        document.getElementById('nextBtn').style.display = 'none';
        
        // Add a restart button
        const restartBtn = document.createElement('button');
        restartBtn.className = 'btn rsvp-btn';
        restartBtn.innerText = 'Restart Quiz';
        restartBtn.onclick = () => {
            currentQuestionIndex = 0;
            score = 0;
            loadQuestion();
        };
        document.getElementById('quizOptions').appendChild(restartBtn);
    }
}

// Initialize the first question when the script loads
loadQuestion();