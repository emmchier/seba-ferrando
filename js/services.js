$(document).ready(function(){
    getServices();
    setListeners();
});

function setListeners() {
// escuchadores
$('.productor').click(function(){
    if ($('.productor').hasClass('active') == false) {
        $('.productor').addClass('active');
        $('.compositor').removeClass('active');
        $('.tecnico').removeClass('active');
        $('.services-content .productor').removeClass('hide');
        $('.services-content .compositor').addClass('hide');
        $('.services-content .tecnico').addClass('hide');
    }
});
$('.compositor').click(function(){
    if ($('.compositor').hasClass('active') == false) {
        $('.compositor').addClass('active');
        $('.productor').removeClass('active');
        $('.tecnico').removeClass('active');
        $('.services-content .compositor').removeClass('hide');
        $('.services-content .productor').addClass('hide');
        $('.services-content .tecnico').addClass('hide');
        
    }
});
$('.tecnico').click(function(){
    if ($('.tecnico').hasClass('active') == false) {
        $('.tecnico').addClass('active');
        $('.compositor').removeClass('active');
        $('.productor').removeClass('active');
        $('.services-content .tecnico').removeClass('hide');
        $('.services-content .productor').addClass('hide');
        $('.services-content .compositor').addClass('hide');
    }
});
}

// servicios

var services = [
    {
        id: 0, 
        class: "productor",
        icon: "icon-productor-icon",
        name: "Productor Musical",
        img: "showProductor",
        description: "Producción de artistas solistas o bandas. Albums y singles desde comienzo del proceso creativo hasta la obra finalizada",
        btnClass: "btn-productor",
        slideText: "PRODUCTOR<br>MUSICAL",
        slideImg: "img/servicios/slide-productor-musical.jpg",
        slideAlt: "Servicio de Productor Musical ofrecido por Sebastián Ferrando"
    },
    {
        id: 1, 
        class: "compositor",
        icon: "icon-compositor-icon",
        name: "Compositor",
        img: "showCompositor",
        description: "Compositor para bandas sonoras de películas, series, documentales y toda producción audiovisual",
        btnClass: "btn-compositor",
        slideText: "COMPOSITOR",
        slideImg: "img/servicios/slide-compositor-musical.jpg",
        slideAlt: "Servicio de Compositor Musical ofrecido por Sebastián Ferrando"
    },
    {
        id: 2, 
        class: "tecnico",
        icon: "icon-mezclador-icon",
        name: "Técnico de mezcla",
        img: "showTecnico",
        description: "Grabación y mezcla para álbums, singles y toda realización musical para artistas y entidades",
        btnClass: "btn-tecnico",
        slideText: "TÉCNICO<br>DE MEZCLA",
        slideImg: "img/servicios/slide-tecnico-de-mezcla.jpg",
        slideAlt: "Servicio de Técnico de Mezcla ofrecido por Sebastián Ferrando"
    },
];

// obtener servicios
function getServices() {
    // service detail
    $.each(services, function(i, service) {
        $('.services-list')
            .append('<li id="'+i+'" class="'+service.class+' rounded white card horizontal valign-wrapper">'+
                    '<div id="service-icon"><i class="'+service.icon+'"></i></div>'+
                    '<h3 id="service-title" class="black-text upper">'+service.name+'</h3>'+
                    '<div id="service-arrow"><i class="icon-arrow-right-icon"></i></div>'+
                '</li>');
        $('.services-content')
            .append('<li class="fullHeight '+service.class+' '+service.img+' valign-wrapper">'
                        +'<div class="container">'    
                            +'<div class="col s12 m4"></div>'
                            +'<div class="col s12 m8">'
                                +'<p class="white-text description thin upper">'+service.description+'</p>'
                            +'</div>'
                        +'</div>'
                        +'<div></div>'
                    +'</li>');
    });
    
    $('.productor').addClass('active');
    $('.services-content .compositor').addClass('hide');
    $('.services-content .tecnico').addClass('hide');
}