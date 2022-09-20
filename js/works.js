$(document).ready(function(){
    loadWorks();
});

var works = [
    {   
        id: 0,
        coverImg: "img/covers/piel-de-mono-cover.png",
        coverAlt: "Portada del disco Enero de la banda Piel de Mono",
        albumName: "Enero",
        bandName: "Piel de Mono",
        albumYear: "2019",
        colaboration: "Producción, mezcla y colaboración musical"
    },
    {   
        id: 1,
        coverImg: "img/covers/patada.png",
        coverAlt: "Portada del disco Patada de la banda Patada",
        albumName: "Patada",
        bandName: "Patada",
        albumYear: "2019",
        colaboration: "Producción, mezcla y colaboración musical"
    },
    {   
        id: 2,
        coverImg: "img/covers/latronico-cover.png",
        coverAlt: "Portada del disco Aerosimulador de la banda Latrónico",
        albumName: "Aerosimulador",
        bandName: "Latrónico",
        albumYear: "2019",
        colaboration: "Colaboración musical"
    }
];

function loadWorks() {
    $.each(works, function(i, work) {
        $('#work-list').append(
            '<div id="'+i+'" class="col s12 m4">'
                +'<div class="icon-block">'
                    +'<figure id="cover" class="cover left">'
                        +'<img class="card" src="'+work.coverImg+'" alt="'+work.coverAlt+'">'
                    +'</figure>'
                    +'<h5>'+work.albumName+'</h5>'
                    +'<h5 class="banda light grey-text">'+work.bandName+' | '+work.albumYear+'</h5>'
                    +'<p class="light">'+work.colaboration+'</p>'
                +'</div>'
            +'</div>');
    });
};