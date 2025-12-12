

// Enhanced TravelMate Destinations Database
const DESTINATIONS = [
  {
    id: 'goa',
    name: 'Goa',
    category: 'beach',
    short: 'Beaches | Water Sports | Nightlife',
    info: 'Goa is famous for its pristine beaches, thrilling water sports, vibrant nightlife and delicious seafood cuisine.',
    best: 'November to February',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80&auto=format&fit=crop',
    price: 3000,
    rating: 4.5,
    reach: {
      flight: 'Dabolim Airport (GOI) or Mopa (GOX).',
      train: 'Madgaon Junction or Thivim.',
      road: 'Well connected by NH66 from Mumbai and Bangalore.'
    },
    hotels: [
      'Taj Exotica (Luxury)',
      'Santana Beach Resort (Mid-range)',
      'Zostel Goa (Budget)'
    ],
    attractions: ['Baga Beach', 'Calangute Beach', 'Fort Aguada', 'Dudhsagar Falls'],
    weather: '25-30°C'
  },
  {
    id: 'manali',
    name: 'Manali',
    category: 'mountain',
    short: 'Mountains | Snowfall | Adventure',
    info: 'Manali is a paradise for adventure seekers with its snow-capped mountains, trekking trails, and beautiful valleys.',
    best: 'October to March',

    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop',
    price: 2500,
    rating: 4.6,
    reach: {
      flight: 'Bhuntar Airport (50km away).',
      train: 'Joginder Nagar (Narrow gauge) or Chandigarh (Broad gauge).',
      road: 'NH3 via Chandigarh and Bilaspur.'
    },
    hotels: [
      'The Himalayan (Luxury)',
      'Snow Valley Resorts (Mid-range)',
      'Zostel Manali (Budget)'
    ],
    attractions: ['Solang Valley', 'Rohtang Pass', 'Hadimba Temple', 'Mall Road'],
    weather: '10-25°C'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    category: 'cultural',
    short: 'Culture | Forts | Heritage',
    info: 'Jaipur, the Pink City, showcases royal heritage with magnificent forts, palaces and rich cultural traditions.',
    best: 'September to February',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
    price: 2000,
    rating: 4.4,
    reach: {
      flight: 'Jaipur International Airport.',
      train: 'Jaipur Junction.',
      road: 'NH48 connects Delhi and Mumbai to Jaipur.'
    },
    hotels: [
      'Rambagh Palace (Luxury)',
      'Hotel Kalyan (Mid-range)',
      'Zostel Jaipur (Budget)'
    ],
    attractions: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jantar Mantar'],
    weather: '20-30°C'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    category: 'beach',
    short: 'Backwaters | Ayurveda | Hill Stations',
    info: 'Kerala offers serene backwaters, authentic Ayurvedic treatments, and lush green hill stations.',
    best: 'October to February',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop',
    price: 3500,
    rating: 4.7,
    reach: {
      flight: 'Kochi (COK), Trivandrum (TRV) or Calicut (CCJ).',
      train: 'Ernakulam, Trivandrum Central.',
      road: 'NH66 runs through the state.'
    },
    hotels: [
      'Kumarakom Lake Resort (Luxury)',
      'Deshadan Backwater Resort (Mid-range)',
      'Zostel Alleppey (Budget)'
    ],
    attractions: ['Alleppey Backwaters', 'Munnar', 'Wayanad', 'Kochi Fort'],
    weather: '24-33°C'
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    category: 'mountain',
    short: 'Tea Gardens | Himalayan Views | Toy Train',
    info: 'Darjeeling is renowned for its aromatic tea gardens, stunning Himalayan views and the historic toy train.',
    best: 'March to May, October to November',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80&auto=format&fit=crop',
    price: 2500,
    rating: 4.5,
    reach: {
      flight: 'Bagdogra Airport (IXB).',
      train: 'New Jalpaiguri (NJP).',
      road: 'Connected via Hill Cart Road from Siliguri.'
    },
    hotels: [
      'Mayfair Darjeeling (Luxury)',
      'Sinclairs Darjeeling (Mid-range)',
      'Hideaway (Budget)'
    ],
    attractions: ['Tiger Hill', 'Batasia Loop', 'Padmaja Naidu Zoo', 'Tea Gardens'],
    weather: '15-20°C'
  },
  {
    id: 'agra',
    name: 'Agra',
    category: 'cultural',
    short: 'Taj Mahal | Mughal Architecture | Heritage',
    info: 'Agra is home to the iconic Taj Mahal and other magnificent Mughal monuments showcasing rich heritage.',
    best: 'October to March',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80&auto=format&fit=crop',
    price: 2000,
    rating: 4.6,
    reach: {
      flight: 'Delhi Airport (IGIA) is nearest major airport.',
      train: 'Agra Cantt.',
      road: 'Yamuna Expressway from Delhi.'
    },
    hotels: [
      'The Oberoi Amarvilas (Luxury)',
      'Crystal Sarovar (Mid-range)',
      'Joey\'s Hostel (Budget)'
    ],
    attractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Moti Masjid'],
    weather: '20-28°C'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    category: 'cultural',
    short: 'Bollywood | Gateway of India | Street Food',
    info: 'Mumbai, the City of Dreams, is the entertainment capital with Bollywood, iconic landmarks and street food.',
    best: 'October to February',
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1200&q=80&auto=format&fit=crop',
    price: 4000,
    rating: 4.3,
    reach: {
      flight: 'Chhatrapati Shivaji Maharaj International Airport (BOM).',
      train: 'CSMT or Mumbai Central.',
      road: 'Connected by NH48, Mumbai-Pune Expressway.'
    },
    hotels: [
      'The Taj Mahal Palace (Luxury)',
      'Trident Nariman Point (Mid-range)',
      'Backpacker Panda (Budget)'
    ],
    attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Colaba Causeway'],
    weather: '20-35°C'
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    category: 'mountain',
    short: 'Dal Lake | Houseboats | Alpine Beauty',
    info: 'Kashmir offers pristine natural beauty with Dal Lake, traditional houseboats and snow-capped mountains.',
    best: 'March to October',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop',
    price: 3000,
    rating: 4.8,
    reach: {
      flight: 'Sheikh Ul-Alam International Airport, Srinagar (SXR).',
      train: 'Jammu Tawi is the nearest major railhead.',
      road: 'NH44 connects Jammu to Srinagar.'
    },
    hotels: [
      'The Lalit Grand Palace (Luxury)',
      'Vivanta Dal View (Mid-range)',
      'Zostel Srinagar (Budget)'
    ],
    attractions: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    weather: '15-25°C'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    category: 'adventure',
    short: 'Himalayas | Monasteries | Adventure',
    info: 'Ladakh is a dream destination for adventure enthusiasts with high-altitude lakes and ancient monasteries.',
    best: 'May to September',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80&auto=format&fit=crop',
    price: 4000,
    rating: 4.9,
    reach: {
      flight: 'Leh Airport (IXL).',
      train: 'Nearest major station is in Jammu (Tawi).',
      road: 'Manali-Leh highway (seasonal) or Srinagar-Leh highway.'
    },
    hotels: [
      'The Grand Dragon Ladakh (Luxury)',
      'Ladakh Sarai (Mid-range)',
      'Zostel Leh (Budget)'
    ],
    attractions: ['Pangong Lake', 'Nubra Valley', 'Thiksey Monastery', 'Magnetic Hill'],
    weather: '15-30°C'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    category: 'cultural',
    short: 'Palaces | Desert | Royal Culture',
    info: 'Rajasthan offers a royal experience with magnificent palaces, desert safaris and rich cultural heritage.',
    best: 'October to March',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
    price: 2800,
    rating: 4.5,
    reach: {
      flight: 'Jaipur International Airport, Udaipur Airport.',
      train: 'Multiple railway stations across cities.',
      road: 'Well connected by national highways.'
    },
    hotels: [
      'Umaid Bhawan Palace (Luxury)',
      'Fort Seeng (Mid-range)',
      'Moustache Hostels (Budget)'
    ],
    attractions: ['City Palace Udaipur', 'Jaisalmer Fort', 'Lake Palace', 'Hawa Mahal'],
    weather: '20-35°C'
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    category: 'beach',
    short: 'Crystal Waters | Coral Reefs | Water Sports',
    info: 'Andaman Islands offer pristine beaches, crystal clear waters, coral reefs and exciting water sports.',
    best: 'October to May',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop',
    price: 4500,
    rating: 4.7,
    reach: {
      flight: 'Port Blair Airport (IXZ).',
      train: 'No direct rail connectivity.',
      road: 'Only accessible by air and sea.'
    },
    hotels: [
      'Taj Exotica (Luxury)',
      'SeaShell Resorts (Mid-range)',
      'Maa Punu Homestay (Budget)'
    ],
    attractions: ['Radhanagar Beach', 'Cellular Jail', 'Ross Island', 'Viper Island'],
    weather: '26-30°C'
  },
  {
    id: 'ooty',
    name: 'Ooty',
    category: 'mountain',
    short: 'Hill Station | Tea Gardens | Toy Train',
    info: 'Ooty, the Queen of Hill Stations, offers pleasant weather, beautiful tea gardens and colonial charm.',
    best: 'April to June, September to November',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80&auto=format&fit=crop',
    price: 2000,
    rating: 4.4,
    reach: {
      flight: 'Coimbatore Airport (CJB) is nearest.',
      train: 'Mettupalayam (Nearest railway station).',
      road: 'Well connected by road from major cities.'
    },
    hotels: [
      'The Taj Savoy (Luxury)',
      'Lakeview Hotel (Mid-range)',
      'Zostel Ooty (Budget)'
    ],
    attractions: ['Nilgiri Hills', 'Ooty Lake', 'Botanical Garden', 'Doddabetta Peak'],
    weather: '15-26°C'
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry',
    category: 'beach',
    short: 'French Architecture | Beaches | Spiritual',
    info: 'Pondicherry offers a unique blend of French colonial architecture, beautiful beaches and spiritual retreats.',
    best: 'October to March',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop',
    price: 2500,
    rating: 4.3,
    reach: {
      flight: 'Pondicherry Airport (PNY) or Chennai Airport.',
      train: 'Villupuram Junction (closest major station).',
      road: 'Well connected by NH-32 from Chennai.'
    },
    hotels: [
      'The Leela Palace (Luxury)',
      'Palais De Mahe (Mid-range)',
      'Zostel Pondicherry (Budget)'
    ],
    attractions: ['French Quarter', 'Promenade Beach', 'Sri Aurobindo Ashram', 'Chunnambar Backwaters'],
    weather: '24-32°C'
  },
  {
    id: 'coorg',
    name: 'Coorg',
    category: 'mountain',
    short: 'Coffee Plantations | Waterfalls | Nature',
    info: 'Coorg, known as the Scotland of India, offers lush coffee plantations, waterfalls and misty hills.',
    best: 'October to March',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80&auto=format&fit=crop',
    price: 2200,
    rating: 4.6,
    reach: {
      flight: 'Mangalore Airport (IXE) is nearest.',
      train: 'Mysore Junction (closest major station).',
      road: 'Well connected by road from Bangalore.'
    },
    hotels: [
      'The Coorg Hills (Luxury)',
      'Heritage Resort (Mid-range)',
      'Zostel Coorg (Budget)'
    ],
    attractions: ['Abbey Falls', 'Raja\'s Seat', 'Madikeri Fort', 'Coffee Plantations'],
    weather: '15-26°C'
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    category: 'adventure',
    short: 'Mountains | Monasteries | Adventure Sports',
    info: 'Sikkim offers stunning mountain views, ancient monasteries and various adventure activities.',
    best: 'March to June, September to December',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80&auto=format&fit=crop',
    price: 3200,
    rating: 4.7,
    reach: {
      flight: 'Bagdogra Airport (IXB) or Pakyong Airport (PYG).',
      train: 'New Jalpaiguri (NJP) is closest major station.',
      road: 'Connected via NH10 from Siliguri.'
    },
    hotels: [
      'The Elgin Nor-Khills (Luxury)',
      'Hotel Tashi Deli (Mid-range)',
      'Zostel Gangtok (Budget)'
    ],
    attractions: ['Gangtok', 'Tsomgo Lake', 'Nathula Pass', 'Rumtek Monastery'],
    weather: '10-25°C'
  }
];

