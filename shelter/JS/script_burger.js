const BTN_BURGER = document.querySelector('.burger__icon');
const BURGER_MENU = document.querySelector('.burger__menu');
const WINDOW = document.querySelector('body');
// const CLOSE_ARIA = document.querySelector('.burger');
const TITLE_MAIN = document.querySelector('.title');

BTN_BURGER.addEventListener('click', openMenu);
// CLOSE_ARIA.addEventListener('click', closeMenu);
BURGER_MENU.addEventListener('click', closeMenu);

function openMenu() {
  if (BURGER_MENU.classList.contains('burger_open')) {
    closeMenu();
    return;
  }
  //   CLOSE_ARIA.classList.add('burger_open');
  WINDOW.classList.add('scroll_lock');
  BURGER_MENU.classList.add('burger_open');
  BTN_BURGER.classList.add('rotation-90');
  TITLE_MAIN.classList.add('hide_element');
}

function closeMenu() {
  if (BURGER_MENU.classList.contains('burger_open')) {
    // CLOSE_ARIA.classList.remove('burger_open');
    WINDOW.classList.remove('scroll_lock');
    BURGER_MENU.classList.remove('burger_open');
    BTN_BURGER.classList.remove('rotation-90');
    TITLE_MAIN.classList.remove('hide_element');
  }
}
