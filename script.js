// ===== SLIDER =====
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;
let autoSlide;

function goTo(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

document.querySelector('.next').addEventListener('click', () => { next(); resetAuto(); });
document.querySelector('.prev').addEventListener('click', () => { prev(); resetAuto(); });
dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));

function startAuto() { autoSlide = setInterval(next, 4000); }
function resetAuto() { clearInterval(autoSlide); startAuto(); }
startAuto();

// ===== CART COUNTER =====
let cartCount = 0;
const cartCountEl = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.nav-cart');

cartIcon.addEventListener('click', () => {
  cartCount++;
  cartCountEl.textContent = cartCount;
  cartCountEl.style.transform = 'scale(1.4)';
  setTimeout(() => cartCountEl.style.transform = 'scale(1)', 200);
});

// Add to cart on product click
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
    cartCountEl.style.background = '#ff8800';
    setTimeout(() => cartCountEl.style.background = '#febd69', 300);
  });
});

// ===== BACK TO TOP =====
document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SEARCH =====
document.querySelector('.search-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) alert(`Searching for: "${q}"`);
  }
});
document.querySelector('.search-btn').addEventListener('click', () => {
  const q = document.querySelector('.search-input').value.trim();
  if (q) alert(`Searching for: "${q}"`);
});

// ===== NAVBAR SCROLL SHRINK =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '4px 16px';
  } else {
    navbar.style.padding = '8px 16px';
  }
});
