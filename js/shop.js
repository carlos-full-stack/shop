var cartList = [];

var total = 0;

function buy(id) {
    products.forEach(element => {

        if (element["id"] === id) {

            if ( cartList.find( product => product.id === id ) ) {

                var productIndex = cartList.findIndex((product => product.id === id))
                cartList[productIndex]["qty"]++;

                applyPromotionsCart();

                cartList[productIndex]["subtotal"] = cartList[productIndex]["price"] * cartList[productIndex]["qty"] ;
            
            } else {

                const newElement =     

                {
                    "id": element["id"],
                    "name": element["name"],
                    "price": element["price"],
                    "qty": 1, 
                    "type": element["type"],
                    "offer": element["offer"],
                    "subtotal": element["price"],

                };
                
                cartList.push(newElement);
            }

            total++;

            updateCartProducts()
        }
   
    });
}

function updateCartProducts() {

    document.getElementById("count_product").innerHTML = total;

}


function cleanCart() {
        
    cartList.length = 0;
    total = 0;
    document.getElementById("count_product").innerHTML = 0;
    document.querySelectorAll('.data-row').forEach(row => row.remove());
    document.getElementById("total-msg").innerHTML = "No products";
    document.getElementById("msg").innerHTML = "Your cart is empty";


}
function open_modal() {

    if (cartList.length === 0) {

        document.getElementById("msg").innerHTML = "Your cart is empty";
    
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
            td.innerText = product.subtotal;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerHTML = '<a href="javascript:void(0)" onclick="removeFromCart(' + product.id + ')"><i class="fas fa-minus-circle"></i></a>';
            tr.appendChild(td);

            totalPrice += product.subtotal;

            tableBody.appendChild(tr);
            
            
        });

        productTable.appendChild(tableBody);

        document.getElementById("total-msg").innerHTML = "Total: $<span id='total_price'>" + totalPrice + "</span>";

        }

    }


    function closeModal() {

        document.getElementById("tbody").remove;
    }



function applyPromotionsCart() {


    cartList.forEach(element => {


        if (element["id"] === 1) {

            if (element["qty"] >= 3) {

                element["price"] = 10;

            } else  {

                element["price"] = 10.5; 

            }

        } 
        

        if (element["id"] === 3) {

            if (element["qty"] >= 10) {

                element["price"] = parseFloat(((element["price"] * 2) / 3).toFixed(2));
                element["subtotal"] = (element["price"] * element["qty"]);

            } else {

                element["price"] = 5;

            }

        }


    });
}


function removeFromCart(id) {

    var productIndex = cartList.findIndex((product => product.id === id)) 
    
    if (cartList[productIndex]["qty"] !== 1 ) {
        cartList[productIndex]["qty"]--;

        applyPromotionsCart()

        cartList[productIndex]["subtotal"] = cartList[productIndex]["price"] * cartList[productIndex]["qty"] ;

    } else {
        cartList.splice(productIndex, 1)
        document.querySelectorAll('.data-row').forEach(row => row.remove());
        document.getElementById("total-msg").innerHTML = "Total: $<span id='total_price'>" + 0 + "</span>";
    }
    
    total--;
    updateCartProducts()
    open_modal()
 
}


function saveData() {

    sessionStorage.setItem("total", total );

} 