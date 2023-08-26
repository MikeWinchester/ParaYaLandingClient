const HOST = 'localhost';
const PORT = '3000';
const URL = `http://${HOST}:${PORT}`;

const infoUsuario = JSON.parse(localStorage.getItem('usuario-actual')).usuario;
document.getElementById('nombre').innerHTML = `
    ${infoUsuario.nombre + ' ' +infoUsuario.apellido}
`;

function home(){
    document.getElementById('main-content').innerHTML = `
    <button style="background-image: url(assets/img/1.jpg);" class="food-button" onclick="selectOption1()">
        <h1 class="food-title">Pizza</h1>
    </button>
    <button style="background-image: url(assets/img/2.jpg);" class="food-button" onclick="selectOption2()">
        <h1 class="food-title">Hamburguesas</h1>
    </button>
    <button style="background-image: url(assets/img/3.jpg);" class="food-button" onclick="selectOption3()">
        <h1 class="food-title">Pollo</h1>
    </button>
    <button style="background-image: url(assets/img/4.jpg);" class="food-button" onclick="selectOption4()">
        <h1 class="food-title">Postres</h1>
    </button>
    `;
};

function selectOption1(){
    document.getElementById('main-content').innerHTML = `
    <div id="restaurant-container"></div>
    `;

    fetch(`${URL}/empresas/pizza`)
    .then((result) => result.json())
    .then((response) => {
        response.forEach(element => {
            document.getElementById('restaurant-container').innerHTML +=`
            <div id="res-item" onclick="loadProducts('${element.categoria}','${element._id}')">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <div style="display: flex; flex-direction: row;">
                        <img src="${element.logo}" style="width: 75px; margin: 5px; justify-content: center; align-items: center">
                        <h2 style="margin-left: 5px;">${element.nombreEmpresa}<h2>
                    </div>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center">
                        <img src="assets/img/estrella.png" style="width: 15px; height: 15px; margin-right: 5px">
                        <h5 style="margin-right: 5px;">${element.puntuacion}<h5>
                    </div>
                </div>
                <div style="padding: 5px; text-align: left; font-size: 0.9rem">
                    <p style="box-sizing: border-box;">${element.descripcion}<p>
                </div>
            </div>
            `;
        });
    });
};

function selectOption2(){
    document.getElementById('main-content').innerHTML = `
    <div id="restaurant-container"></div>
    `;

    fetch(`${URL}/empresas/hamburguesas`)
    .then((result) => result.json())
    .then((response) => {
        response.forEach(element => {
            document.getElementById('restaurant-container').innerHTML +=`
            <div id="res-item" onclick="loadProducts('${element.categoria}','${element._id}')">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <div style="display: flex; flex-direction: row;">
                        <img src="${element.logo}" style="width: 75px; margin: 5px;">
                        <h2 style="margin-left: 5px;">${element.nombreEmpresa}<h2>
                    </div>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center">
                        <img src="assets/img/estrella.png" style="width: 15px; height: 15px; margin-right: 5px">
                        <h5 style="margin-right: 5px;">${element.puntuacion}<h5>
                    </div>
                </div>
                <div style="padding: 5px; text-align: left; font-size: 0.9rem">
                    <p style="box-sizing: border-box;">${element.descripcion}<p>
                </div>
            </div>
            `;
        });
    });
};

function selectOption3(){
    document.getElementById('main-content').innerHTML = `
    <div id="restaurant-container"></div>
    `;

    fetch(`${URL}/empresas/pollo`)
    .then((result) => result.json())
    .then((response) => {
        response.forEach(element => {
            document.getElementById('restaurant-container').innerHTML +=`
            <div id="res-item" onclick="loadProducts('${element.categoria}','${element._id}')">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <div style="display: flex; flex-direction: row;">
                        <img src="${element.logo}" style="width: 75px; margin: 5px;">
                        <h2 style="margin-left: 5px;">${element.nombreEmpresa}<h2>
                    </div>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center">
                        <img src="assets/img/estrella.png" style="width: 15px; height: 15px; margin-right: 5px">
                        <h5 style="margin-right: 5px;">${element.puntuacion}<h5>
                    </div>
                </div>
                <div style="padding: 5px; text-align: left; font-size: 0.9rem">
                    <p style="box-sizing: border-box;">${element.descripcion}<p>
                </div>
            </div>
            `;
        });
    });
};

