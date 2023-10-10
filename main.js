/*
id
name
img
price
*/

const nameInp = document.getElementById('name')
const price = document.getElementById('price')
const btn = document.getElementById('btn');
const box = document.querySelector('.box');

let id = new Date().getTime().toString().slice(-5, -1);
let img = 'https://picsum.photos/id/1/200/300';

function getLocalStorage(key) {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
};



function addToLocalStorage(id, img, price, name, key) {
    let product = { id, img, price, name,key };
    let products = getLocalStorage();
    products.push(product);
    localStorage.setItem(key, JSON.stringify(products));
    location.reload(true);
}

btn.addEventListener('click', () => {
    addToLocalStorage(id, img, price.value, nameInp.value,"list");
    
})

let products = getLocalStorage();

let el;

window.addEventListener('DOMContentLoaded', () => {
    
    let time = new Date();
    let display = products.map((item) => {
        return `
        <div id="el" data-id="${item.id}">
        <img src="${item.img}" alt="">
        <h2>${item.name}</h2>
        <h2>${item.price}</h2>
        <p>${time}shu vaqtda qoshildi</p>
        <button id="add">basket</button>
    </div>
        `

    })
    box.innerHTML = display;
    el = document.getElementById('el')
    const add = document.querySelectorAll('#add');
    
    for (let i = 0; i < add.length; i++){
        add[i].addEventListener('click', function (e){
            let parent = e.target.parentElement;
          
            let uid = parent.getAttributeNode("data-id").value
            products.map((item) => {
                if (item.id === uid) {
                    addToLocalStorage(item.id, item.img, item.price, item.name, 'basket')
               }
            })
        })
    }
    
  

})


const range = document.getElementById('range');

// console.log(range.value);


range.addEventListener('click', () => {
    console.log(range.value);
})








