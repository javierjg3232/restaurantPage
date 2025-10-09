import restaurantImage from '../assets/mexican-restaurant.jpg';
import "./homeStyles.css";

function loadHomePage() {
    const content = document.getElementById('content');
    if (!content) return;
    content.textContent = '';

    // HERO
    const hero = document.createElement('section');
    hero.className = 'home-hero';

    const figure = document.createElement('figure');
    figure.className = 'home-hero-figure';

    const img = document.createElement('img');
    img.src = restaurantImage;
    img.alt = 'Exterior dining area of the restaurant';
    img.className = 'home-image';
    img.loading = 'lazy';

    const overlay = document.createElement('figcaption');
    overlay.className = 'home-hero-overlay';

    const heroTitle = document.createElement('h1');
    heroTitle.className = 'home-heading';
    heroTitle.textContent = 'Welcome to Our Restaurant';

    const heroText = document.createElement('p');
    heroText.className = 'home-paragraph';
    heroText.textContent = 'Experience the best food with us!';

    const cta = document.createElement('a');
    cta.className = 'hero-cta';
    cta.href = '#order';
    cta.textContent = 'Order Online';

    overlay.appendChild(heroTitle);
    overlay.appendChild(heroText);
    overlay.appendChild(cta);

    figure.appendChild(img);
    figure.appendChild(overlay);
    hero.appendChild(figure);

    // FEATURES GRID
    const features = document.createElement('div');
    features.className = 'home-features';

    const hoursCard = document.createElement('div');
    hoursCard.className = 'feature-card';
    hoursCard.innerHTML = '<h3>Hours</h3><p>9 AM to 9 PM every day</p>';

    const locationCard = document.createElement('div');
    locationCard.className = 'feature-card';
    locationCard.innerHTML = '<h3>Location</h3><p>123 Food Street, Flavor Town</p>';

    const featuredCard = document.createElement('div');
    featuredCard.className = 'feature-card';
    featuredCard.innerHTML = '<h3>Featured Dish</h3><p>Carne Asada Tacos — flavorful, charred, and served with fresh cilantro & onions.</p>';

    const reviewsCard = document.createElement('div');
    reviewsCard.className = 'feature-card';
    reviewsCard.innerHTML = '<h3>Reviews</h3><p>★★★★☆ — "Amazing flavors and great service!"</p>';

    features.appendChild(hoursCard);
    features.appendChild(locationCard);
    features.appendChild(featuredCard);
    features.appendChild(reviewsCard);

    // Append to content
    content.appendChild(hero);
    content.appendChild(features);

}

export default loadHomePage;