// Favorites management
let favorites = JSON.parse(localStorage.getItem('travelmate_favorites') || '[]');
let currentFilter = 'all';

// Category information
const CATEGORIES = {
  all: { name: 'All Destinations', icon: '🌍' },
  beach: { name: 'Beaches', icon: '🏖️' },
  mountain: { name: 'Mountains', icon: '🏔️' },
  cultural: { name: 'Cultural', icon: '🏛️' },
  adventure: { name: 'Adventure', icon: '🎿' }
};

// Mock user reviews
const REVIEWS = {
  goa: [
    { user: 'Rahul S.', rating: 5, comment: 'Amazing beaches and nightlife! Perfect for a fun vacation.' },
    { user: 'Priya M.', rating: 4, comment: 'Great food and beautiful beaches. Will visit again.' }
  ],
  manali: [
    { user: 'Amit K.', rating: 5, comment: 'Snow-capped mountains and adventure activities. Loved it!' },
    { user: 'Sneha P.', rating: 5, comment: 'Perfect hill station getaway. Great weather and scenery.' }
  ]
};

// Utility to render year in footers
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });
});

// Render cards on Home (index.html)
function renderHomeCards(){
  const container = document.getElementById('home-cards');
  if(!container) return;
  container.innerHTML = '';
  for(const d of DESTINATIONS){
    container.innerHTML += makeCardHTML(d);
  }
}

