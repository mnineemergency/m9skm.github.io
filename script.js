document.getElementById('deal-button').addEventListener('click', dealCards); // Deal Button Click Event

function dealCards() {
    const playerCards = generateRandomCards(3);
    const dealerCards = generateRandomCards(3);

    displayCards('player-cards', playerCards); // Display Player's Cards
    displayCards('dealer-cards', dealerCards); // Display Dealer's Cards
}

function generateRandomCards(number) {
    const cards = [];
    for (let i = 0; i < number; i++) {
        const cardValue = Math.floor(Math.random() * 10) + 1; // Generate Random Card Value (1-10)
        cards.push(cardValue);
    }
    return cards;
}

function displayCards(containerId, cards) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear Existing Cards

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card'; // Apply Card Styling
        cardDiv.textContent = card; // Display Card Value
        container.appendChild(cardDiv);
    });
}
