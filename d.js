const dragPhoto = document.getElementById('dragPhoto');
let isDragging = false;

dragPhoto.addEventListener('mousedown', function(event) {
  isDragging = true;
  dragPhoto.style.cursor = 'grabbing';
  const offsetX = event.clientX - dragPhoto.getBoundingClientRect().left;
  const offsetY = event.clientY - dragPhoto.getBoundingClientRect().top;

  // Set transition property before dragging starts
  dragPhoto.style.transition = 'transform 0.3s ease-in-out';

  document.addEventListener('mousemove', dragElement);
  document.addEventListener('mouseup', function() {
    isDragging = false;
    dragPhoto.style.cursor = 'grab';

    document.removeEventListener('mousemove', dragElement);

    // Delay setting the transform property until after the transition is applied
    setTimeout(() => {
      dragPhoto.style.transition = '';
      dragPhoto.style.transform = 'translate(0, 0)';
    }, 0);
  });

  function dragElement(event) {
    if (isDragging) {
      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;
      dragPhoto.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
});