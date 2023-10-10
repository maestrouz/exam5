const productName = document.getElementById('productName');
const price = document.getElementById('productPrice');

const btn = document.getElementById('submit');

let id = new Date().getTime().toString().slice(-5, -1);
let img = 'https://picsum.photos/id/1/200/300';



function getLocalStorage(key) {
    let data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(localStorage0.getItem(key))
    } else {
       return []
    }
}


function addToLocalStorage(id,img,name,price,key) {
    let product = {id,img,name,price,key};
    let products = getLocalStorage();
    products.push(product);
    localStorage.setItem(key, JSON.stringify(products));
    location.reload(true);
}

btn.addEventListener('click', () => {
    addToLocalStorage(id,img,productName.value,price.value,"list");
    
})