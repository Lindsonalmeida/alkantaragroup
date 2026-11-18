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
/* v3 motion (conta Pedro, 16/11/2026): Lenis, GSAP/ScrollTrigger, imagens quando existirem, transição entre páginas */
(()=>{const red=matchMedia('(prefers-reduced-motion: reduce)').matches;
const tenta=(src,ok)=>{const i=new Image();i.onload=()=>ok(src);i.src=src};
document.querySelectorAll('[data-img]').forEach(el=>tenta(el.dataset.img,s=>{const a=el.querySelector('.ph-in')||el;a.style.backgroundImage='url('+s+')';el.classList.add('ok')}));
const v=document.querySelector('.hero-vid');if(v&&!red&&innerWidth>700){const tv=(u,nx)=>fetch(u,{method:'HEAD'}).then(r=>{if(r.ok&&(r.headers.get('content-type')||'').includes('video')){v.src=u;v.play().then(()=>v.classList.add('on')).catch(()=>{})}else if(nx)tv(nx)}).catch(()=>nx&&tv(nx));tv(v.dataset.vid,v.dataset.alt)}
const tr=document.createElement('div');tr.className='troca';document.body.appendChild(tr);
document.querySelectorAll('a[href$=".html"],a[href="./"]').forEach(a=>a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||a.target)return;e.preventDefault();document.body.classList.add('sai');setTimeout(()=>location.href=a.href,450)}));
addEventListener('pageshow',()=>document.body.classList.remove('sai'));
const go=()=>{if(red||!window.gsap)return;const g=window.gsap;if(window.ScrollTrigger)g.registerPlugin(ScrollTrigger);

document.querySelectorAll('.h-l').forEach(h=>{g.fromTo(h,{yPercent:30,opacity:0},{yPercent:0,opacity:1,duration:1.1,ease:'expo.out',scrollTrigger:{trigger:h,start:'top 88%'}})});
document.querySelectorAll('.ph.par .ph-in').forEach(p=>g.to(p,{yPercent:12,ease:'none',scrollTrigger:{trigger:p.parentNode,start:'top bottom',end:'bottom top',scrub:true}}));
document.querySelectorAll('.ph').forEach(p=>g.from(p,{clipPath:'inset(18% 8% 18% 8%)',duration:1.4,ease:'expo.out',scrollTrigger:{trigger:p,start:'top 85%'}}));
document.querySelectorAll('.div-card,.case,.val').forEach((c,i)=>{c.classList.add('on');c.style.transition='none';g.fromTo(c,{y:60,opacity:0},{y:0,opacity:1,duration:.9,delay:(i%4)*.08,ease:'power3.out',scrollTrigger:{trigger:c,start:'top 92%'}})});
const gig=document.querySelector('.gigante');if(gig)g.from(gig,{yPercent:40,ease:'none',scrollTrigger:{trigger:gig,start:'top bottom',end:'bottom bottom',scrub:true}})};
if(document.readyState==='complete')go();else addEventListener('load',go)})();
/* vídeos das divisões (Gemini/Veo, 16/11) */
(()=>{document.querySelectorAll('.ph[data-img*="div-"]').forEach(el=>{const v=document.createElement('video');v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.preload='metadata';v.poster=el.dataset.img;v.src=el.dataset.img.replace('.jpg','.mp4');v.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover';el.querySelector('.ph-in').appendChild(v);el.classList.add('ok');new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?v.play().catch(()=>{}):v.pause())).observe(el)})})();
/* v4 luxo (conta Pedro, 18/11/2026): mídia por nome de arquivo, galeria horizontal fixada no scroll, vídeo de abertura */
(()=>{const red=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.mv[data-m]').forEach(el=>{const src=el.dataset.m,box=el.querySelector('.ph-in');
 if(src.endsWith('.mp4')){fetch(src,{method:'HEAD'}).then(r=>{if(!r.ok||!(r.headers.get('content-type')||'').includes('video'))return;const v=document.createElement('video');v.muted=true;v.loop=true;v.playsInline=true;v.preload='metadata';v.src=src;box.appendChild(v);el.classList.add('ok');new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&!red?v.play().catch(()=>{}):v.pause())).observe(el)}).catch(()=>{})}
 else{const i=new Image();i.onload=()=>{box.style.backgroundImage='url('+src+')';el.classList.add('ok')};i.src=src}});

addEventListener('load',()=>{if(red||!window.gsap||!window.ScrollTrigger||innerWidth<800)return;const t=document.querySelector('.vida-trilho');if(!t)return;
 gsap.to(t,{x:()=>-(t.scrollWidth-innerWidth+40),ease:'none',scrollTrigger:{trigger:'.vida',start:'top top',end:()=>'+='+(t.scrollWidth),pin:true,scrub:1,invalidateOnRefresh:true}});
 gsap.from('.tec-t',{y:80,opacity:0,duration:1.2,ease:'expo.out',scrollTrigger:{trigger:'.tec',start:'top 60%'}})})})();
/* v4.1 (conta Pedro, 18/11): mídia que ainda não chegou usa uma imagem já existente; nome de arquivo nunca aparece */
(()=>{const FB={'vida-maos.mp4':'f/div-labs.mp4','vida-estudio.mp4':'f/div-media.mp4','tec-nucleo.mp4':'f/hero-pedra.mp4','tec-holograma.mp4':'f/case-labs.jpg','materia-latao.mp4':'f/div-barzakh.mp4','final-horizonte.mp4':'f/div-ventures.mp4'};
document.querySelectorAll('.mv[data-m]').forEach(el=>{const n=el.dataset.m.split('/').pop();if(!FB[n])return;
 fetch(el.dataset.m,{method:'HEAD'}).then(r=>{if(r.ok&&(r.headers.get('content-type')||'').match(/video|image/))return;const box=el.querySelector('.ph-in');box.innerHTML='';const s=FB[n];
  if(s.endsWith('.mp4')){const v=document.createElement('video');v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.src=s;box.appendChild(v);v.play().catch(()=>{})}else box.style.backgroundImage='url('+s+')';el.classList.add('ok')}).catch(()=>{})})})();
