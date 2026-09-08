
const btn=document.querySelector('.menu');
const navEl=document.querySelector('nav');
if(btn){btn.addEventListener('click',()=>navEl.classList.toggle('open'));}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>navEl.classList.remove('open')));
document.querySelectorAll('[data-filter]').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const y=b.dataset.filter;
    document.querySelectorAll('.pub').forEach(p=>p.style.display=(y==='all'||p.dataset.year===y)?'grid':'none');
  });
});
document.querySelectorAll('.year-now').forEach(x=>x.textContent=new Date().getFullYear());
