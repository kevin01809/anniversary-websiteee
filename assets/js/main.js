
// floating hearts
(function(){
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduce) return;
  const n = 18;
  const layer = document.createElement('div');
  layer.style.position='fixed';
  layer.style.inset='0';
  layer.style.pointerEvents='none';
  layer.style.zIndex='0';
  document.body.appendChild(layer);

  for(let i=0;i<n;i++){
    const h=document.createElement('div');
    h.textContent = Math.random()>.5 ? '❤' : '✦';
    h.style.position='absolute';
    h.style.left = (Math.random()*100)+'vw';
    h.style.top = (Math.random()*100)+'vh';
    h.style.opacity = (0.08 + Math.random()*0.18).toFixed(2);
    h.style.fontSize = (10 + Math.random()*22)+'px';
    h.style.filter='drop-shadow(0 8px 16px rgba(0,0,0,.35))';
    h.style.transform=`translateY(${Math.random()*20}px)`;
    h.style.transition='transform 6s ease-in-out';
    layer.appendChild(h);

    setInterval(()=>{
      h.style.transform=`translateY(${Math.random()*-40}px)`;
    }, 4500 + Math.random()*2500);
  }
})();


// Scroll reveal (adds a gentle entrance animation as you scroll)
(function(){
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduce) return;

  const targets = Array.from(document.querySelectorAll('.hero, .card, .t-item, .g-item'));
  if(!targets.length) return;

  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(el=>io.observe(el));
})();
