(function($){
  $(function(){
    $('.sidenav').sidenav({
      draggable: false
    });
    $('.collapsible').collapsible();
    $('.fixed-action-btn').floatingActionButton({
      //direction: 'left',
      hoverEnabled: false
    });
    $('.prev').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel-videos').carousel('prev');
    });
    $('.next').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel-videos').carousel('next');
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

// BOTONES PREV Y NEXT DEL RESERVA-SLIDER

// BOTONES PREV Y NEXT CAROUSEL
  

document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var sliderServicios = document.querySelectorAll('.carousel-servicios');
  M.Carousel.init(sliderServicios, {
    fullWidth: true,
    indicators: true
  });

  var sliderVideos = document.querySelectorAll('.carousel-videos');
  M.Carousel.init(sliderVideos, {
    indicators: true
  });
});




  



