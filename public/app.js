const API = "http://localhost:5000";

/* LOAD PRODUCTS */
async function loadProducts() {

  const res = await fetch(`${API}/products`);
  const products = await res.json();

  const div = document.getElementById("products");

  if(!div) return;

  div.innerHTML = "";

  products.forEach(p => {
    div.innerHTML += `
      <div class="card">
        <img src="https://picsum.photos/200?random=${p.id}">
        <h3>${p.name}</h3>
        <p>₹ ${p.price}</p>
        <button onclick="addToCart(${p.id})">
          Add To Cart
        </button>
      </div>
    `;
  });
}

/* CART */
function addToCart(id){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✅");
}
/* LOAD CART PRODUCTS */
async function loadCart(){

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const div = document.getElementById("cartItems");

  if(!div) return;

  div.innerHTML = "";

  cart.forEach(cid => {

    const product = products.find(p => p.id == cid);

    if(product){
      div.innerHTML += `
        <div class="card">
          <img src="https://picsum.photos/200?${product.id}">
          <h3>${product.name}</h3>
          <p>₹ ${product.price}</p>
        </div>
      `;
    }
  });
}