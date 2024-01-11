const draggableElement = document.getElementById('dragPhoto');
let isDragging = false;

draggableElement.addEventListener('mousedown', function(startEvent) {
  isDragging = true;
  draggableElement.style.cursor = 'grabbing';
  const offsetX = startEvent.clientX - draggableElement.getBoundingClientRect().left;
  const offsetY = startEvent.clientY - draggableElement.getBoundingClientRect().top;
  draggableElement.style.transition = 'transform 0.3s ease-in-out';

  document.addEventListener('mousemove', dragElement);
  document.addEventListener('mouseup', function() {
    isDragging = false;
    draggableElement.style.cursor = 'grab';

    document.removeEventListener('mousemove', dragElement);
    
    setTimeout(() => {
      draggableElement.style.transition = '';
      draggableElement.style.transform = 'translate(0, 0)';
    }, 0);
  });

  function dragElement(moveEvent) {
    if (isDragging) {
      const x = moveEvent.clientX - offsetX;
      const y = moveEvent.clientY - offsetY;
      draggableElement.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
});