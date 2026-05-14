/* Shared Traveloop helpers and data */

const DESTINATIONS = [
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    price: 3200,
    category: 'beach',
    short: 'Sunny beaches, lively markets, and water sports.',
    description: 'Enjoy palm-lined beaches, vibrant nightlife, and fresh seafood along the Arabian Sea.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900',
    rating: 4.8,
    highlights: ['Beach fun', 'Water sports', 'Nightlife'],
    bestTime: 'November - February'
  },
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    price: 2800,
    category: 'mountain',
    short: 'Snowy mountains, valleys, and adventure sports.',
    description: 'A high-altitude paradise for trekking, skiing, and cozy mountain stays.',
    image: 'https://images.unsplash.com/photo-1518684079-2d52c88533b5?w=900',
    rating: 4.7,
    highlights: ['Hiking', 'Snow sports', 'River views'],
    bestTime: 'October - March'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    price: 2400,
    category: 'cultural',
    short: 'Palaces, forts, and colorful markets in the Pink City.',
    description: 'Experience royal heritage, traditional crafts, and iconic architecture.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
    rating: 4.6,
    highlights: ['Heritage', 'Culture', 'Food'],
    bestTime: 'October - March'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    state: 'Kerala',
    price: 3300,
    category: 'adventure',
    short: 'Backwaters, spice gardens, and relaxing houseboats.',
    description: 'Cruise calm backwaters, visit tea estates, and unwind in lush landscapes.',
    image: 'https://images.unsplash.com/photo-1501889088090-2d1ec7c6b05c?w=900',
    rating: 4.9,
    highlights: ['Backwaters', 'Nature', 'Wellness'],
    bestTime: 'September - March'
  }
];

const DESTINATION_CATEGORIES = {
  beaches: {
    name: 'Beaches',
    destinations: DESTINATIONS.filter(dest => dest.category === 'beach')
  },
  mountains: {
    name: 'Mountains',
    destinations: DESTINATIONS.filter(dest => dest.category === 'mountain')
  },
  cultural: {
    name: 'Cultural',
    destinations: DESTINATIONS.filter(dest => dest.category === 'cultural')
  },
  adventure: {
    name: 'Adventure',
    destinations: DESTINATIONS.filter(dest => dest.category === 'adventure')
  }
};

const ALL_STATES = [
  { name: 'Goa', destinations: ['Baga Beach', 'Candolim Beach', 'Anjuna Beach'] },
  { name: 'Rajasthan', destinations: ['Jaipur', 'Udaipur', 'Jaisalmer'] },
  { name: 'Himachal Pradesh', destinations: ['Manali', 'Dharamshala', 'Shimla'] },
  { name: 'Kerala', destinations: ['Alleppey', 'Munnar', 'Kochi'] }
];

let currentFilter = 'all';
let currentSearchQuery = '';

function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function findDestinationById(id) {
  return DESTINATIONS.find(dest => dest.id === id);
}

