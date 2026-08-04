/* Live date in masthead */
document.getElementById('todayDate').textContent = 'Peshawar Edition · ' +
new Date().toLocaleDateString('en-GB',{weekday:'long', day:'numeric', month:'long', year:'numeric'});

/* Sticky nav shadow + back-to-top visibility */
var nav = document.getElementById('mainNav');
var toTop = document.getElementById('toTop');
window.addEventListener('scroll', function(){
nav.classList.toggle('scrolled', window.scrollY > 10);
toTop.classList.toggle('show', window.scrollY > 600);
}, {passive:true});
toTop.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });

/* Scroll reveal */
var io = new IntersectionObserver(function(entries){
entries.forEach(function(e){
if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
});
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

/* Animated stat counters */
var cio = new IntersectionObserver(function(entries){
entries.forEach(function(e){
if (!e.isIntersecting) return;
var el = e.target, target = parseInt(el.dataset.target,10), dur = 1600, start = performance.now();
function step(now){
var p = Math.min((now - start)/dur, 1);
var eased = 1 - Math.pow(1 - p, 3);
el.textContent = Math.round(target * eased);
if (p < 1) requestAnimationFrame(step);
}
requestAnimationFrame(step);
cio.unobserve(el);
});
}, {threshold:0.5});
document.querySelectorAll('.stat-num').forEach(function(el){ cio.observe(el); });

/* Districts rail buttons */
var rail = document.getElementById('districtRail');
document.getElementById('railPrev').addEventListener('click', function(){
rail.scrollBy({left: -rail.clientWidth * 0.7, behavior:'smooth'});
});
document.getElementById('railNext').addEventListener('click', function(){
rail.scrollBy({left: rail.clientWidth * 0.7, behavior:'smooth'});
});

/* Newsletter feedback */
document.getElementById('nlForm').addEventListener('submit', function(e){
e.preventDefault();
var form = e.target;
form.classList.add('done');
form.querySelector('input').disabled = true;
form.querySelector('button').textContent = 'Subscribed ✓';
});