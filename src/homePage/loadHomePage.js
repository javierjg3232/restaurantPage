import restaurantImage from '../assets/mexican-restaurant.jpg';
import "./homeStyles.css";

// Utility helpers
function createText(tag, text, className) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}

function createHeroSection({ imageSrc, imageAlt, title, subtitle, ctaText, ctaHref }) {
    const hero = document.createElement('section');
    hero.className = 'home-hero';

    const figure = document.createElement('figure');
    figure.className = 'home-hero-figure';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageAlt || '';
    img.className = 'home-image';
    img.loading = 'lazy';

    const overlay = document.createElement('figcaption');
    overlay.className = 'home-hero-overlay';

    const heroTitle = createText('h1', title, 'home-heading');
    const heroText = createText('p', subtitle, 'home-paragraph');

    overlay.appendChild(heroTitle);
    overlay.appendChild(heroText);

    if (ctaText) {
        const cta = document.createElement('a');
        cta.className = 'hero-cta';
        cta.href = ctaHref || '#';
        cta.textContent = ctaText;
        overlay.appendChild(cta);
    }

    figure.appendChild(img);
    figure.appendChild(overlay);
    hero.appendChild(figure);

    return hero;
}

function createFeaturesGrid(items = []) {
    const container = document.createElement('div');
    container.className = 'home-features';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        if (item.html) card.innerHTML = item.html;
        else {
            const h = createText('h3', item.title);
            const p = createText('p', item.text);
            card.appendChild(h);
            card.appendChild(p);
        }
        container.appendChild(card);
    });

    return container;
}

function loadHomePage() {
    const content = document.getElementById('content');
    if (!content) return;
    content.textContent = '';

    const hero = createHeroSection({
        imageSrc: restaurantImage,
        imageAlt: 'Exterior dining area of the restaurant',
        title: 'Welcome to Our Restaurant',
        subtitle: 'Experience the best food with us!',
        ctaText: 'Order Online',
        ctaHref: '#order'
    });

    const features = createFeaturesGrid([
        { title: 'Hours', text: '9 AM to 9 PM every day' },
        { title: 'Location', text: '123 Food Street, Flavor Town' },
        { title: 'Featured Dish', text: 'Carne Asada Tacos — flavorful, charred, and served with fresh cilantro & onions.' },
        { title: 'Reviews', text: '★★★★☆ — "Amazing flavors and great service!"' }
    ]);

    content.appendChild(hero);
    content.appendChild(features);
}

export default loadHomePage;