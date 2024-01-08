$(document).ready(function () {
  const arrows = $(".arrow");
  const movieLists = $(".movie-list");

  arrows.each(function (i) {
    try {
      const itemNumber = $(movieLists[i]).find("img").length;
      let clickCounter = 0;

      $(this).on("click", function () {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        const transformValue = $(movieLists[i]).css("transform") !== "none" ?
          parseInt($(movieLists[i]).css("transform").match(/-?\d+/)[0]) :
          0;

        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
          $(movieLists[i]).css("transform", `translateX(${transformValue - 300}px)`);
        } else {
          $(movieLists[i]).css("transform", "translateX(0)");
          clickCounter = 0;
        }
      });

      console.log(Math.floor(window.innerWidth / 270));
    } catch (error) {
      console.error(`Error occurred: ${error.message}`);
    }
  });
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

$(document).ready(function () {
  var $scrollTopButton = $("#scrollToTopButton");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $scrollTopButton.fadeIn();
    } else {
      $scrollTopButton.fadeOut();
    }
  });

  $scrollTopButton.click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});



