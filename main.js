// Sélectionner toutes les cartes UNE FOIS
const cards = document.querySelectorAll('.flip-card');

// Flip avec le bouton "Découvrir" (une seule carte ouverte à la fois)
cards.forEach(function (card) {
  const btn = card.querySelector('.discover-btn');
  if (!btn) return;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();

    // 1. fermer toutes les autres cartes
    cards.forEach(function (otherCard) {
      if (otherCard !== card) {
        otherCard.classList.remove('is-flipped');
      }
    });

    // 2. basculer l'état de la carte cliquée
    card.classList.toggle('is-flipped');
  });
});

// // Optionnel : clic sur la carte elle-même
// cards.forEach(function (card) {
//   card.addEventListener('click', function (e) {
//     // ignorer le clic si c'est déjà géré par le bouton
//     if (e.target.closest('.discover-btn')) return;

//     cards.forEach(function (otherCard) {
//       if (otherCard !== card) {
//         otherCard.classList.remove('is-flipped');
//       }
//     });

//     card.classList.toggle('is-flipped');
//   });
// });


// Slider dans chaque carte
document.querySelectorAll('.card-slider').forEach(function (slider) {
  var track = slider.querySelector('.slider-track');
  var slides = slider.querySelectorAll('img');
  var prevBtn = slider.querySelector('.slider-btn.prev');
  var nextBtn = slider.querySelector('.slider-btn.next');
  var index = 0;
  var total = slides.length;

  function updateSlider() {
    var offset = -index * 100;
    track.style.transform = 'translateX(' + offset + '%)';
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      index = (index + 1) % total;
      updateSlider();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      index = (index - 1 + total) % total;
      updateSlider();
    });
  }

  // Quand la carte s'ouvre, on revient à la première image
  var card = slider.closest('.flip-card');
  if (card) {
    card.addEventListener('click', function () {
      index = 0;
      updateSlider();
    });
  }
}
);