// Render destination list page
function renderDestinationCards(){
  const container = document.getElementById('dest-cards');
  if(!container) return;
  container.innerHTML = '';
  for(const d of DESTINATIONS){
    container.innerHTML += makeCardHTML(d);
  }
}


// Enhanced card creation with new features
function makeCardHTML(d){
  const isFavorite = favorites.includes(d.id);
  const categoryInfo = CATEGORIES[d.category] || CATEGORIES.all;
  
  return `
  <div class="card slide-up" onclick="openDetails('${d.id}')">
    <div style="position: relative;">
      <img src="${d.image}" alt="${d.name}">
      <div class="card-overlay" style="position: absolute; top: 12px; right: 12px; display: flex; gap: 8px;">
        <div class="category">${categoryInfo.icon} ${categoryInfo.name}</div>
        <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" 
                onclick="toggleFavorite('${d.id}', event)" 
                title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
          ${isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.7); color: white; padding: 4px 8px; border-radius: 6px; font-size: 0.875rem; font-weight: 600;">
        ⭐ ${d.rating}
      </div>
    </div>
    <div class="card-body">
      <div class="destination-meta">
        <h3>${d.name}</h3>
        <div class="price">₹${d.price}/day</div>
      </div>
      <p>${d.short}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 0.875rem; color: var(--muted);">
        <span>🌡️ ${d.weather}</span>
        <span>📅 ${d.best.split(' ')[0]} ${d.best.split(' ')[1]}</span>
      </div>
      <div class="card-actions">
        <a href="javascript:void(0)" onclick="openDetails('${d.id}')" class="btn-small">View Details</a>
        <a href="javascript:void(0)" onclick="startPlanner('${d.id}')" class="btn-small">Plan Trip</a>
      </div>
    </div>
  </div>
  `;
}