function selectOption4(){
    document.getElementById('main-content').innerHTML = `
    <div id="restaurant-container"></div>
    `;

    fetch(`${URL}/empresas/postres`)
    .then((result) => result.json())
    .then((response) => {
        response.forEach(element => {
            document.getElementById('restaurant-container').innerHTML +=`
            <div id="res-item" onclick="loadProducts('${element.categoria}','${element._id}')">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <div style="display: flex; flex-direction: row;">
                        <img src="${element.logo}" style="width: 75px; margin: 5px;">
                        <h2 style="margin-left: 5px;">${element.nombreEmpresa}<h2>
                    </div>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center">
                        <img src="assets/img/estrella.png" style="width: 15px; height: 15px; margin-right: 5px">
                        <h5 style="margin-right: 5px;">${element.puntuacion}<h5>
                    </div>
                </div>
                <div style="padding: 5px; text-align: left; font-size: 0.9rem">
                    <p style="box-sizing: border-box;">${element.descripcion}<p>
                </div>
            </div>
            `;
        });
    });
};

function loadProducts(categoria, id){

    document.getElementById('main-content').innerHTML = `
    <div id="product-container"></div>
    <div id="button-container"><button id="send-button">¡Agregar Pedido al Carro de Compras!</button></div>
    `;

    const date = new Date();
    const saveOrder = document.getElementById("send-button");
    const pedido = {
        productos: []
    };

    fetch(`${URL}/empresas/${categoria}/${id}/productos`)
    .then((result)=>result.json())
    .then((response)=>{
        const productos = response.productos;
        pedido.nombrePedido = `Pedido de ${response.nombreEmpresa}`;
        productos.forEach(element=>{
            document.getElementById('product-container').innerHTML += `
            <div class="product-item">
                <img src="${element.imagen}" alt="Producto">
                <h3 style="margin: 5px 0 0 0;">${element.nombre}</h3>
                <span class="price">L.${element.precio}</span>
                <div class="quantity-counter">
                    <label>Cantidad:</label>
                    <div class="counter">
                        <button class="decrement">-</button>
                        <span class="quantity">1</span>
                        <button class="increment">+</button>
                    </div>
                </div>
                <button class="add-button">Agregar al Pedido</button>
                <h6 class="remove-opt">Quitar del Pedido</h6>
            </div>
            `;
            const decrementButtons = document.querySelectorAll(".decrement");
            const incrementButtons = document.querySelectorAll(".increment");
            const quantitySpans = document.querySelectorAll(".quantity");
            const priceSpans = document.querySelectorAll(".price");
            const addButtons = document.querySelectorAll(".add-button");
            
            addButtons.forEach((addButton, index) => {
                addButton.addEventListener("click", () => {
                    agregarAlPedido(index);
                    const removeOpt = addButton.parentElement.querySelector(".remove-opt");
                    addButton.disabled = true;
                    removeOpt.style.display = "block";
                    removeOpt.addEventListener("click", () => {
                        removerDelPedido(index);
                        removeOpt.style.display = "none";
                        addButton.disabled = false;
                    });
                });
            });

            decrementButtons.forEach((decrementButton, index) => {
                const incrementButton = incrementButtons[index];
                const quantitySpan = quantitySpans[index];
                const priceSpan = priceSpans[index];

                let quantity = 1;

                decrementButton.addEventListener("click", () => {
                    if (quantity > 1) {
                        quantity--;
                        quantitySpan.textContent = quantity;
                        priceSpan.textContent = `L.${quantity * productos[index].precio}`;
                    };
                });

                incrementButton.addEventListener("click", () => {
                    quantity++;
                    quantitySpan.textContent = quantity;
                    priceSpan.textContent = `L.${quantity * productos[index].precio}`;
                });
            });

            function agregarAlPedido(index) {
                const producto = productos[index];
                const cantidad = parseInt(quantitySpans[index].textContent);
                const total = cantidad * producto.precio;
            
                const pedidoIndex = pedido.productos.findIndex(p => p.nombre === producto.nombre);
            
                if (pedidoIndex === -1) {
                    pedido.productos.push({
                        nombre: producto.nombre,
                        cantidad: cantidad,
                        total: total
                    });
                };
            };

            function removerDelPedido(index) {
                const producto = productos[index];
                const pedidoIndex = pedido.productos.findIndex(p => p.nombre === producto.nombre);
            
                if (pedidoIndex !== -1) {
                    pedido.productos.splice(pedidoIndex, 1);
                };
            };
        });
    });

    saveOrder.addEventListener("click", () =>{
        if(pedido.productos.length === 0){
            alert('No has agregado nada a tu pedido.')
        }else{
            const minutes = date.getMinutes();
            const hours =  date.getHours();
            const day = date.getDay() + 20;
            const month = date.getMonth() + 1;
            
            const formatHours = hours < 10 ? `0${hours}` : hours;
            const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formatDay = day < 10 ?  `0${day}` : day;
            const formatMonth = month < 10 ? `0${month}` : month;

            pedido.fecha = `${formatDay}/${formatMonth}/${date.getFullYear()}`;
            pedido.hora = `${formatHours}:${formatMinutes}`;

            fetch(`${URL}/usuarios/${infoUsuario._id}/carro-de-compras`,{
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(pedido)
            })
            document.getElementById('main-content').style.alignItems = 'center';
            document.getElementById('main-content').style.justifyContent = 'center';
            document.getElementById('main-content').innerHTML = `
                <img style="width: 200px;" src="assets/img/check-png.webp">
                <h1>Se ha añadido correctamente a tu Carro de Compras.</h1>
                <button class="cart-button" id="change" onclick="loadCart()">
                    <img style="width: 25px; margin-right: 10px;" src="assets/img/carro.png" alt="">
                    <h5>Ir a mi Carro de Compras</h5>
                </button>
            `;
        };
    });
};

