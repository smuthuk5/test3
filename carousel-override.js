
document.addEventListener('DOMContentLoaded', function(){
  const carousel = document.getElementById('carousel');
  if(!carousel || !window.__pulseCarousel) return;
  // override moveTo to use viewport width
  const viewport = carousel.querySelector('.viewport') || carousel;
  const origMove = window.__pulseCarousel.moveTo;
  window.__pulseCarousel.moveTo = function(i){
    try{
      const slides = carousel.querySelectorAll('.slide');
      if(slides.length === 0) return;
      const idx = Math.max(0, Math.min(i, slides.length-1));
      const vw = (viewport.getBoundingClientRect && viewport.getBoundingClientRect().width) || carousel.getBoundingClientRect().width;
      const track = carousel.querySelector('.track');
      if(track) track.style.transform = 'translateX(' + (-idx * vw) + 'px)';
      if(window.__pulseCarousel._updateDots) window.__pulseCarousel._updateDots(idx);
      window.__pulseCarousel._currentIndex = idx;
    }catch(e){ if(origMove) origMove(i); }
  };
});
