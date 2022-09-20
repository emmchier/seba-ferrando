$(document).ready(function(){
    loadGallery();
});

var galeria = [
    {id: 0, class: "img1", imgSmall: "img/gallery/small/gallerySmall1.jpg", imgLarge: "img/gallery/galleryLarge1.jpg"},
    {id: 1, class: "img2", imgSmall: "img/gallery/small/gallerySmall2.jpg", imgLarge: "img/gallery/galleryLarge2.jpg"},
    {id: 2, class: "img3", imgSmall: "img/gallery/small/gallerySmall3.jpg", imgLarge: "img/gallery/galleryLarge3.jpg"},
    {id: 3, class: "img4", imgSmall: "img/gallery/small/gallerySmall4.jpg", imgLarge: "img/gallery/galleryLarge4.jpg"},
    {id: 4, class: "img5", imgSmall: "img/gallery/small/gallerySmall5.jpg", imgLarge: "img/gallery/galleryLarge5.jpg"},
    {id: 5, class: "img6", imgSmall: "img/gallery/small/gallerySmall6.jpg", imgLarge: "img/gallery/galleryLarge6.jpg"},
    {id: 6, class: "img7", imgSmall: "img/gallery/small/gallerySmall7.jpg", imgLarge: "img/gallery/galleryLarge7.jpg"},
    {id: 7, class: "img8", imgSmall: "img/gallery/small/gallerySmall8.jpg", imgLarge: "img/gallery/galleryLarge8.jpg"},
    {id: 8, class: "img9", imgSmall: "img/gallery/small/gallerySmall9.jpg", imgLarge: "img/gallery/galleryLarge9.jpg"}
];

// obtener servicios
function loadGallery() {
    $.each(galeria, function(i, img) {
        $('#gallery').append(
            '<li id="'+i+'" class="col s4 m4">'
                +'<a href="'+img.imgLarge+'" class="'+img.class+' image" data-fancybox="filter1">'
                    +'<img src="'+img.imgSmall+'" class="image">'
                +'</a>'
            +'<li>');
    });
};