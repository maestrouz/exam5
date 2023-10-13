// Retrieve the products from localStorage or initialize as an empty array
let buyProducts = JSON.parse(localStorage.getItem('product')) || [];

// Function to initialize the quantity for each item in buyProducts
function initializeQuantity() {
    for (const item of buyProducts) {
        if (typeof item.quantity !== 'number') {
            item.quantity = 1; // Set the initial quantity to 1 if not defined
        }
        // Calculate the amount
        item.amount = item.quantity * item.price;
    }
    localStorage.setItem('products', JSON.stringify(buyProducts));
}

// Call the function to initialize quantity
initializeQuantity();

// Function to display and update the shopping cart
function updateCart() {
    const buyList = document.querySelector('.buy_list');

    if (Array.isArray(buyProducts) && buyProducts.length > 0) {
        let productsHTML = buyProducts.map((item) => {
            return `
                <div class="buy_card">
                    <img src="${item.img}" alt="">
                    <div class="buy_card_info">
                        <h2>${item.name}</h2>
                        <p>${item.price}₽</p>
                    </div>
                    <div class="buy_card_number">
                        <button class="minus" data-id="${item.id}">-</button>
                        <span class="num">${item.quantity}</span>
                        <button class="plus" data-id="${item.id}">+</button>
                    </div>
                    <h3 class="amount">${item.amount}₽</h3>
                </div>
            `;
        });
        buyList.innerHTML = productsHTML.join('');

        // Add event listeners for quantity modification
        const minusButtons = document.querySelectorAll('.minus');
        const plusButtons = document.querySelectorAll('.plus');

        minusButtons.forEach((button) => {
            button.addEventListener('click', function (e) {
                let uid = e.target.getAttribute('data-id');
                modifyQuantity(uid, -1);
            });
        });

        plusButtons.forEach((button) => {
            button.addEventListener('click', function (e) {
                let uid = e.target.getAttribute('data-id');
                modifyQuantity(uid, 1);
            });
        });
    } else {
        buyList.innerHTML = '<p>No products in the shopping cart.</p>';
    }
}

// Function to modify the quantity
function modifyQuantity(productId, change) {
    const productIndex = buyProducts.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        const product = buyProducts[productIndex];
        product.quantity += change;

        if (product.quantity < 1) {
            buyProducts.splice(productIndex, 1);
        } else {
            product.amount = product.quantity * product.price;
        }

        localStorage.setItem('products', JSON.stringify(buyProducts));
        updateCart();
    }
}
updateCart();
