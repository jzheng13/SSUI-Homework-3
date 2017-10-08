// link menu items to item page
function toItemPage() {
    window.location.href = "item-details.html";
}

// add to cart function
function addToCart() {
    var item = document.getElementById('itemtoadd').innerHTML;
    var qty = document.getElementById('qty').value;
    var cartcontents = document.getElementById('cartcontents');
    var cartitems = document.getElementById('cartitems');
    cartitems.dataset.val = parseInt(cartitems.dataset.val) + 1;    
}

// remove item from cart (currently only a hack for cart with 1 item)
function removeFromCart() {
    var item = document.getElementById('itemdes');
    var pic = document.getElementById('menuitem');
    var parent = document.getElementById('cartlist');
    parent.removeChild(item);
    parent.removeChild(pic);
    var empty = document.getElementById('cartempty');
    empty.style.display = "inherit";
    var price = document.getElementById('totalprice');
    price.innerHTML = "$0.00";
}