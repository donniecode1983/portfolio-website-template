// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set the Initial state of the menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;

    }
}

// Load the Javascripts on Window load
window.onload = () => {
    setActiveLinkColor();
}


// Set Active Link Color in CSS 
function setActiveLinkColor() {
    // Load the page document name into the page variable.
    var page = '/' + location.href.split("/").slice(-1);

    var mainMenuNav = document.getElementById('main-menu-nav');
    // Get the number of links listed in the top menu.
    var linkNumber = mainMenuNav.getElementsByTagName('li').length;

    // Loop through the Links to find the active one
    for (i = 0; i < linkNumber; i++) {
        var currentLink = mainMenuNav.getElementsByTagName('li')[i].getElementsByTagName('a');
        var currentPage = currentLink[0].getAttribute('href');
        console.log("Page: " + page + " Current Page: " + currentPage);

        // if currentPage equals page then add the active-link class.
        if (page == currentPage) {
            currentLink[0].className += 'active-link';
        }

    }

}