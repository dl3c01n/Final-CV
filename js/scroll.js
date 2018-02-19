$(document).ready(function() {
  $('.button-collapse').sideNav({
    });
  $('.dropdown-button').dropdown('open');
  $('.dropdown-button').dropdown('close');
  $('.collapsible').collapsible();
  $('.carousel').carousel();
  $('.scrollspy').scrollSpy();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  var options = [
      // STAGGERED LIST TRANSITION
      {selector: '#joke', offset: 100, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      // FADE IN ANY IMAGES IN THE STAGGERED LIST       
      {selector: '#joke', offset: 100, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(options);
    
});

/* $('#parcours').css("opacity", 1).fadeIn(100); */