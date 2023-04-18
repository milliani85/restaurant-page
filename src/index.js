import nav from './nav';
import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.querySelector('#content');

loadNavElement();
loadHomeTab();

function loadNavElement() {
    const navElement = document.createElement('div');
    navElement.innerHTML = nav();
    content.appendChild(navElement);
}

function loadHomeTab() {
    const currentElement = document.createElement('div');
    currentElement.classList.add('current-element');
    currentElement.innerHTML = home();
    content.appendChild(currentElement);
}

function loadMenuTab() {
    const currentElement = document.createElement('div');
    currentElement.classList.add('current-element');
    currentElement.innerHTML = menu();
    content.appendChild(currentElement);
}

function loadContactTab() {
    const currentElement = document.createElement('div');
    currentElement.classList.add('current-element');
    currentElement.innerHTML = contact();
    content.appendChild(currentElement);
}

function removeCurrentElement() {
    const currentElement = document.querySelector('.current-element')
    currentElement.remove();
}

function changeTab(e) {
    const target = e.target.innerText;
    if(target === 'Home') {
        removeCurrentElement();
        loadHomeTab();
    } else if (target === 'Menu') {
        removeCurrentElement();
        loadMenuTab()
    } else if (target === 'Contact') {
        removeCurrentElement();
        loadContactTab()
    }
    
}

const navTabs = document.querySelectorAll('.nav-tabs')

navTabs.forEach(tab => {
    tab.addEventListener('click', changeTab)
});

const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', changeTab)




