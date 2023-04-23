const url = "https://www.jagaranti.icu/wp-json/wc/store/products?_embed";
const featuredUrl =
  "https://www.jagaranti.icu/wp-json/wc/store/products?_embed&featured=true";

async function getProducts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

getProducts().then(function (products) {
  console.log(products);
  displayProducts(products);
});

function displayProducts(products) {
  const productContainer = document.querySelector(".product-container");
  let html = "";

  products.forEach(function (product) {
    let imageUrl = "";
    let imageAlt = "Movie cover";
    if (product.images && product.images.length > 0) {
      imageUrl = product.images[0].src;
      imageAlt = product.name;
    }

    const addToCart = product.add_to_cart;
    const addToCartText = addToCart ? addToCart.text : "Add to cart";
    const addToCartUrl = addToCart ? addToCart.url : "";
    const addToCartButton = `
      <a href="${addToCartUrl}" class="add-to-cart">${addToCartText}</a>
    `;

    const shortDescription = product.short_description;
    const shortDescriptionText = shortDescription
      ? shortDescription
      : "During the mid-1980s, the rap group NWA rises from the harsh streets of Compton, located in Los Angeles, California. Their music and lyrics, which depict life in the hood, lead to a revolution in Hip Hop culture.";
    const shortDescriptionUrl = shortDescription ? shortDescription.url : "";
    const shortDescriptionDisplay = `<p>${shortDescription}</p>`;

    const currencyCode = product.prices.currency_code;
    const currencySymbol = product.prices.currency_symbol;
    const decimalSeparator = product.prices.currency_decimal_separator;
    const thousandSeparator = product.prices.currency_thousand_separator;
    const prefix = product.prices.currency_prefix;
    const suffix = product.prices.currency_suffix;

    const price =
      parseFloat(product.prices.price) /
      Math.pow(10, product.prices.currency_minor_unit);
    const formattedPrice =
      prefix +
      price.toLocaleString(undefined, {
        minimumFractionDigits: product.prices.currency_minor_unit,
        maximumFractionDigits: product.prices.currency_minor_unit,
      }) +
      suffix;
    const priceDisplay = `<p>Price: ${formattedPrice}</p>`;

    html += `
      <div class="product">
        <h2>${product.name}</h2>
        <a href="shop-details.html?id=${product.id}">
          <img src="${imageUrl}" alt="${imageAlt}">
        </a>
        
        ${priceDisplay}
        ${addToCartButton}
      </div>
    `;
  });

  productContainer.innerHTML = html;
}

async function getFeaturedProducts() {
  try {
    const response = await fetch(featuredUrl);
    const data = await response.json();
    displayFeaturedProducts(data);
  } catch (error) {
    console.log(error);
  }
}

function displayFeaturedProducts(products) {
  const featuredProductContainer = document.querySelector(
    ".featured-product-container"
  );
  let html = "";

  products.forEach(function (product) {
    let imageUrl = "";
    let imageAlt = "Movie cover";
    if (product.images && product.images.length > 0) {
      imageUrl = product.images[0].src;
      imageAlt = product.name;
    }

    const addToCart = product.add_to_cart;
    const addToCartText = addToCart ? addToCart.text : "Add to cart";
    const addToCartUrl = addToCart ? addToCart.url : "";
    const addToCartButton = `
      <a href="${addToCartUrl}" class="add-to-cart">${addToCartText}</a>
    `;

    const shortDescription = product.short_description;
    const shortDescriptionText = shortDescription
      ? shortDescription
      : "During the mid-1980s, the rap group NWA rises from the harsh streets of Compton, located in Los Angeles, California. Their music and lyrics, which depict life in the hood, lead to a revolution in Hip Hop culture.";
    const shortDescriptionUrl = shortDescription ? shortDescription.url : "";
    const shortDescriptionDisplay = `<p>${shortDescription}</p>`;

    const currencyCode = product.prices.currency_code;
    const currencySymbol = product.prices.currency_symbol;
    const decimalSeparator = product.prices.currency_decimal_separator;
    const thousandSeparator = product.prices.currency_thousand_separator;
    const prefix = product.prices.currency_prefix;
    const suffix = product.prices.currency_suffix;

    const price =
      parseFloat(product.prices.price) /
      Math.pow(10, product.prices.currency_minor_unit);
    const formattedPrice =
      prefix +
      price.toLocaleString(undefined, {
        minimumFractionDigits: product.prices.currency_minor_unit,
        maximumFractionDigits: product.prices.currency_minor_unit,
      }) +
      suffix;
    const priceDisplay = `<p>Price: ${formattedPrice}</p>`;

    html += `
      <div class="product">
        <h2>${product.name}</h2>
        <a href="shop-details.html?id=${product.id}">
          <img src="${imageUrl}" alt="${imageAlt}">
        </a>
        
        ${priceDisplay}
        ${addToCartButton}
      </div>
    `;
  });

  featuredProductContainer.innerHTML = html;
}

getFeaturedProducts();

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
