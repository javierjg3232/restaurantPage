import restaruntImage from './restaurant.jpg';

function initialPageLoad() {
    const content = document.getElementById('content');
    content.textContent = '';
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the best dining with us!';
    const image = document.createElement('img');
    image.src = restaruntImage;
    image.alt = 'Restaurant Image';

    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(image);
}

export default initialPageLoad;