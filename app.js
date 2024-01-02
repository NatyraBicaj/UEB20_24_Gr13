const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  try {
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
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
  }
});

$(document).ready(function() {
  try {
    $('.show-details1').click(function() {
      var details1 = $(this).siblings('.details1');
      details1.slideToggle();

      if (details1.is(':visible')) {
        $(this).text('Hide Details1');
      } else {
        $(this).text('Show Details1');
      }
    });

    $('.description1').fadeOut(2000, function() {
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

    $('.movie h2').last().text('Filma dhe seriale pakufi.');

    $('.movie p').first().html('<strong>Kalo nj&euml; koh&euml; sa m&euml; t&euml; mir&euml;!</strong>');

    $('.movie p').last().remove();

    $('.show-details1').remove();
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
  }
});

const dragPhoto = document.getElementById('dragPhoto');
let isDragging = false;

dragPhoto.addEventListener('mousedown', function(event) {
  try {
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
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  try {
    var filmatLink = document.getElementById("filmat-link");

    if (filmatLink) {
      filmatLink.addEventListener("click", function() {
        window.location.href = "filmat.html";
      });
    }
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
  }
});

