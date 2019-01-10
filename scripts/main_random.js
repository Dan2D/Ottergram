var forEach = Array.prototype.forEach;
var DTL_IMG_SEL = '[data-image-role="target"]';
var DTL_TTL_SEL = '[data-image-role="title"]';
var THMBNL_LNK_SEL = '[data-image-role="trigger"]';

var thumbnail_img = document.querySelectorAll(THMBNL_LNK_SEL);
var detail_img = document.querySelector(DTL_IMG_SEL);
var detail_title = document.querySelector(DTL_TTL_SEL);

//window.onload = initializeEvents();

//Kept getting undefined when I tried to pass in thumbnail_event(),
//but when you just call it without parentheses it works!??

function initializeEvents(){
   // var thumbnails = thumbnails_array();
    thumbnail_img.forEach(thumbnail_event);
}

//You don't need to turn the nodeList into an array, b/c we've set 
// a forEach usable without an array

//This function turned the nodelist into an array
/*function thumbnails_array (){
    var thumbnails = [].slice.call(thumbnail_img);
    return thumbnails;
}*/
   
function random(min,max){
    var x = Math.floor(Math.random()*(max-min+1)+min);
    return x;
}

function thumbnail_event(thumb){
    thumb.addEventListener('click', function(){
        event.preventDefault();
        var rnum = random(0,thumbnail_img.length-1);
        detail_img.src= thumbnail_img[rnum].getAttribute('data-image-url');
        detail_title.innerHTML = thumbnail_img[rnum].getAttribute('data-image-title');
})
}


initializeEvents();