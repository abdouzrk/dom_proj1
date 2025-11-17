// Shopping Cart Functionality

// Function to update total price
function updateTotal() {
  const items = document.querySelectorAll('.cart-item');
  let total = 0;

  items.forEach(item => {
    const price = parseFloat(item.querySelector('.unit-price').textContent.replace('$', ''));
    const quantity = parseInt(item.querySelector('.quantity').textContent);
    total += price * quantity;
  });

  document.getElementById('total-price').textContent = '$' + total.toFixed(2);
}

// Quantity buttons
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');

plusButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    const qtyElement = this.previousElementSibling;
    qtyElement.textContent = parseInt(qtyElement.textContent) + 1;
    updateTotal();
  });
});

minusButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    const qtyElement = this.nextElementSibling;
    let qty = parseInt(qtyElement.textContent);
    if (qty > 1) {
      qtyElement.textContent = qty - 1;
      updateTotal();
    }
  });
});

// Delete item
const deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    this.parentElement.remove();
    updateTotal();
  });
});

// Like button
const likeButtons = document.querySelectorAll('.like');

likeButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('liked');
  });
});

// Initial total calculation
updateTotal();
