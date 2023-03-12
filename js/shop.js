var cartList = [];

var total = 0;

function buy(id) {
    products.forEach(element => {

        if (element["id"] === id) {

            if ( cartList.find( product => product.id === id ) ) {

                var productIndex = cartList.findIndex((product => product.id === id))
                cartList[productIndex]["qty"]++;
                cartList[productIndex]["subtotal"] += cartList[productIndex]["price"];

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

            applyPromotionsCart()
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

        // Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.

        if (element["id"] === 1 && element["qty"] >= 3 ) 
        {

            element["price"] = 10;
            element["subtotal"] = element["price"] * element["qty"];
         
        //Quan es compren 10 o més productes per a fer pastís, el seu preu es rebaixa a 2/3.
        
        } else if (element["id"] === 3 && element["qty"] >= 10 ) {

            element["price"] = (element["price"] * 2) /3;
            element["subtotal"] = parseFloat((element["price"] * element["qty"]).toFixed(2));

        }

});


}


function removeFromCart(id) {

    var productIndex = cartList.findIndex((product => product.id === id))   
    cartList.splice(productIndex, 1)    
 
}