function renderCards(container, cards = []) {
  if (!container) return;
  if (!cards.length) {
    container.innerHTML = '<div class="empty-state">No destinations available right now.</div>';
    return;
  }

  container.innerHTML = cards.map(dest => `
    <div class="card slide-up">
      <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
      <div class="card-body">
        <h3>${dest.name}</h3>
        <p>${dest.short || dest.description}</p>
        <div class="card-meta">
          <span>${dest.state || ''}</span>
          <span>₹${dest.price?.toLocaleString() || 'N/A'} / day</span>
        </div>
        <div class="card-actions">
          <a href="details.html?destination=${dest.id}" class="btn">View Details</a>
          <button class="btn-secondary" type="button" onclick="selectDestinationAndBook('${dest.id}')">Book Now</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderHomeCards() {
  const container = document.getElementById('home-cards');
  if (!container) return;
  const cards = DESTINATIONS.slice(0, 4);
  renderCards(container, cards);
}

function selectDestinationAndBook(destinationId) {
  if (!destinationId) return;
  localStorage.setItem('selected_destination', destinationId);
  window.location.href = 'booking.html';
}

function updateTravelPrice() {
  const select = document.getElementById('destinationSelect');
  if (!select) return;
  const selectedId = select.value;
  const destination = findDestinationById(selectedId);
  if (!destination) return;

  const pricePreview = document.getElementById('travelPricePreview');
  if (pricePreview) {
    pricePreview.textContent = `Estimated base price: ₹${destination.price.toLocaleString()} per day`;
  }
}

function planDetailedTrip() {
  const select = document.getElementById('destinationSelect');
  if (!select || !select.value) {
    alert('Please choose a destination first.');
    return;
  }
  localStorage.setItem('selected_destination', select.value);
  window.location.href = 'booking.html';
}

function showCategoryDestinations(categoryKey) {
  if (typeof handleFilter === 'function') {
    handleFilter(categoryKey);
    return;
  }
  if (typeof showAllStates === 'function' && categoryKey === 'states') {
    showAllStates();
  }
}

function updateNavigation() {
  const navLinks = document.getElementById('mainNavLinks');
  if (!navLinks) return;

  const loggedIn = isLoggedIn();
  const existingProfile = navLinks.querySelector('a[href="profile.html"]');
  const existingLogout = navLinks.querySelector('a[href="#logout"]');
  const existingLogin = navLinks.querySelector('a[href="login.html"]');
  const existingSignup = navLinks.querySelector('a[href="signup.html"]');

  if (loggedIn) {
    if (existingLogin) existingLogin.parentElement.remove();
    if (existingSignup) existingSignup.parentElement.remove();

    if (!existingProfile) {
      const profileItem = document.createElement('li');
      profileItem.innerHTML = '<a href="profile.html">Profile</a>';
      navLinks.appendChild(profileItem);
    }
    if (!existingLogout) {
      const logoutItem = document.createElement('li');
      logoutItem.innerHTML = '<a href="#logout" onclick="logoutUser()">Logout</a>';
      navLinks.appendChild(logoutItem);
    }
  } else {
    if (existingProfile) existingProfile.parentElement.remove();
    if (existingLogout) existingLogout.parentElement.remove();
    if (!existingLogin) {
      const loginItem = document.createElement('li');
      loginItem.innerHTML = '<a href="login.html">Sign In</a>';
      navLinks.appendChild(loginItem);
    }
    if (!existingSignup) {
      const signupItem = document.createElement('li');
      signupItem.innerHTML = '<a href="signup.html">Sign Up</a>';
      navLinks.appendChild(signupItem);
    }
  }
}

function isLoggedIn() {
  return !!localStorage.getItem('Traveloop_token');
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('Traveloop_user') || 'null');
}

function logoutUser() {
  localStorage.removeItem('Traveloop_token');
  localStorage.removeItem('Traveloop_user');
  updateNavigation();
  window.location.href = 'index.html';
}

function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem('Traveloop_users') || '[]');
  const normalized = String(email).trim().toLowerCase();
  const user = users.find(u => u.email.toLowerCase() === normalized || u.username.toLowerCase() === normalized);
  if (!user) {
    return { success: false, message: 'No account found with that email or username.' };
  }
  if (user.password !== password) {
    return { success: false, message: 'Incorrect password.' };
  }

  user.lastLogin = new Date().toISOString();
  localStorage.setItem('Traveloop_user', JSON.stringify(user));
  localStorage.setItem('Traveloop_token', `token_${Date.now()}`);
  localStorage.setItem('Traveloop_users', JSON.stringify(users));
  updateNavigation();
  return { success: true };
}

function registerUser(userData) {
  const users = JSON.parse(localStorage.getItem('Traveloop_users') || '[]');
  const email = String(userData.email).trim().toLowerCase();
  const username = String(userData.username).trim().toLowerCase();

  if (users.some(u => u.email.toLowerCase() === email)) {
    return { success: false, message: 'An account with this email already exists.' };
  }
  if (users.some(u => u.username.toLowerCase() === username)) {
    return { success: false, message: 'That username is already taken.' };
  }

  const newUser = {
    id: `user_${Date.now()}`,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email,
    username,
    password: userData.password,
    newsletter: !!userData.newsletter,
    createdAt: new Date().toISOString(),
    lastLogin: null
  };

  users.push(newUser);
  localStorage.setItem('Traveloop_users', JSON.stringify(users));
  return { success: true };
}

function loadDetailsPage() {
  const detailBox = document.getElementById('detail-box');
  if (!detailBox) return;

  const destinationId = getUrlParameter('destination');
  const destination = destinationId ? findDestinationById(destinationId) : null;

  if (!destination) {
    detailBox.innerHTML = `
      <div class="details-empty">
        <h2>Destination not found</h2>
        <p>Please select a destination from the Home or Destinations page.</p>
        <a href="destinations.html" class="btn">Browse Destinations</a>
      </div>
    `;
    return;
  }

  detailBox.innerHTML = `
    <div class="detail-card">
      <img src="${destination.image}" alt="${destination.name}" />
      <div class="detail-content">
        <h1>${destination.name}</h1>
        <p>${destination.description}</p>
        <div class="detail-meta">
          <span>State: ${destination.state}</span>
          <span>Category: ${destination.category}</span>
          <span>Price: ₹${destination.price.toLocaleString()}</span>
        </div>
        <div class="detail-highlights">
          <strong>Highlights:</strong>
          <ul>${destination.highlights.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="detail-actions">
          <button class="btn" type="button" onclick="selectDestinationAndBook('${destination.id}')">Book this trip</button>
          <a href="destinations.html" class="btn-secondary">Back to Destinations</a>
        </div>
      </div>
    </div>
  `;
}

function updateFooterYear() {
  const yearElements = document.querySelectorAll('#year, #year2, #year3');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  updateNavigation();
  updateFooterYear();
});
