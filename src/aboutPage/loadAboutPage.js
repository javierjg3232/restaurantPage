import "./aboutStyles.css";
import mapImg from '../assets/restaurant-map.png';
import familyImg from '../assets/disney-coco.jpeg';

function loadAboutPage() {
    const content = document.getElementById('content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    heading.className = 'about-heading';

    const historyHeading = document.createElement('h2');
    historyHeading.textContent = 'Our History';
    historyHeading.className = 'about-subheading';

    const historyText = document.createElement('p');
    historyText.textContent = `Founded in 1998 by the Rivera family, our restaurant started as a small food cart and grew into a community favorite known for authentic recipes and warm service.`;
    historyText.className = 'about-history';
    
    const historyImg = document.createElement('img');
    historyImg.src = familyImg; 
    historyImg.alt = 'Historic photo of the restaurant owners';
    historyImg.className = 'about-history-img';

    const historyCard = document.createElement('div');
    historyCard.className = 'history-card';
    historyCard.appendChild(historyText);
    historyCard.appendChild(historyImg);


    // Right column: combined Location + Map under one heading
    const findHeading = document.createElement('h2');
    findHeading.textContent = 'Find us at';
    findHeading.className = 'about-subheading';

    const locationText = document.createElement('p');
    locationText.textContent = '123 Food Street, Flavor Town.';
    locationText.className = 'about-paragraph';

    const mapImgEl = document.createElement('img');
    mapImgEl.src = mapImg;
    mapImgEl.alt = 'Map showing restaurant location';
    mapImgEl.className = 'about-map';

    // Grid layout: three blocks (hours, history, info). On wide screens
    // the info block will span both rows to match the combined height.
    const contentGrid = document.createElement('div');
    contentGrid.className = 'about-content-grid'; //formerly about-row

    const historyContainer = document.createElement('div');
    historyContainer.className = 'about-grid-item history-container';
    historyContainer.appendChild(historyHeading);
    historyContainer.appendChild(historyCard);

    const locationContainer = document.createElement('div'); // formerly rightBlock
    locationContainer.className = 'about-grid-item location-container'; 
    locationContainer.appendChild(findHeading);
    locationContainer.appendChild(locationText);
    locationContainer.appendChild(mapImgEl);

    // Append blocks directly so we can place them into grid areas via CSS
    contentGrid.appendChild(historyContainer);
    contentGrid.appendChild(locationContainer);

    content.appendChild(heading);
    content.appendChild(contentGrid);
}

export default loadAboutPage;