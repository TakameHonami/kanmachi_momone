// ハンバーガーメニュー開閉
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
