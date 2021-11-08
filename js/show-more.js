// Complictations
const cardsItems = document.querySelectorAll('.complictations-item');
const showBtn = document.querySelector('.showMore');
const drops = document.querySelectorAll('.dropdown-content');
let countItems = 3;

for (let i = countItems; i <= cardsItems.length - 1; i++) {
  cardsItems[i].classList.add('hidden');
}

if (cardsItems.length <= 3) {
  showBtn.style.display = 'none';
}

showBtn.addEventListener('click', () => {
  cardsItems.forEach(item => {
    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden');
    }
  });
  showBtn.style.display = 'none';
});

drops.forEach(drop => {
  drop.addEventListener('click', () => {
    showBtn.style.display = 'none';
  });
});

// Disclaimer
$('.toggleDisclaimer').click(() => {
  $('.disclaimer p').toggleClass('hidden');
});