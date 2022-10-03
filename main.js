const modal = document.getElementById('wrapper');
const closeButton = document.getElementById('close');

function modalWindow() {
  modal.classList.add('active');
};
function closeWindow() {
  modal.classList.remove('active');
};

// vald
const vald = document.getElementById('VALD');
const mainPage = document.getElementById('mainPage');

vald.addEventListener('mouseover', (e) => {
  mainPage.style.backgroundImage = 'url(svg/VALD/VALDMainHover.svg)';
});
vald.addEventListener('mouseout', (e) => {
  mainPage.style.backgroundImage = 'url(svg/VALD/VALDMain.svg)';
});
