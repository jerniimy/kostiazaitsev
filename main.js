const modal = document.getElementById('wrapper');
const closeButton = document.getElementById('close');

function modalWindow() {
  modal.classList.add('active');
};
function closeWindow() {
  modal.classList.remove('active');
};

// vald

document.getElementById('VALD').addEventListener('mouseover', (e) => {
  document.getElementById('VALDBackground').classList.remove('active');
  document.getElementById('VALDBackgroundHover').classList.add('active');
});
document.getElementById('VALD').addEventListener('mouseout', (e) => {
  document.getElementById('VALDBackgroundHover').classList.remove('active');
  document.getElementById('VALDBackground').classList.add('active');
});
