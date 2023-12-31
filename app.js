const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

$(document).ready(function() {
  $('.show-details').click(function() {
      var details = $(this).siblings('.details');
      details.slideToggle();

      if (details.is(':visible')) {
          $(this).text('Hide Details');
      } else {
          $(this).text('Show Details');
      }
  });

  $('.description').fadeOut(2000, function() {
      $(this).fadeIn(2000);
  });

  $('.movie').hover(function() {
      $(this).animate({
          opacity: 0.7,
          marginTop: "-=10px"
      }, 200);
  }, function() {
      $(this).animate({
          opacity: 1,
          marginTop: "0"
      }, 200);
  });

  var movieTitle = $('.movie h2').first().text();
  console.log('Movie Title:', movieTitle);

  $('.movie h2').last().text('Unlimited movies, series, and more.');

  $('.movie p').first().html('<strong>Watch anywhere. Cancel anytime.</strong>');

  $('.movie p').last().remove();
  $(document).ready(function() {

    $('.show-details').remove();
});
});

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