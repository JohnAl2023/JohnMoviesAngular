// Obtener referencias a los elementos de búsqueda
var categorySelect = document.getElementById('category-select');
var yearSelect = document.getElementById('year-select');

// Obtener referencia al elemento <ul> de la lista de imágenes
var imageList = document.getElementById('image-list');

// Escuchar cambios en los campos de búsqueda
categorySelect.addEventListener('change', filterMovies);
yearSelect.addEventListener('change', filterMovies);

// Función para filtrar las películas
function filterMovies() {
  // Obtener los valores seleccionados en los campos de búsqueda
  var selectedCategory = categorySelect.value;
  var selectedYear = yearSelect.value;

  // Obtener todas las películas en la lista
  var movies = imageList.getElementsByTagName('li');

  // Recorrer todas las películas y ocultar las que no cumplan con los criterios de búsqueda
  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];

    // Obtener los valores de categoría y año almacenados en los atributos data-*
    var category = movie.getAttribute('data-category');
    var year = movie.getAttribute('data-year');

    // Verificar si la película cumple con los criterios de búsqueda
    var categoryMatch = selectedCategory === 'all' || selectedCategory === category;
    var yearMatch = selectedYear === 'all' || selectedYear === year;

    // Mostrar u ocultar la película según los criterios de búsqueda
    if (categoryMatch && yearMatch) {
      movie.style.display = 'block';  // Mostrar película
    } else {
      movie.style.display = 'none';   // Ocultar película
    }
  }
}