let pedidoFinal = {};
function loadCart(){
    document.getElementById('main-content').style.alignItems = 'center';
    document.getElementById('main-content').style.justifyContent = 'flex-start';
    document.getElementById('main-content').innerHTML = `
    <div id="order-container"></div>
    `;

    fetch(`${URL}/usuarios/${infoUsuario._id}/carro-de-compras`)
    .then((result)=> result.json())
    .then((response)=>{
        response.forEach(element =>{
            
            productosExistentes = element.productos;

            const orderData = {
                nombre: `${element.nombrePedido}`,
                fecha: element.fecha,
                hora: element.hora,
                total: 0,
                productos: []
            };

            productosExistentes.forEach(e => {
                const productInfo = `${e.nombre} (${e.cantidad}): L.${e.total}`;
                orderData.productos.push(productInfo);
                orderData.total += e.total;
            });

            const orderContainer = document.createElement('div');
            orderContainer.className = 'order';

            orderContainer.innerHTML = `
            <div class="heading">${orderData.nombre}</div>
            <div class="detail">
                Realizado el <span>${orderData.fecha}</span> a las <span>${orderData.hora}</span>
            </div>
            <div class="products"></div>
            <div class="total">Total: L.${orderData.total}</div>
            <div class="buttons">
                <button class="button" onclick="saveOrder(this); loadAddressInfo();"data-order='${JSON.stringify(orderData)}'>Realizar Pedido</button>
                <button class="button cancel">Cancelar</button>
            </div>
            `;

            const productsContainer = orderContainer.querySelector('.products');
            orderData.productos.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.textContent = product;
                productsContainer.appendChild(productDiv);
            });

            document.getElementById('order-container').appendChild(orderContainer);
        });
    });
};

