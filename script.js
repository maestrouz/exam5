document.addEventListener("DOMContentLoaded", function () {
  const productForm = document.getElementById("product-form");
  const productList = document.getElementById("product-list");

  // Retrieve product data from localStorage when the page loads
  const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

  // Function to render the product list from saved data
  function renderProductList() {
    if (savedProducts.length > 0) {
      productList.style.display = "block"; // Agar mahsulotlar mavjud bo'lsa, product-listni ko'rsatamiz
      productList.innerHTML = "";
      savedProducts.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <p><strong>Product Name:</strong> ${product.name}</p>
            <p><strong>Price:</strong> ${product.price}so'm</p>
        `;
        productList.appendChild(productItem);
      });
    } else {
      productList.style.display = "none"; // Agar mahsulotlar bo'lmasa, product-listni yashiramiz
    }
  }

  // Render the initial product list
  renderProductList();

  productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const productName = document.getElementById("product-name").value;
    const productPrice = document.getElementById("product-price").value;

    if (productName && productPrice) {
      // Create a new product object
      const newProduct = {
        name: productName,
        price: productPrice,
      };

      // Add the new product to the saved products array
      savedProducts.push(newProduct);

      // Save the updated product data to localStorage
      localStorage.setItem("products", JSON.stringify(savedProducts));

      // Render the product list with the new product
      renderProductList();

      // Clear the form fields
      document.getElementById("product-name").value = "";
      document.getElementById("product-price").value = "";
    }
  });
});