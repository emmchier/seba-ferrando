$(document).ready(function(){
    loadAlbums();
    setAlbumListeners();
});

let html = document.querySelector("html");
let browserWidth = html.offsetWidth;
let browserHeight = html.offsetHeight;

function setAlbumListeners() {
    $('.trabajar-card').click(function(){
        if (browserWidth > 600) {
            if ($('.trabajar-card').hasClass('active') == false) {
                $('.trabajar-card').addClass('active');
                $('.nochernicola-card').removeClass('active');
                $('.arrow-trabajar').addClass('swipe');
                $('.arrow-nochernicola').removeClass('swipe');
                $('.trabajarLP-container').addClass('appear');
                $('.trabajarLP-container').removeClass('ocult');
                $('.nochernicola-container').addClass('ocult');
                $('.nochernicola-container').removeClass('appear');
                $('.trabajar-list').addClass('appear');
                $('.nochernicola-list').removeClass('appear');
            };
        } else {
            if (browserWidth < 600) {
                $(".collapsible .trabajar-card").collapsible('close');
            }
            $('.trabajar-card').removeClass('active');
        };
    });
    $('.nochernicola-card').click(function(){
        if (browserWidth > 600) {
            if ($('.nochernicola-card').hasClass('active') == false) {
                $('.nochernicola-card').addClass('active');
                $('.trabajar-card').removeClass('active');
                $('.arrow-nochernicola').addClass('swipe');
                $('.arrow-trabajar').removeClass('swipe');
                $('.nochernicola-container').addClass('appear');
                $('.trabajarLP-container').removeClass('appear');
                $('.nochernicola-container').removeClass('ocult');
                $('.trabajarLP-container').addClass('ocult');
                $('.nochernicola-list').addClass('appear');
                $('.trabajar-list').removeClass('appear');
            };
        } else {
            if (browserWidth < 600) {
                $(".collapsible .nochernicola-card").collapsible('close');
            }
            $('.nochernicola-card').removeClass('active');
        };
    });
};

var albums = [
    {   
        id: 0,
        albumTitle: "Trabajar la piedra",
        albumYear: "2020",
        containerClass: "trabajarLP-container",
        spotifyLink: "https://open.spotify.com/album/3NhrAnnwK7UIeQk5c3Un0o",
        cardClass: "trabajar-card",
        albumCover: "img/trabajar-la-piedra-cover.png",
        coverAlt: "Portada del álbum Trabajar la piedra",
        arrowClass: "arrow-trabajar",
        songListClass: "trabajar-list",
        spotifyText: "Escuchalo en SPOTIFY",
        timeAnimationCards: "0.2s",
        timeAnimationExpandCard: "0.2s",
        timeAnimationExpandTitle: "0.2s",
        timeAnimationArrows: "0.4s",
        timeAnimationExpandSpoty: "0.6s"
    },
    {   
        id: 1,
        albumTitle: "Nochernicola",
        albumYear: "2017",
        containerClass: "nochernicola-container",
        spotifyLink: "https://open.spotify.com/album/7B79GoBWgO5jDUOZdCuwUY",
        cardClass: "nochernicola-card",
        albumCover: "img/nochernicola-cover.png",
        coverAlt: "Portada del álbum Nochernicola",
        arrowClass: "arrow-nochernicola",
        songListClass: "nochernicola-list",
        spotifyText: "Escuchalo en SPOTIFY",
        timeAnimationCards: "0.6s",
        timeAnimationExpandCard: "0.4s",
        timeAnimationExpandTitle: "0.4s",
        timeAnimationArrows: "0.8s",
        timeAnimationExpandSpoty: "0.8s"
    }
];
var trabajarList = [
    {id: 0, songName: "Desarma tu Dolor", song: "songs/peldaños.mp3"},
    {id: 1, songName: "Águeda Franco", song: "songs/noche-blanca.mp3"},
    {id: 2, songName: "Ahora", song: "songs/fugaz.mp3"},
    {id: 3, songName: "Deseo", song: "songs/peldaños.mp3"},
    {id: 4, songName: "Quien?", song: "songs/peldaños.mp3"},
    {id: 5, songName: "Tiempo de Sanar", song: "songs/peldaños.mp3"},
    {id: 6, songName: "El Neutro", song: "songs/peldaños.mp3"}
];
var nochernicolaList = [
    {id: 0, songName: "De otoño"},
    {id: 1, songName: "Camino"},
    {id: 2, songName: "Boulevard"},
    {id: 3, songName: "Atuel"},
    {id: 4, songName: "I’ll be there"},
    {id: 5, songName: "Lobo en la ventana"},
    {id: 6, songName: "Hombre nada"},
    {id: 7, songName: "De ida y vuelta"},
    {id: 8, songName: "Canción para despedirme del mundo"},
    {id: 9, songName: "A todos los amores"}
];