function saveOrder(button) {
    const orderData = JSON.parse(button.getAttribute('data-order'));
    pedidoFinal = orderData;
    console.log("Pedido en proceso...");
}

function loadAddressInfo(){
    document.getElementById('main-content').style.alignItems = 'flex-start';
    document.getElementById('main-content').innerHTML =`
    <div id="address-container">
        <div id="map"></div>
        <form id="address-form">
            <h2>Ingresa tu Dirección</h2>
            <textarea rows="2" cols="30" class="address-bt" id="direccionUsuario" placeholder=" Describe tu dirección" style="resize: none;" required></textarea>
            <input type="text" class="address-bt" id="latitude" placeholder="Latitud" required>
            <input type="text" class="address-bt" id="longitude" placeholder="Longitud" required>
            <input type="submit" class="address-bt confirm" value="Confirmar">
        </form>
    </div>
    `;
    initMap();
    document.getElementById("address-form").addEventListener("submit", (event) =>{
        event.preventDefault();
        pedidoFinal.cliente = {
            id: infoUsuario._id,
            nombre: infoUsuario.nombre,
            apellido: infoUsuario.apellido
        }
        pedidoFinal.direccion = {
            descripcion: document.getElementById('direccionUsuario').value,
            latitud: document.getElementById('latitude').value,
            longitud: document.getElementById('longitude').value
        };
        askCardDetails();
    });
};

let map;
let marker;

function initMap() {
    const initialPosition = { lat: 15.199999, lng: -86.241905 };
    
    map = new google.maps.Map(document.getElementById("map"), {
        center: initialPosition,
        zoom: 6,
    });

    marker = new google.maps.Marker({
        position: initialPosition,
        map: map,
        draggable: true
    });

    map.addListener("click", function(event) {
        placeMarker(event.latLng);
    });

    marker.addListener("dragend", function(event) {
        placeMarker(marker.getPosition());
    });
};

function placeMarker(location) {
    marker.setPosition(location);

    document.getElementById("latitude").value = location.lat();
    document.getElementById("longitude").value = location.lng();
};

function askCardDetails(){
    let i=1;
    document.getElementById('main-content').style.alignItems = 'center';
    document.getElementById('main-content').innerHTML =`
    <div id="final-stage">
        <div class="standard-form">
            <h2>${pedidoFinal.nombre}</h2>
            <label>Fecha del pedido: ${pedidoFinal.fecha}</label>
            <label>Hora del pedido: ${pedidoFinal.hora}</label>
            <h4 style="margin-bottom:5px;">Productos</h4>
            <div id=products></div>
            <h4 style="margin-bottom:5px;">Dirección</h4>
            <label>Descripción: ${pedidoFinal.direccion.descripcion}</label>
            <label>Latitud: ${pedidoFinal.direccion.latitud}</label>
            <label>Longitud: ${pedidoFinal.direccion.longitud}</label>
            <h3>Total a Pagar: L.${pedidoFinal.total}</h3>
        </div>
        <div class="standard-form">
            <h2>Información de Tarjeta</h2>
            <label class="field" for="card-number">Número de Tarjeta:</label>
            <input class="value" type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX">

            <label class="field" for="card-holder">Titular de la Tarjeta:</label>
            <input class="value" type="text" id="card-holder" placeholder="Nombre del Titular">

            <label class="field" for="expiration">Fecha de Expiración:</label>
            <input class="value" type="text" id="expiration" placeholder="MM/AA">

            <label class="field" for="cvv">CVV/CVC:</label>
            <input class="value" type="text" id="cvv" placeholder="XXX">

            <button id="pay-button" onclick="orderFinished()">Realizar Pago</button>
        </div>
    </div>
    `;
    pedidoFinal.productos.forEach(e=>{
        document.getElementById('products').innerHTML += `
        <div>${i}. ${e}</div>
        `;
    });
};

function orderFinished(){
    fetch(`${URL}/pedidos`, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedidoFinal)
    })
    .then((response)=>response.json())
    .then((result)=>{
        console.log(result);
    });
}

