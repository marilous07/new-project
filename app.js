// Συνάρτηση που φορτώνει την αρχική σελίδα
function loadHome() {
    // Καθαρίστε το περιεχόμενο του "content" div
    document.getElementById("content").innerHTML = "";

    // Δημιουργία του περιεχομένου της αρχικής σελίδας
    const homeContent = document.createElement("div");
    homeContent.innerHTML = `
        <h2>Welcome to Maelin Travel</h2>
        <p>Your Gateway to Exciting Adventures</p>
        <!-- Προσθέστε περισσότερο περιεχόμενο εδώ -->
    `;

    // Προσθέστε το περιεχόμενο στο "content" div
    document.getElementById("content").appendChild(homeContent);
}

// Συνάρτηση που φορτώνει τη σελίδα "About Us"
function loadAbout() {
    // Καθαρίστε το περιεχόμενο του "content" div
    document.getElementById("content").innerHTML = "";

    // Δημιουργία του περιεχομένου της σελίδας "About Us"
    const aboutContent = document.createElement("div");
    aboutContent.innerHTML = `
        <h2>About Us</h2>
        <p>Learn more about our company and our team.</p>
        <!-- Προσθέστε περισσότερο περιεχόμενο εδώ -->
    `;

    // Προσθέστε το περιεχόμενο στο "content" div
    document.getElementById("content").appendChild(aboutContent);
}

// Συνάρτηση που φορτώνει τη σελίδα "Destinations"
function loadDestinations() {
    // Καθαρίστε το περιεχόμενο του "content" div
    document.getElementById("content").innerHTML = "";

    // Δημιουργία του περιεχομένου της σελίδας "Destinations"
    const destinationsContent = document.createElement("div");
    destinationsContent.innerHTML = `
        <h2>Destinations</h2>
        <p>Explore our top travel destinations.</p>
        <!-- Προσθέστε περισσότερο περιεχόμενο εδώ -->
    `;

    // Προσθέστε το περιεχόμενο στο "content" div
    document.getElementById("content").appendChild(destinationsContent);
}

// Συνάρτηση που φορτώνει τη σελίδα "Contact"
function loadContact() {
    // Καθαρίστε το περιεχόμενο του "content" div
    document.getElementById("content").innerHTML = "";

    // Δημιουργία του περιεχομένου της σελίδας "Contact"
    const contactContent = document.createElement("div");
    contactContent.innerHTML = `
        <h2>Contact Us</h2>
        <p>Get in touch with us for inquiries and support.</p>
        <!-- Προσθέστε περισσότερο περιεχόμενο εδώ -->
    `;

    // Προσθέστε το περιεχόμενο στο "content" div
    document.getElementById("content").appendChild(contactContent);
}

// Προσθέστε ακόμη συναρτήσεις για άλλες σελίδες αν χρειάζεται

// Αρχική φόρτωση της αρχικής σελίδας
loadHome();
