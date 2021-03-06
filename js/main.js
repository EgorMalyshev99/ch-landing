$(document).ready(function() {
  // Маска для телефона
  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $.mask.definitions['~'] = '[49]';
  $("input[type='tel']").click(function() {
    $(this).setCursorPosition(2);
  }).mask("8(~99)999-99-99", {
    placeholder: "*"
  });

  // Компесатор для шапки при открытии модалки
  const header = document.querySelector('.main-header');
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    modal.addEventListener('show.bs.modal', () => {
      header.classList.add('scroll-compensate');
    });
    modal.addEventListener('hidden.bs.modal', () => {
      header.classList.remove('scroll-compensate');
    });
  });

  // Скролл до низа страницы при развернутом дисклеймере
  $(".disclaimer-btn").click(function() {
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 350);
    return false;
  });

  // Тень хэдера
  window.addEventListener('scroll', () => {
    if (window.scrollY) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
});