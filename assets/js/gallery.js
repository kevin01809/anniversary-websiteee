
const data = window.GALLERY_DATA || [];
const grid = document.querySelector('#galleryGrid');
const lb = document.querySelector('#lightbox');
const lbImg = document.querySelector('#lbImg');
const lbTitle = document.querySelector('#lbTitle');
const lbCount = document.querySelector('#lbCount');
const lbQuote = document.querySelector('#lbQuote');
let idx = 0;

function render(){
  if(!grid) return;
  grid.innerHTML = '';
  data.forEach((item,i)=>{
    const div = document.createElement('div');
    div.className = 'g-item';
    div.innerHTML = `
      <img loading="lazy" src="${item.src}" alt="${item.alt}">
      <div class="g-cap">Memory #${i+1}</div>
      ${item.quote ? `<div class="g-quote">“${item.quote}”</div>` : ''}
    `;
    div.addEventListener('click', ()=>openLB(i));
    grid.appendChild(div);
  });
}

function openLB(i){
  idx=i;
  const item=data[idx];
  lbImg.src=item.src;
  lbImg.alt=item.alt;
  lbTitle.textContent=item.alt;
  lbCount.textContent = `${idx+1} / ${data.length}`;
  if(lbQuote){
    lbQuote.textContent = item.quote ? `“${item.quote}”` : "“With you, I don’t count the days — I collect the moments.”";
  }
  lb.classList.add('show');
  document.body.style.overflow='hidden';
}

function closeLB(){
  lb.classList.remove('show');
  document.body.style.overflow='';
}

function prev(){ openLB((idx-1+data.length)%data.length); }
function next(){ openLB((idx+1)%data.length); }

document.querySelector('#lbClose')?.addEventListener('click', closeLB);
document.querySelector('#lbPrev')?.addEventListener('click', prev);
document.querySelector('#lbNext')?.addEventListener('click', next);

lb?.addEventListener('click', (e)=>{ if(e.target === lb) closeLB(); });

window.addEventListener('keydown', (e)=>{
  if(!lb?.classList.contains('show')) return;
  if(e.key === 'Escape') closeLB();
  if(e.key === 'ArrowLeft') prev();
  if(e.key === 'ArrowRight') next();
});

render();
