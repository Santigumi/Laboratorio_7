function postCreate(name, message, imageUrl) {
    const contenedor = document.getElementById("contenedor"); // Selecciona la sección contenedor

    for (let conteo = 1; conteo <= 826; conteo++) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("post"); // Clase CSS para el div principal

        // Crear una imagen y asignarle el atributo src con el imageUrl
        const imagen = document.createElement("img");
        imagen.src = `https://rickandmortyapi.com/api/character/avatar/${conteo}.jpeg`;

        // Agregar la imagen al div
        nuevoDiv.appendChild(imagen);

        // Crear un elemento <span> para mostrar el nombre y el número de conteo concatenados
        const nameAndCount = document.createElement("span");
        nameAndCount.classList.add("nombre-clase-css"); // Clase CSS para el nombre
        nameAndCount.textContent = name + " " + conteo; // Concatena el nombre y el número

        // Agregar el nombre y el número al div
        nuevoDiv.appendChild(nameAndCount);

        // Crear un elemento <span> para mostrar el mensaje
        const messageSpan = document.createElement("span");
        messageSpan.classList.add("mensaje-clase-css"); // Clase CSS para el mensaje
        messageSpan.textContent = message;

        // Agregar el mensaje al div
        nuevoDiv.appendChild(messageSpan);

        // Agregar el div al contenedor
        contenedor.appendChild(nuevoDiv);
    }
}

// Llama a la función con los parámetros deseados
postCreate("Personaje", "Descripción del personaje", "url_de_la_imagen.jpg");







