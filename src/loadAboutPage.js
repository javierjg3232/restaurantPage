function loadAboutPage() {
    const content = document.getElementById('content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';

    const hourText = document.createElement('p');
    hourText.textContent = 'We are open from 9 AM to 9 PM every day.';

    const locationText = document.createElement('p');
    locationText.textContent = 'Located at 123 Food Street, Flavor Town.';

    content.appendChild(heading);
    content.appendChild(hourText);
    content.appendChild(locationText);
}

export default loadAboutPage;