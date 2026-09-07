const menu=document.getElementById('menu');
const nav=document.querySelector('.nav');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
const buttons=document.querySelectorAll('.filters button');
const pubs=document.querySelectorAll('.pubs article');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
 buttons.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
 const y=btn.dataset.y; pubs.forEach(p=>p.style.display=(y==='all'||p.dataset.y===y)?'grid':'none');
}));
document.getElementById('year').textContent=new Date().getFullYear();
const links=document.querySelectorAll('nav a');
const sections=[...links].map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
window.addEventListener('scroll',()=>{let current=sections[0]; sections.forEach(s=>{if(window.scrollY>=s.offsetTop-130) current=s}); links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current.id));},{passive:true});