// Open details page (store id to localStorage)
function openDetails(id){
  localStorage.setItem('travelmate_selected', id);
  window.location.href = 'details.html';
}


// Enhanced details page loader
function loadDetailsPage(){
  const id = localStorage.getItem('travelmate_selected');
  const box = document.getElementById('detail-box');
  if(!box) return;

  const d = DESTINATIONS.find(x => x.id === id) || DESTINATIONS[0];
  const isFavorite = favorites.includes(d.id);
  const categoryInfo = CATEGORIES[d.category] || CATEGORIES.all;
  const reviews = REVIEWS[d.id] || [];
  
  // Create hotels list
  const hotelsList = (d.hotels || []).map(h => `<li>${h}</li>`).join('');
  
  // Create attractions list
  const attractionsList = (d.attractions || []).map(a => `<li>${a}</li>`).join('');
  
  // Create reviews section
  const reviewsSection = reviews.length > 0 ? `
    <div class="info-section">
      <h3>🌟 Guest Reviews</h3>
      <div style="display: grid; gap: 16px;">
        ${reviews.map(r => `
          <div style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid var(--accent);">
            <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 8px;">
              <strong>${r.user}</strong>
              <div style="color: var(--accent);">${'⭐'.repeat(r.rating)}</div>
            </div>
            <p style="margin: 0; color: var(--muted);">${r.comment}</p>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  box.innerHTML = `
    <div class="details">
      <img src="${d.image}" alt="${d.name}" />
      <h2>${d.name}</h2>
      
      <div class="detail-meta">
        <div class="meta-item">
          <span>${categoryInfo.icon}</span>
          <span>${categoryInfo.name}</span>
        </div>
        <div class="meta-item">
          <span>⭐</span>
          <span>${d.rating}/5</span>
        </div>
        <div class="meta-item">
          <span>🌡️</span>
          <span>${d.weather}</span>
        </div>
        <div class="meta-item">
          <span>📅</span>
          <span>${d.best}</span>
        </div>
        <div class="meta-item">
          <span>💰</span>
          <span>₹${d.price}/day</span>
        </div>
        <button class="favorite-btn-large ${isFavorite ? 'favorited' : ''}" 
                onclick="toggleFavorite('${d.id}')">
          ${isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
        </button>
      </div>
      
      <p style="font-size: 1.125rem; line-height: 1.6; color: #374151;">${d.info}</p>
      
      <div class="info-grid">
        <div class="info-section">
          <h3>🎯 Top Attractions</h3>
          <ul>${attractionsList}</ul>
        </div>
        
        <div class="info-section">
          <h3>🏨 Hotels & Stay Options</h3>
          <ul>${hotelsList}</ul>
        </div>
        
        <div class="info-section">
          <h3>✈️ How to Reach</h3>
          <ul>
            <li><strong>By Flight:</strong> ${d.reach.flight}</li>
            <li><strong>By Train:</strong> ${d.reach.train}</li>
            <li><strong>By Road:</strong> ${d.reach.road}</li>
          </ul>
        </div>
        
        <div class="info-section">
          <h3>📝 Travel Tips</h3>
          <ul>
            <li>Book accommodations in advance during peak season</li>
            <li>Carry appropriate clothing for the weather</li>
            <li>Try local cuisine and customs</li>
            <li>Stay hydrated and follow safety guidelines</li>
          </ul>
        </div>
      </div>
      
      ${reviewsSection}
      
      <div class="action-buttons">
        <a class="btn" href="javascript:void(0)" onclick="startPlanner('${d.id}')">🎯 Plan My Trip</a>
        <a class="btn" href="javascript:void(0)" onclick="shareDestination('${d.id}')">📤 Share</a>
        <a class="btn" href="destinations.html">🔙 Back to Destinations</a>
      </div>
    </div>
  `;
}



