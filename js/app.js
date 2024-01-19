function iniciarApp() {

    const selectCategorias = document.querySelector('#categorias');

    obtenerCategorias();

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => mostrarCategorias(datos.categories));

    };

    function mostrarCategorias(categorias = []) {
        categorias.forEach(({ strCategory }) => {
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild(option);
        });
    };
};

document.addEventListener('DOMContentLoaded', iniciarApp);