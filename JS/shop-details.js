async function getProductDetails(productId) {
  const url = `https://www.jagaranti.icu/wp-json/wc/store/products/${productId}?_embed`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

getProductDetails(productId).then(function (product) {
  console.log(product);
  displayProductDetails(product);
});

function displayProductDetails(product) {
  const productContainer = document.querySelector(".product-container");
  let html = "";

  html += `
      <h1>${product.name}</h1>
      <img src="${product.images[0].src}" alt="${product.name}">
      <p>${product.short_description}</p>
      <p>Price: ${product.prices.price.currency_decimal_seperator}</p>
    `;

  productContainer.innerHTML = html;
}
