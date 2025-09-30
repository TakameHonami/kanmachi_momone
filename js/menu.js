// ハンバーガーメニュー開閉
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.main-nav'); // ← ul に直接クラスがある

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
