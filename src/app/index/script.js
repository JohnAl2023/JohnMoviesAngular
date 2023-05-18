//Obtener los elementos del DOM
const inputSearch = document.querySelector('#input-search');
const categorySelect = document.querySelector('#category-select');
const yearSelect = document.querySelector('#year-select');
const imageList = document.querySelector('#image-list');

//Función para filtrar las imágenes
function filterImages() {
  const searchText = inputSearch.value.toLowerCase();
  const categoryValue = categorySelect.value.toLowerCase();
  const yearValue = yearSelect.value;
  const images = imageList.querySelectorAll('li');
  let count = 0;
  
  //Recorrer las imágenes y aplicar los filtros
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const imageCategory = image.getAttribute('data-category').toLowerCase();
    const imageYear = image.getAttribute('data-year');

    if ((searchText === '' || imageCategory.indexOf(searchText) !== -1) &&
        (categoryValue === '' || imageCategory === categoryValue) &&
        (yearValue === '' || imageYear === yearValue)) {
      image.style.display = 'block';
      count++;
    } else {
      image.style.display = 'none';
    }
  }

  //Mostrar el número de resultados encontrados
  const countElement = document.querySelector('#count');
  countElement.textContent = count;
}

//Evento para el input de búsqueda
inputSearch.addEventListener('input', filterImages);

//Evento para los selectores de filtro
categorySelect.addEventListener('change', filterImages);
yearSelect.addEventListener('change', filterImages);