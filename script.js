// Simple sparkle generator + small interactions
document.addEventListener('DOMContentLoaded', function(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  const container = document.createElement('div');
  container.style.position='absolute';
  container.style.inset='0';
  container.style.pointerEvents='none';
  hero.appendChild(container);
  for(let i=0;i<28;i++){
    const s=document.createElement('div');
    s.className='sparkle';
    s.style.left = Math.random()*100 + '%';
    s.style.top = 20 + Math.random()*60 + '%';
    s.style.animationDelay = (Math.random()*2)+'s';
    container.appendChild(s);
  }
});
