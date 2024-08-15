document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ribbit! Your message has been sent to the pond.');
});

// Add some humor with a random quote
const funnyQuotes = [
    "Why did the frog use a phone? Because he wanted to make some hops!",
    "What do you call a frog with no legs? A croaker.",
    "In the land of FrogyOnSol, every leap is a step towards wealth."
];

document.getElementById('funnyFooter').innerText = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
