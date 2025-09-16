let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " đã được thêm vào giỏ!");
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = item.name + " - " + item.price.toLocaleString() + "đ";
    cartItems.appendChild(li);
  });
  cartTotal.textContent = "Tổng: " + total.toLocaleString() + "đ";
}

document.addEventListener('DOMContentLoaded', updateCart);
