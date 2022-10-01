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
const back = document.getElementById('VALDBackground');
const backOnHover = document.getElementById('VALDBackgroundHover');

vald.addEventListener('mouseover', (e) => {
  back.classList.remove('active');
  backOnHover.classList.add('active');
});
vald.addEventListener('mouseout', (e) => {
  back.classList.add('active');
  backOnHover.classList.remove('active');
});
