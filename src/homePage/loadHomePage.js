import restaurantImage from '../assets/restaurant.jpg';
import "./homeStyles.css";

function loadHomePage() {
    const content = document.getElementById('content');
    content.textContent = '';
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';
    heading.className = 'home-heading';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the best dining with us!';
    paragraph.className = 'home-paragraph';
    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Restaurant Image';
    image.className = 'home-image';

    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(image);
}

export default loadHomePage;