// Enhanced trip planner with detailed cost breakdown
function startPlanner(id){
  const d = DESTINATIONS.find(x => x.id === id);
  if(!d) {
    alert('Choose a destination first.');
    return;
  }
  
  // Enhanced trip planning dialog
  const days = prompt(`Plan your trip to ${d.name}!\n\nHow many days will you spend?`, '3');
  if(!days || isNaN(days) || days < 1) return;
  
  const travelers = prompt('How many travelers?', '2');
  if(!travelers || isNaN(travelers) || travelers < 1) return;
  
  const accommodation = prompt('Accommodation preference?\n1. Budget (Hostels/Guesthouses)\n2. Mid-range (3-star hotels)\n3. Luxury (4-5 star hotels)', '2');
  
  const activityLevel = prompt('Activity level?\n1. Relaxed (sightseeing only)\n2. Moderate (some adventure)\n3. Adventure (full adventure package)', '2');
  
  // Calculate costs
  const perDay = d.price;
  const totalDays = parseInt(days);
  const totalTravelers = parseInt(travelers);
  
  let accommodationMultiplier = 1;
  if(accommodation === '1') accommodationMultiplier = 0.7;
  else if(accommodation === '3') accommodationMultiplier = 2.5;
  
  let activityMultiplier = 1;
  if(activityLevel === '2') activityMultiplier = 1.3;
  else if(activityLevel === '3') activityMultiplier = 1.8;
  
  const baseCost = perDay * totalDays * totalTravelers;
  const accommodationCost = baseCost * (accommodationMultiplier - 1);
  const activityCost = baseCost * (activityMultiplier - 1);
  const totalCost = baseCost + accommodationCost + activityCost;
  
  const budgetBreakdown = `
🎯 Trip Plan for ${d.name}
📅 Duration: ${days} days
👥 Travelers: ${travelers} people
🏨 Accommodation: ${accommodation === '1' ? 'Budget' : accommodation === '2' ? 'Mid-range' : 'Luxury'}
🎢 Activity Level: ${activityLevel === '1' ? 'Relaxed' : activityLevel === '2' ? 'Moderate' : 'Adventure'}

💰 Cost Breakdown:
• Base Cost (₹${perDay}/day): ₹${baseCost.toLocaleString()}
• Accommodation: ₹${accommodationCost.toLocaleString()}
• Activities: ₹${activityCost.toLocaleString()}
• Total Estimated Cost: ₹${totalCost.toLocaleString()}

📋 Recommended Itinerary:
Day 1-2: Local sightseeing and relaxation
${totalDays > 2 ? 'Day 3-4: Adventure activities and exploration' : ''}
${totalDays > 4 ? 'Day 5+: Additional experiences and culture' : ''}

💡 Tips:
• Book flights 2-3 months in advance for better deals
• Pack according to weather (${d.weather})
• Try local cuisine and cultural experiences
• Consider travel insurance for international trips
  `;
  
  alert(budgetBreakdown);
  
  // Save trip plan to localStorage
  const tripPlans = JSON.parse(localStorage.getItem('travelmate_trips') || '[]');
  tripPlans.push({
    destination: d.name,
    days: totalDays,
    travelers: totalTravelers,
    cost: totalCost,
    date: new Date().toISOString(),
    id: Date.now()
  });
  localStorage.setItem('travelmate_trips', JSON.stringify(tripPlans));
}

