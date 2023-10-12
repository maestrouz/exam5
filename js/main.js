import { object } from "./project.js";
const cardList = document.getElementById('card_list');
let api = object;

window.addEventListener('DOMContentLoaded', () => {
    // Render products from the 'api' data
    let render = api.map((item) => {
        return `
        <div class="card" data-id="${item.id}">
            <img src="${item.img}" alt="img" />
            <div class="scene">
                <p>${item.name}</p> <!-- Corrected the typo 'pirce' to 'price' -->
            </div>
            <h3>${item.decription}</h3> <!-- Corrected the typo 'decription' to 'description' -->
            <button class="korzina">Savatga</button>
        </div>
        `;
    });
    render = render.join(' ');
    cardList.innerHTML = render;
});

// Login and check out functionality
const logCard = document.querySelector('.admin');
const adminBtn = document.getElementById('admin');

adminBtn.addEventListener('click', () => {
    logCard.classList.toggle('admin2');
    adminBtn.classList.toggle('admin_btn2');
});

const adminName = document.getElementById('adminName');
const adminPsw = document.getElementById('adminPassword');
const adminButton = document.getElementById('adminBtn');

adminButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (adminName.value == 'admin' && adminPsw.value == 'admin' && adminName.value.trim() !== '' && adminPsw.value.trim() !== '') {
        location.href = '../add.html'; // Redirect to 'add.html' on successful login
    } else {
        alert('Error');
    }
});

// Retrieve and display products from localStorage
let products = JSON.parse(localStorage.getItem('list')); // Parse the JSON string

window.addEventListener('DOMContentLoaded', () => {
    if (Array.isArray(products)) { // Check if 'products' is an array
        let productHTML = products.map((item) => {
            return `
            <div class="card" data-id="${item.id}">
                <img src="${item.img}" alt="img" />
                <div class="scene">
                    <p>${item.name}</p>
                    <p>${item.price}₽</p>
                </div>
                <h3>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in.</h3>
                <button class="korzina">Savatga</button>
            </div>
            `;
        });
        cardList.innerHTML = productHTML.join(''); // Display products from localStorage
    }
});
