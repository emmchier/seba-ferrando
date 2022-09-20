$(document).ready(function(){
    loadNav();
    initFAB();
});

var navItems = [
    {id: 0, anchor: "#discography", itemName: "discografía"},
    {id: 1, anchor: "#services", itemName: "servicios"},
    {id: 2, anchor: "#about", itemName: "bio"},
    {id: 3, anchor: "#contact", itemName: "contacto"}
];

function loadNav() {
    $.each(navItems, function(i, item) {
      $('.navigation').append(
        '<li id="'+i+'">'
          +'<a href="'+item.anchor+'" class="grey-text">'
            +'<span class="hoverNav">'+item.itemName+'</span>'
          +'</a>'
        +'</li>');
    });
}

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 650) {
      $('#scroll').fadeIn();
      $('.webTitle').fadeIn();
      $('.webTitle').addClass('appear');
    } else {
      $('#scroll').fadeOut();
      $('.webTitle').fadeOut();
      $('.webTitle').removeClass('appear');
    }
  });
  $('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  $('#brand-logo').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
  
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            // según el HEADER que tenga, debo bajar o subir el -88 a -80, y tambien el height de cada section. Esto dependerá de cada web.
            scrollTop: target.offset().top -0
          }, 400);
          return false;
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.sidenav-videos');
    M.Sidenav.init(forms, {edge: 'left'});
  });

  function initFAB() {
    $(".item-nav-res a").click(function() {
      if ($(".fixed-action-btn").hasClass('active') == true) {
        $('.nav-res-overlay').removeClass('appear');
        $('.item1').removeClass('move');
        $('.item2').removeClass('move');
        $('.fixed-action-btn ul').addClass('hide');
      } 
    });
    $(".fixed-action-btn").click(function() {
      if ($(".fixed-action-btn").hasClass('active') == false) {
        $('.fixed-action-btn ul').removeClass('hide');
        $('.fixed-action-btn').addClass('active');
        $('.nav-res-overlay').addClass('appear');
        $('.item1').addClass('move');
        $('.item2').addClass('move');
      } else {
       // $('.fixed-action-btn').removeClass('active');
        $('.nav-res-overlay').removeClass('appear');
        $('.item1').removeClass('move');
        $('.item2').removeClass('move');
      }
    });
  }



 

  
  
  
  
  
  