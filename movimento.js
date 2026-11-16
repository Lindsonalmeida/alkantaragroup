(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
document.querySelectorAll('[data-acende]').forEach(p=>{p.innerHTML=p.textContent.split(' ').map(w=>'<span>'+w+'</span>').join(' ');const ss=[...p.children];
const f=()=>{const r=p.getBoundingClientRect(),v=innerHeight;const t=Math.min(1,Math.max(0,(v*.85-r.top)/(r.height+v*.35)));const n=Math.round(t*ss.length);ss.forEach((s,i)=>s.classList.toggle('on',i<n))};addEventListener('scroll',f,{passive:true});f()});
const fb=document.querySelectorAll('.filtros button');fb.forEach(b=>b.onclick=()=>{fb.forEach(x=>x.classList.remove('on'));b.classList.add('on');document.querySelectorAll('#cases .case').forEach(c=>c.style.display=!b.dataset.f||c.dataset.d===b.dataset.f?'':'none')});})();
/* v2 Awwwards (conta Pedro, 16/11/2026) */
(()=>{const ok=()=>document.body.classList.add('ok');addEventListener('load',()=>setTimeout(ok,700));setTimeout(ok,2500);
const c=document.querySelector('.cur');if(c){addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'},{passive:true});
document.querySelectorAll('a,button').forEach(a=>{a.addEventListener('mouseenter',()=>c.classList.add('big'));a.addEventListener('mouseleave',()=>c.classList.remove('big'))})}
const f=document.querySelector('.foto-slz .foto-in');if(f){const g=()=>{const r=f.parentNode.getBoundingClientRect();f.style.transform='translateY('+(r.top*-.12)+'px) scale(1.05)'};addEventListener('scroll',g,{passive:true});g()}})();
