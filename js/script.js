// link menu items to item page
function toItemPage(id) {
    window.location.href = "item-details-" + id +".html";
}

// add to cart function
function addToCart(id) {
    var item = document.getElementById('itemtoadd').innerHTML;
    var qty = document.getElementById('qty').value;
    var price = document.getElementById('price').innerHTML;
    var cartcontents = document.getElementById('cartcontents');
    var cartitems = document.getElementById('cartitems');
    cartitems.dataset.val = parseInt(cartitems.dataset.val) + 1;  

    var cartrolls = document.getElementById('cartrolls');
    var new_item_node = document.createElement("li");
    new_item_node.className = "roll";
    var pic = document.createElement("img");
    pic.className = "cartimage";
    pic.src = "resources/images/default" + id + ".jpg"
    var item_name = document.createElement("span");
    item_name.className = "cartitemname"
    item_name.innerHTML = "<b>" + item + "</b>";
    var new_div = document.createElement("div");
    var item_price = document.createElement("span");
    item_price.className = "cartitemprice";
    item_price.innerHTML = price;
    var item_qty = document.createElement("span");
    item_qty.className = "cartitemqty";
    item_qty.innerHTML = " x " + qty;
    new_item_node.appendChild(pic);
    new_div.appendChild(item_name);
    new_div.appendChild(item_price);
    new_div.appendChild(item_qty);
    new_item_node.appendChild(new_div);
    cartrolls.appendChild(new_item_node);

    var carttotal = document.getElementById('cartprice');
    var expr = carttotal.innerHTML.substring(1) + "+" + price.substring(1) + "*" + qty;
    carttotal.innerHTML = "$" + eval(expr);
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

    var cartitems = document.getElementById('cartitems');
    cartitems.dataset.val = 0;

    var cartrolls = document.getElementById('cartrolls');
    cartrolls.innerHTML = "Cart is empty.";
}

function showCart() {
    document.getElementById("cart-contents").classList.toggle("show");
}

function goToCart() {
    window.location.href = "cart.html";
}