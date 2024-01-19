function iniciarApp() {
    obtenerCategorias();

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => console.log(datos.categories))
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);