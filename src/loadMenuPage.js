function loadMenuPage() {
    const content = document.getElementById('content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');

    const menuItems = ['Pizza', 'Pasta', 'Salad', 'Dessert'];

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    content.appendChild(heading);
    content.appendChild(menuList);
}

export default loadMenuPage;