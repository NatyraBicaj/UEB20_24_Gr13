const dragPhoto = document.getElementById('dragPhoto');
let isDragging = false;

dragPhoto.addEventListener('mousedown', function(event) {
  isDragging = true;
  dragPhoto.style.cursor = 'grabbing';
  const offsetX = event.clientX - dragPhoto.getBoundingClientRect().left;
  const offsetY = event.clientY - dragPhoto.getBoundingClientRect().top;

  document.addEventListener('mousemove', dragElement);
  document.addEventListener('mouseup', function() {
    isDragging = false;
    dragPhoto.style.cursor = 'grab';
    document.removeEventListener('mousemove', dragElement);
    dragPhoto.style.transition = 'transform 0.3s ease-in-out';
    dragPhoto.style.transform = 'translate(0, 0)';
  });

  function dragElement(event) {
    if (isDragging) {
      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;
      dragPhoto.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
});