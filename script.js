function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// script.js
window.addEventListener('DOMContentLoaded', () => {
  const sticker = document.getElementById('randomSticker');
  const maxX = window.innerWidth - sticker.clientWidth;
  const maxY = window.innerHeight - sticker.clientHeight;

  function getRandomPosition() {
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      return { x: randomX, y: randomY };
  }

  function updateStickerPosition() {
      const newPosition = getRandomPosition();
      sticker.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
  }

  sticker.addEventListener('mouseenter', updateStickerPosition);
});
