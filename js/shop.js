var cartList = [];

var total = 0;

function buy(id) {
    products.forEach(element => {

        if (element["id"] === id) {

            if ( cartList.find( product => product.id === id ) ) {

                var productIndex = cartList.findIndex((product => product.id === id))
                cartList[productIndex]["qty"]++;

            } else {

                const newElement =     

                {
                    "id": element["id"],
                    "name": element["name"],
                    "price": element["price"],
                    "qty": 1, 
                    "type": element["type"],
                    "offer": element["offer"] 
                };
                
                cartList.push(newElement);
            }

            console.log(cartList);

            total++;

            updateCartProducts()
        }
   
    });
}

function updateCartProducts() {

    document.getElementById("count_product").innerHTML = total;

}


function cleanCart() {

    if (total != 0 ) {
        
        document.getElementById("count_product").innerHTML = 0;
    }

}
function open_modal() {


    if (cartList.length == 0) {

        document.getElementById("cart_list").innerHTML = "Tu carrito esta vacio";
    }

    }



// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}