

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

  const price = parseFloat(product.prices.price) / 100;
  const formattedPrice = price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  html += `
      <h1>${product.name}</h1>
      <img src=" ${product.images[0].src}" alt="${product.name}" class="details-image">
      <p>${product.short_description}</p>
      <p>Price: ${formattedPrice}${product.prices.currency_symbol}</p>
      <a href="" class="add-to-cart">Add to Cart</a>
    `;

  productContainer.innerHTML = html;

  // Add event listener for the "Add to Cart" button
  const addToCartButton = document.getElementById("addToCart");
  addToCartButton.addEventListener("click", () => {
    addToCart(product);
  });
}





// this is for making the header stick to the top at all time
window.onscroll = function () {
  scrollPage();
};

const header = document.querySelector(".header");

const sticky = header.offsetTop;

function scrollPage() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// function for making the hamburger menu work
function hamburgerMenu() {
  var hamburgerLinks = document.querySelector(".links");
  if (hamburgerLinks.style.display === "block") {
    hamburgerLinks.style.display = "none";
  } else {
    hamburgerLinks.style.display = "block";
  }
}
