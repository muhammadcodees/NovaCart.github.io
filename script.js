let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price){

cart.push({name, price});

localStorage.setItem('cart', JSON.stringify(cart));

alert(name + ' added to cart');

}

function displayCart(){

const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

if(!cartItems) return;
cartItems.innerHTML = '';

let total = 0;

cart.forEach(item => {

const div = document.createElement('div');

div.innerHTML = `
<p>${item.name} - $${item.price}</p>
<hr>
`;

cartItems.appendChild(div);

total += item.price;

});

totalPrice.innerText = 'Total: $' + total;

}

displayCart();