// ハンバーガーメニュー開閉
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.main-nav'); // ← ulは外す

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