// Enhanced search with filtering
function searchDest(){
  const q = document.getElementById('searchInput')?.value?.toLowerCase() || '';
  const container = document.getElementById('dest-cards');
  if(!container) return;
  
  let filtered = DESTINATIONS;
  
  // Apply category filter
  if(currentFilter !== 'all'){
    filtered = filtered.filter(d => d.category === currentFilter);
  }
  
  // Apply search filter
  if(q){
    filtered = filtered.filter(d => 
      d.name.toLowerCase().includes(q) || 
      d.short.toLowerCase().includes(q) || 
      d.info.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q)
    );
  }
  
  if(filtered.length === 0){
    container.innerHTML = `
      <div style="text-align: center; padding: 48px; color: var(--muted);">
        <h3>🔍 No destinations found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filtered.map(d => makeCardHTML(d)).join('');
  
  // Animate cards
  const cards = container.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

// Filter by category
function filterByCategory(category){
  currentFilter = category;
  
  // Update filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.remove('active');
  });
  document.querySelector(`[data-category="${category}"]`).classList.add('active');
  
  // Re-search with new filter
  searchDest();
}

// Toggle favorites
function toggleFavorite(id, event){
  if(event) event.stopPropagation();
  
  const index = favorites.indexOf(id);
  if(index > -1){
    favorites.splice(index, 1);
  } else {
    favorites.push(id);
  }
  
  localStorage.setItem('travelmate_favorites', JSON.stringify(favorites));
  
  // Update UI
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const onclick = card.getAttribute('onclick');
    if(onclick && onclick.includes(`'${id}'`)){
      card.outerHTML = makeCardHTML(DESTINATIONS.find(d => d.id === id));
    }
  });
  
  // Update details page if on it
  if(window.location.pathname.includes('details.html')){
    loadDetailsPage();
  }
}

// Share destination
function shareDestination(id){
  const d = DESTINATIONS.find(x => x.id === id);
  if(!d) return;
  
  const shareData = {
    title: `Check out ${d.name} - TravelMate`,
    text: `Amazing destination: ${d.name} - ${d.short}`,
    url: `${window.location.origin}${window.location.pathname.replace('details.html', '')}details.html`
  };
  
  if(navigator.share){
    navigator.share(shareData);
  } else {
    // Fallback: copy to clipboard
    const text = `${d.name} - ${d.short}\n${d.info}\n\nVisit: ${shareData.url}`;
    navigator.clipboard.writeText(text).then(() => {
      alert('Destination details copied to clipboard!');
    });
  }
}

// Contact form handler (enhanced)
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('cname').value;
  const email = document.getElementById('cemail').value;
  const subject = document.getElementById('csubject')?.value || 'General Inquiry';
  const message = document.getElementById('cmessage').value;
  
  if(!name || !email || !message){
    alert('Please fill in all required fields.');
    return;
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    alert('Please enter a valid email address.');
    return;
  }
  
  const entries = JSON.parse(localStorage.getItem('travelmate_contacts') || '[]');
  entries.push({
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
    id: Date.now()
  });
  localStorage.setItem('travelmate_contacts', JSON.stringify(entries));
  
  document.getElementById('contactForm').reset();
  const ok = document.getElementById('contact-success');
  if(ok) { 
    ok.classList.remove('hidden'); 
    ok.scrollIntoView({ behavior: 'smooth' });
    setTimeout(()=>ok.classList.add('hidden'), 5000); 
  }
  
  // Show confirmation
  setTimeout(() => {
    alert(`Thank you, ${name}! Your message has been recorded.\n\nWe'll get back to you within 2 hours at ${email}.`);
  }, 500);
}


// TRAVEL PLANNER FUNCTIONALITY
let selectedTransport = '';
let selectedDestination = '';
let selectedDuration = 3;

// Initialize destination dropdown for travel planner
function initializeTravelPlanner() {
  const destinationSelect = document.getElementById('destinationSelect');
  if (destinationSelect) {
    destinationSelect.innerHTML = '<option value="">Select a destination...</option>';
    DESTINATIONS.forEach(destination => {
      const option = document.createElement('option');
      option.value = destination.id;
      option.textContent = `${destination.name} (₹${destination.price}/day)`;
      destinationSelect.appendChild(option);
    });
  }
}

