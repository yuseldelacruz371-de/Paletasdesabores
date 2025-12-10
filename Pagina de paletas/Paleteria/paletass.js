let carrito = [];

/* MOSTRAR SECCIONES */
function mostrarSeccion(id) {
    document.querySelectorAll(".seccion").forEach(s => s.style.display = "none");
    document.getElementById(id).style.display = "block";
}

/* TOGGLE CARRITO */
function toggleCarrito() {
    document.getElementById("carrito").classList.toggle("oculto");
}

/* AGREGAR AL CARRITO */
function agregarAlCarrito(nombre, precio, imagen) {
    carrito.push({ nombre, precio, imagen });
    actualizarCarrito();
}

/* ACTUALIZAR CARRITO */
function actualizarCarrito() {
    const cont = document.getElementById("listaCarrito");
    const totalSpan = document.getElementById("totalCarrito");
    const badge = document.getElementById("contadorCarrito");

    cont.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;

        cont.innerHTML += `
            <div class="item-carrito">
                <img src="${item.imagen}">
                <div>
                    <p>${item.nombre}</p>
                    <span>$${item.precio}</span>
                </div>
                <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">X</button>
            </div>
        `;
    });

    totalSpan.textContent = total;
    badge.textContent = carrito.length;
}

/* ELIMINAR PALETA */
function eliminarDelCarrito(i) {
    carrito.splice(i, 1);
    actualizarCarrito();
}

/* WHATSAPP */
function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    let mensaje = "Pedido:%0A";

    carrito.forEach(p => {
        mensaje += `• ${p.nombre} - $${p.precio}%0A`;
    });

    let total = carrito.reduce((a, b) => a + b.precio, 0);

    mensaje += `%0ATotal: $${total}`;

    window.open(`https://wa.me/527811046148?text=${mensaje}`);
}
