var i = 0;
var img = [];
var time = 3000;

img[0] = 'gympic4.jpg';
img[1] = 'gympic5.jpg';
img[2] = 'gympic6.jpg';

function slideShow() {
    document.slide.src = img[i];

    if (i < img.length - 1) {
        i++
    }
    else {
        i = 0;
    }

    setTimeout('slideShow()', time)
}

window.onload = slideShow;