// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// empty list for fetched items
let shoppingCart = [];

// fetch itmes to use
const getShoppingCart = async () => {
    const response = await fetch("https://run.mocky.io/v3/4632ca94-f836-4194-971c-8cd738b30150");
    shoppingCart = await response.json();
    output(shoppingCart);
};

// run function to fetch items
getShoppingCart();

// create article of fetched itmes
const output = (items) => {
  items.forEach((item) => { 
    let article = document.createElement("article");

    let itemName = document.createElement("h3");
    itemName.setAttribute("class", "itemName")
    itemName.textContent = item.name;

    let itemDescription = document.createElement("h4");
    itemDescription.setAttribute("class", "itemDescription")
    itemDescription.textContent = item.description;

    let itemPrice = document.createElement("h4");
    itemPrice.setAttribute("class", "itemPrice")
    itemPrice.textContent = `$${item.price}`;

    let img = document.createElement("img");
    img.setAttribute("class", "itemImg")
    img.setAttribute("src", item.imageUrl);
    img.setAttribute("alt", item.itemName);

    let add_button = document.createElement("button");
    add_button.setAttribute("class", "addItem")
    add_button.textContent = "Add to Cart";

    article.appendChild(itemName);
    article.appendChild(itemDescription);
    article.appendChild(itemPrice);
    article.appendChild(img);
    article.appendChild(add_button);

    document.getElementById("options").appendChild(article);
  });
};

// use add_button to add item to cart.html with removal button
const cart = []
const addButton = document.querySelector(".addItem");

addButton.forEach(buttons => {
    buttons.onclick = function (e) {

    let list = document.querySelector("ul");
    let list_item = document.createElement("li");
    let item_name = e.closest('.addItem').querySelector('.itemName').innerHTML;
    let item_description = e.closest('.addItem').querySelector('.itemDescription').innerHTML;
    let item_price = e.closest('.addItem').querySelector('.itemPrice').innerHTML;
    let item_img = e.closest('.addItem').querySelector('.itemImg').innerHTML;
    let delete_button = document.createElement("button");
    delete_button.setAttribute("class", "removeItem")
    delete_button.textContent = "❌";

    list_item.appendChild(item_name);
    list_item.appendChild(item_description);
    list_item.appendChild(item_price);
    list_item.appendChild(item_img);
    list_item.appendChild(delete_button);

    list.appendChild(list_item);

    delete_button.addEventListener("click", function() {
        list.removeChild(list_item);
    });
    
    document.getElementById("cart").appendChild(list);
    };
});