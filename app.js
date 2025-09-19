const openBtn = document.getElementById('menu-open-btn');
const closeBtn = document.getElementById('menu-close-btn');
const menuBox = document.getElementById('NFDev-menuBox');
 
 function openMenu() {
  menuBox.classList.add('active');
  menuBox.setAttribute('aria-hidden', 'false');
}
function closeMenu() {
  menuBox.classList.remove('active');
  menuBox.setAttribute('aria-hidden', 'true');
}

 openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);



 const OpenBasket = document.getElementById('OpenBasket');
 
const cart = document.getElementById('NFDevcart');
const overlay1 = document.getElementById('overlay');
 const closeBtn1 = document.getElementById('closeCart');

OpenBasket.addEventListener('click', () => {
  cart.classList.add('open');
  overlay1.classList.add('active'); 
});

closeBtn1.addEventListener('click', () => {
  cart.classList.remove('open');
  overlay1.classList.remove('active');  
});

overlay1.addEventListener('click', () => {
  cart.classList.remove('open');
  overlay1.classList.remove('active');  
});
