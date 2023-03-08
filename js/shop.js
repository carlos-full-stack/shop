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

    if (cartList.length === 0) {

        document.getElementById("msg").innerHTML = "Your cart is empty";
        console.log("el carrito esta vacio");
    
    } else {

        document.getElementById("msg").innerHTML = "";

        var productTable = document.getElementById("products");
        var tableBody = document.createElement("tbody");
        var totalPrice = 0;

        document.querySelectorAll('.data-row').forEach(row => row.remove());

        cartList.forEach ( product => {

            var tr = document.createElement('tr');
            tr.classList.add('data-row');
            
            var td = document.createElement('td');
            td.innerText = product.name;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerText = product.price;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerText = product.qty;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerText = (product.price * product.qty) ;
            tr.appendChild(td);

            totalPrice += (product.price * product.qty);

            tableBody.appendChild(tr);
            
            
        });

        productTable.appendChild(tableBody);

        document.getElementById("total-msg").innerHTML = "Total: $<span id='total_price'>" + totalPrice + "</span>";

        }

    }



    function closeModal() {

        document.getElementById("tbody").remove;
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