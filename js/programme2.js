// Redraw when viewport is modified
window.addEventListener('resize', function(event){
  ScrollHeight();
});


function ScrollHeight() {
  var content = document.querySelector('#parchment');
  var container = document.querySelector('#contain');
  content.style.height = container.offsetHeight + 'px';
}
window.addEventListener("load", ScrollHeight);