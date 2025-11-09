// script.js for one-slide carousel
document.addEventListener('DOMContentLoaded',()=>{
 const carousel=document.getElementById('carousel');if(!carousel)return;
 const viewport=carousel.querySelector('.viewport')||carousel;
 const track=carousel.querySelector('.track');
 const slides=[...carousel.querySelectorAll('.slide')];
 const prev=carousel.querySelector('.carousel-prev');
 const next=carousel.querySelector('.carousel-next');
 let current=0;let timer=null;const INTERVAL=4500;
 function moveTo(i){const vw=viewport.getBoundingClientRect().width;current=Math.max(0,Math.min(i,slides.length-1));track.style.transform=`translateX(${-current*vw}px)`;}
 function nextSlide(){moveTo((current+1)%slides.length);}
 function prevSlide(){moveTo((current-1+slides.length)%slides.length);}
 function startAuto(){stopAuto();timer=setInterval(nextSlide,INTERVAL);}
 function stopAuto(){if(timer)clearInterval(timer);}
 if(next)next.addEventListener('click',()=>{nextSlide();startAuto();});
 if(prev)prev.addEventListener('click',()=>{prevSlide();startAuto();});
 carousel.addEventListener('mouseenter',stopAuto);
 carousel.addEventListener('mouseleave',startAuto);
 window.addEventListener('resize',()=>moveTo(current));
 moveTo(0);startAuto();
});