// Select transportation method
function selectTransport(transportType) {
  selectedTransport = transportType;
  
  // Update button styles
  document.querySelectorAll('.transport-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  const selectedBtn = document.querySelector(`[data-transport="${transportType}"]`);
  if (selectedBtn) {
    selectedBtn.classList.add('selected');
  }
  
  updateTravelPrice();
}

// Update travel price based on selections
function updateTravelPrice() {
  const destinationSelect = document.getElementById('destinationSelect');
  const durationSelect = document.getElementById('durationSelect');
  const priceDisplay = document.getElementById('priceDisplay');
  const transportInfo = document.getElementById('transportInfo');
  
  if (!destinationSelect || !priceDisplay) return;
  
  selectedDestination = destinationSelect.value;
  selectedDuration = durationSelect ? parseInt(durationSelect.value) : 3;
  
  if (!selectedDestination) {
    priceDisplay.innerHTML = `
      <div style="font-size: 1.125rem; margin-bottom: 8px; opacity: 0.9;">Total Estimated Cost</div>
      <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 16px;">₹0</div>
      <div id="transportInfo" style="font-size: 0.875rem; opacity: 0.8; margin-bottom: 16px;"></div>
      <button class="btn" onclick="planDetailedTrip()" style="background: white; color: #667eea; font-weight: 600; padding: 12px 24px; border-radius: 8px; border: none; cursor: pointer;">
        🎯 Plan Detailed Trip
      </button>
    `;
    return;
  }
  
  const destination = DESTINATIONS.find(d => d.id === selectedDestination);
  if (!destination) return;
  
  // Base price calculation
  const basePrice = destination.price * selectedDuration;
  
  // Transportation cost multipliers
  let transportMultiplier = 1;
  let transportEmoji = '🚶';
  let transportName = 'Walking';
  let transportDesc = 'Budget-friendly, eco-friendly option';
  
  switch (selectedTransport) {
    case 'flight':
      transportMultiplier = 2.5;
      transportEmoji = '✈️';
      transportName = 'Flight';
      transportDesc = 'Fastest option, perfect for long distances';
      break;
    case 'train':
      transportMultiplier = 1.2;
      transportEmoji = '🚂';
      transportName = 'Train';
      transportDesc = 'Comfortable and scenic journey';
      break;
    case 'road':
      transportMultiplier = 1.5;
      transportEmoji = '🚌';
      transportName = 'Road Transport';
      transportDesc = 'Flexible schedule, explore on the way';
      break;
    default:
      transportMultiplier = 1;
      transportEmoji = '🚶';
      transportName = 'Walking';
      transportDesc = 'Budget-friendly, eco-friendly option';
  }
  

  // Calculate total cost
  const transportCost = basePrice * (transportMultiplier - 1);
  const totalCost = basePrice + transportCost;
  

  // Update display
  if (priceDisplay) {
    priceDisplay.innerHTML = `
      <div style="font-size: 1.125rem; margin-bottom: 8px; opacity: 0.9;">Total Estimated Cost</div>
      <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 16px;">₹${totalCost.toLocaleString()}</div>
      <div id="transportInfo" style="font-size: 0.875rem; opacity: 0.8; margin-bottom: 16px;">
        <div>${transportEmoji} ${transportName}: ₹${transportCost.toLocaleString()}</div>
        <div style="margin-top: 4px; font-size: 0.8rem;">${transportDesc}</div>
      </div>
      <button class="btn" onclick="planDetailedTrip()" style="background: white; color: #667eea; font-weight: 600; padding: 12px 24px; border-radius: 8px; border: none; cursor: pointer;">
        🎯 Plan Detailed Trip
      </button>
    `;
  }
}

// Plan detailed trip
function planDetailedTrip() {
  if (!selectedDestination) {
    alert('Please select a destination first!');
    return;
  }
  
  const destination = DESTINATIONS.find(d => d.id === selectedDestination);
  if (!destination) return;
  
  // Enhanced trip planning dialog
  const travelers = prompt(`Plan your trip to ${destination.name}!\n\nHow many travelers?`, '2');
  if (!travelers || isNaN(travelers) || travelers < 1) return;
  
  const accommodation = prompt('Accommodation preference?\n1. Budget (Hostels/Guesthouses)\n2. Mid-range (3-star hotels)\n3. Luxury (4-5 star hotels)', '2');
  
  const activityLevel = prompt('Activity level?\n1. Relaxed (sightseeing only)\n2. Moderate (some adventure)\n3. Adventure (full adventure package)', '2');
  
  // Calculate costs
  const perDay = destination.price;
  const totalDays = selectedDuration;
  const totalTravelers = parseInt(travelers);
  
  let accommodationMultiplier = 1;
  if (accommodation === '1') accommodationMultiplier = 0.7;
  else if (accommodation === '3') accommodationMultiplier = 2.5;
  
  let activityMultiplier = 1;
  if (activityLevel === '2') activityMultiplier = 1.3;
  else if (activityLevel === '3') activityMultiplier = 1.8;
  
  // Transportation cost
  let transportMultiplier = 1;
  switch (selectedTransport) {
    case 'flight': transportMultiplier = 2.5; break;
    case 'train': transportMultiplier = 1.2; break;
    case 'road': transportMultiplier = 1.5; break;
  }
  
  const baseCost = perDay * totalDays * totalTravelers;
  const accommodationCost = baseCost * (accommodationMultiplier - 1);
  const activityCost = baseCost * (activityMultiplier - 1);
  const transportCost = baseCost * (transportMultiplier - 1);
  const totalCost = baseCost + accommodationCost + activityCost + transportCost;
  
  const transportEmoji = selectedTransport === 'flight' ? '✈️' : 
                        selectedTransport === 'train' ? '🚂' : 
                        selectedTransport === 'road' ? '🚌' : '🚶';
  
  const budgetBreakdown = `
🎯 Detailed Trip Plan for ${destination.name}
📅 Duration: ${totalDays} days
👥 Travelers: ${travelers} people
✈️ Transportation: ${transportEmoji} ${selectedTransport.charAt(0).toUpperCase() + selectedTransport.slice(1)}
🏨 Accommodation: ${accommodation === '1' ? 'Budget' : accommodation === '2' ? 'Mid-range' : 'Luxury'}
🎢 Activity Level: ${activityLevel === '1' ? 'Relaxed' : activityLevel === '2' ? 'Moderate' : 'Adventure'}

💰 Detailed Cost Breakdown:
• Base Cost (₹${perDay}/day): ₹${baseCost.toLocaleString()}
• Accommodation: ₹${accommodationCost.toLocaleString()}
• Activities: ₹${activityCost.toLocaleString()}
• Transportation: ₹${transportCost.toLocaleString()}
• Total Estimated Cost: ₹${totalCost.toLocaleString()}

📋 Recommended Itinerary:
Day 1: Arrival and local sightseeing
Day 2-3: Main attractions and experiences
${totalDays > 3 ? 'Day 4-5: Adventure activities and exploration' : ''}
${totalDays > 5 ? 'Day 6+: Cultural experiences and relaxation' : ''}

🚗 How to Reach:
• By ${selectedTransport.charAt(0).toUpperCase() + selectedTransport.slice(1)}: ${destination.reach[selectedTransport]}

💡 Travel Tips:
• Weather: ${destination.weather}
• Best time to visit: ${destination.best}
• Book flights 2-3 months in advance for better deals
• Pack according to weather conditions
• Try local cuisine and cultural experiences
• Consider travel insurance for international trips
  `;
  
  alert(budgetBreakdown);
  
  // Save trip plan to localStorage
  const tripPlans = JSON.parse(localStorage.getItem('travelmate_trips') || '[]');
  tripPlans.push({
    destination: destination.name,
    destinationId: selectedDestination,
    days: totalDays,
    travelers: totalTravelers,
    transport: selectedTransport,
    accommodation: accommodation,
    activityLevel: activityLevel,
    cost: totalCost,
    date: new Date().toISOString(),
    id: Date.now()
  });
  localStorage.setItem('travelmate_trips', JSON.stringify(tripPlans));
  
  // Option to view detailed page
  if (confirm('Would you like to view detailed information about this destination?')) {
    openDetails(selectedDestination);
  }
}

// Initialize filter chips and travel planner
document.addEventListener('DOMContentLoaded', () => {
  // Add click handlers for filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      filterByCategory(chip.getAttribute('data-category'));
    });
  });
  
  // Add search input handler for real-time search
  const searchInput = document.getElementById('searchInput');
  if(searchInput){
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchDest();
      }, 300);
    });
  }
  
  // Initialize travel planner
  initializeTravelPlanner();
});
