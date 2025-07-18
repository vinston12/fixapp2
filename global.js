// There is currently no JavaScript code here.
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.testimonial-card');
  const upBtn = document.querySelector('.arrow-up');
  const downBtn = document.querySelector('.arrow-down');

  function swapCards() {
    cards.forEach(card => {
      card.classList.toggle('card-front');
      card.classList.toggle('card-back');
    });
  }

  upBtn.addEventListener('click', swapCards);
  downBtn.addEventListener('click', swapCards);
});