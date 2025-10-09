import "./menuStyles.css";
import "./menuCards.css";
import { tacoImg, burritoImg, tamaleImg, aguaImg } from '../assets';

// Small helpers to keep DOM creation readable and reusable
function createHeading(text, level = 'h1', className) {
    const el = document.createElement(level);
    el.textContent = text;
    if (className) el.className = className;
    return el;
}

function createCard(item = {}) {
    const card = document.createElement('div');
    card.className = 'menu-card';

    if (item.img) {
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name || '';
        img.className = 'menu-card-img';
        card.appendChild(img);
    }

    if (item.name) {
        const nameEl = document.createElement('h3');
        nameEl.className = 'menu-card-name';
        nameEl.textContent = item.name;
        card.appendChild(nameEl);
    }

    if (item.price) {
        const priceEl = document.createElement('p');
        priceEl.className = 'menu-card-price';
        priceEl.textContent = item.price;
        card.appendChild(priceEl);
    }

    return card;
}

function createCardsContainer(items = []) {
    const container = document.createElement('div');
    container.className = 'menu-cards-container';
    items.forEach(i => container.appendChild(createCard(i)));
    return container;
}

function createListSection(title, items = [], sectionClass, headingClass) {
    const section = document.createElement('div');
    if (sectionClass) section.className = sectionClass;

    const heading = createHeading(title, 'h2', headingClass);
    section.appendChild(heading);

    const list = document.createElement('ul');
    list.className = 'menu-list';
    items.forEach(name => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.textContent = name;
        list.appendChild(li);
    });

    section.appendChild(list);
    return section;
}

function loadMenuPage() {
    const content = document.getElementById('content');
    if (!content) return; // guard
    content.textContent = '';

    const heading = createHeading('Our Menu', 'h1', 'menu-heading');

    const menuItems = [
        { name: '2 Tacos', price: '$6.00', img: tacoImg },
        { name: 'Burrito', price: '$8.00', img: burritoImg },
        { name: 'Tamale', price: '$3.50', img: tamaleImg },
        { name: 'Aguas Frescas', price: '$2.50', img: aguaImg }
    ];

    const cardsContainer = createCardsContainer(menuItems);

    const meatItems = ['Carne Asada', 'Pollo', 'Carnitas', 'Al Pastor'];
    const aguasItems = ['Horchata', 'Jamaica', 'Tamarindo', 'Limonada'];

    const menuOptionsDiv = document.createElement('div');
    menuOptionsDiv.className = 'menu-options';

    const meatSection = createListSection('Meat Options', meatItems, 'meat-options', 'meat-heading');
    const aguasSection = createListSection('Aguas Frescas', aguasItems, 'aguas-options', 'aguas-heading');

    menuOptionsDiv.appendChild(meatSection);
    menuOptionsDiv.appendChild(aguasSection);

    content.appendChild(heading);
    content.appendChild(cardsContainer);
    content.appendChild(menuOptionsDiv);
}

export default loadMenuPage;