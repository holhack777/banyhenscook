// Flip avec le bouton "Découvrir"
document.querySelectorAll('.flip-card').forEach(function (card) {
  var btn = card.querySelector('.discover-btn');
  if (!btn) return;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    card.classList.toggle('is-flipped');
  });
});

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
