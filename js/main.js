import { object } from "./project.js";
const cardList = document.getElementById('card_list')
let api = object;



window.addEventListener('DOMContentLoaded', () => {
    let render = api.map((item) => {
        return `
        <div class="card" data-id="${item.id}">
            <img src="${item.img}" alt="img" />
            <div class="scene">
            <p>${item.pirce}</p>
            </div>
            <h3>${item.decription}</h3>
            <button class="korzina">Savatga</button>
        </div>
        `
    })
    render = render.join(' ');
    cardList.innerHTML = render;
})