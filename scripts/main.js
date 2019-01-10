var forEach = Array.prototype.forEach;
var DTL_IMG_SEL = '[data-image-role="target"]';
var DTL_TTL_SEL = '[data-image-role="title"]';
var DTL_IMG_FRM = '[data-image-role="frame"]';
var THMBNL_LNK_SEL = '[data-image-role="trigger"]';
var HIDDEN_DTL_CLSS = 'hidden-detail';
var TNY_EFFECT_CLSS = 'is-tiny';
var ESC_KEY = 27;

var thumbnail_img = document.querySelectorAll(THMBNL_LNK_SEL);
var detail_img = document.querySelector(DTL_IMG_SEL);
var detail_img_frm = document.querySelector(DTL_IMG_FRM);
var detail_title = document.querySelector(DTL_TTL_SEL);
var close_btn = document.querySelector('.close');

//window.onload = initializeEvents();

//Kept getting undefined when I tried to pass in thumbnail_event(),
//but when you just call it without parentheses it works!??

/*function initializeEvents(){
   // var thumbnails = thumbnails_array();
    thumbnail_img.forEach(thumbnail_event);
    add_dtl_handlr();
}*/

//Example of an IIFE (Immediately Invoked Function Expression), removes the need for initialize events
(function(){
    thumbnail_img.forEach(thumbnail_event);
    add_dtl_handlr();
}())

function hide_detail(){
    document.body.classList.add(HIDDEN_DTL_CLSS);
}

function show_detail(){
    document.body.classList.remove(HIDDEN_DTL_CLSS);
    detail_img_frm.classList.add(TNY_EFFECT_CLSS);
    setTimeout(function(){
        detail_img_frm.classList.remove(TNY_EFFECT_CLSS);
    }, 50)
}

function add_dtl_handlr(){
    close_btn.addEventListener('click', function(){
        event.preventDefault();
        hide_detail();
    }),
    document.body.addEventListener('keyup', function(event){
        event.preventDefault();
        console.log(event.keyCode)
        if (event.keyCode === ESC_KEY){
            hide_detail();
        }
    })
}

//You don't need to turn the nodeList into an array, b/c we've set 
// a forEach usable without an array

//This function turned the nodelist into an array
/*function thumbnails_array (){
    var thumbnails = [].slice.call(thumbnail_img);
    return thumbnails;
}*/
   

function thumbnail_event(thumb){
    thumb.addEventListener('click', function(){
        event.preventDefault();
        show_detail();
        detail_img.src= this.getAttribute('data-image-url');
        detail_title.innerHTML = this.getAttribute('data-image-title');
})
}


//initializeEvents();