function loadAlbums() {
    $.each(albums, function(i, album) {
        // COL IZQUIERDA: cards
        $('#disc-content').append(
            '<div id="'+i+'" class="btn-album valign-wrapper">'
                +'<div class="full-rounded album '+album.cardClass+' card horizontal wow fadeInLeft" data-wow-delay="'+album.timeAnimationCards+'">'
                    +'<figure class="card-image">'
                        +'<img class="rounded" src="'+album.albumCover+'" alt="'+album.coverAlt+'">'
                    +'</figure>'
                    +'<div class="card-stacked">'
                        +'<div class="card-content">'
                            +'<h3 class="albumTitle upper">'+album.albumTitle+'</h3>'
                            +'<p class="albumYear">'+album.albumYear+'</p>'
                        +'</div>'
                    +'</div>'
                +'</div>'
                +'<i class="'+album.arrowClass+' white-text fas fa-chevron-right"></i>'
            +'</div>');
            // COL IZQUIERDA: expansion albums
            $('#expand-albums').append(
                '<li id="'+i+'" class="'+album.cardClass+' wow fadeInUp" data-wow-delay="'+album.timeAnimationExpandCard+'">'
                    +'<div class="collapsible-header valign-wrapper">'
                        +'<figure class="card-image">'
                            +'<img class="card rounded" src="'+album.albumCover+'" alt="'+album.coverAlt+'">'
                        +'</figure>'
                        +'<div class="card-stacked">'
                            +'<div class="card-content">'
                                +'<h3 class="albumTitle upper">'+album.albumTitle+'</h3>'
                                +'<div class="data valign-wrapper">'
                                    +'<p class="albumYear">'+album.albumYear+'</p>'
                                    +'<a href="#!" class="arrow-expand border1 full-rounded white-text no-back waves-effect waves-light">'
                                        +'lista de temas'
                                    +'</a>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                    +'<a href="'+album.spotifyLink+'" class="btn-spotify btn center border1 full-rounded waves-effect waves-light s-white white-text no-back lower" target="_blank">'
                        +'<i class="fab fa-spotify"></i><span>Escuchalo en SPOTIFY</span>'
                    +'</a>'
                    +'<div class="collapsible-body">'
                        +'<div class="'+album.songListClass+'" data-wow-delay="'+album.timeAnimationList+'"></div>'
                    +'</div>'
                +'</li>');
        // COL DERECHA: detalle del álbum
        $('#album-content').append(
            '<div id="'+i+'" class="detail '+album.containerClass+'">'
                +'<div class="top-container">'
                    +'<div id="album-header">'
                        +'<div class="row valign-wrapper">'
                            +'<h3 id="album-title" class="title wow fadeInUp" data-wow-delay="'+album.timeAnimationExpandTitle+'">'+album.albumTitle+'</h3>'
                            +'<div class="col s12 m6 right">'
                                +'<a href="'+album.spotifyLink+'" class="right btn-listen btn full-rounded waves-effect waves-light lower wow fadeInUp white-text" target="_blank" data-wow-delay="'+album.timeAnimationExpandSpoty+'">'
                                    +'<i class="fab fa-spotify white-text"></i> '+album.spotifyText+''
                                +'</a>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                    +'<ul id="album-song-list" class="lists '+album.songListClass+'"></ul>'
                +'</div>'
            +'</div>');
            // if ($('.trabajarLP-container').hasClass('disabled') == false) {
            //     $('.trabajarLP-container .btn-listen').addClass('disabled');
            // };
        // lista de canciones del album
    });
    $.each(trabajarList, function(i, song) {
        $('.trabajar-list').append(
            '<li id="'+i+'" class="card rounded list-item">'
                +'<div class="card-content valign-wrapper">'
                    +'<i class="icon-nota-icon"></i><p>'+song.songName+'</p>'
                    //+'<a href="#!" id="play"><i class="material-icons">play_arrow</i></a>'
                +'</div>'
            +'</li>');
    });
    // $('.trabajar-list li').click(function() {
    //     var selectedSong = $(this).attr('id');
    //     if(song.paused) {
    //         playThisSong(selectedSong);
    //         document.getElementById("play").innerHTML = '<i class="material-icons">pause</i>';
    //     } else {
    //         song.src = trabajarList[selectedSong].song;
    //         song.pause();
    //         document.getElementById("play").innerHTML = '<i class="material-icons">play_arrow</i>';
    //     };
    // });
    $.each(nochernicolaList, function(i, song) {
        $('.nochernicola-list').append(
            '<li id="'+i+'" class="card rounded2 list-item">'
                +'<div class="card-content valign-wrapper">'
                    +'<i class="icon-nota-icon"></i><p>'+song.songName+'</p>'
                +'</div>'
            +'</li>');
    });
    if (browserWidth > 600) {
        $('.trabajar-card').addClass('active');
        $('.arrow-trabajar').addClass('swipe');
        $('.trabajarLP-container').addClass('appear');
        $('.trabajar-list').addClass('appear');
    } else {
        $('.collapsible .trabajar-list').addClass('appear');
        $('.collapsible .nochernicola-list').addClass('appear');
        $('.banner').removeClass('webTitle');
        $('.formulario').removeClass('card');
        $('.form-container').addClass('blackCol4');
        $('.input-field label').removeClass('black-text');
    }
    console.log(browserWidth);
};

// var song = new Audio();

// function playThisSong(id) {
//     if(id >= trabajarList.length) {
//         song.pause();
//     } else {
//         song.src = trabajarList[id].song;
//         song.play();
//         playFullList(id);
//     };
// };

// function playFullList(id) {
//     song.onended = function() {
//         playThisSong(parseInt(id)+1);
//     };
// };



