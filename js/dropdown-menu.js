/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

const model = document.querySelector('.model-list');
const complictation = document.querySelector('.complictation-list');
const allLists = document.querySelectorAll('.dropdown-content');

const showList = (currentList) => {
  currentList.classList.toggle('show-list');
}

// Close the dropdown if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches('.drop-model') && event.target.matches('.drop-complictation')) {
    model.classList.remove('show-list');
  } else if (event.target.matches('.drop-model') && !event.target.matches('.drop-complictation')) {
    complictation.classList.remove('show-list');
  } else {
    allLists.forEach(list => {
      list.classList.remove('show-list');
    });
  }
}