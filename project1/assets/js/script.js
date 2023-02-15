
var pagewrapper = document.getElementsByClassName('page-wrapper');
$(document).ready(function(){
    if($('.raindrop').length > 0 ){
        window.console = window.console || function (t) { };
        if (document.location.search.match(/type=embed/gi)) { window.parent.postMessage("resize", "*"); }
        const es = ["💧"];
        const Drops = emoji => {
            const drop = document.createElement("div"); 
            drop.classList.add("drop"); 
            drop.innerText = es[Math.floor(Math.random() * es.length)];
            drop.style.left = Math.random() * 100 - 8 + "vw";
            drop.style.animationDuration = Math.random() * 48 - 6 + "s"; 
            document.getElementById("raindropset").appendChild(drop);
        };
        setInterval(Drops, 10); 
        const mc = document.querySelector(".drops"); 
        const mg = document.querySelector(".drop-set");
    }
    if($('.fake-player').length > 0 ){
    const player = document.querySelector('.fake-player');
    function clickHandler () { 
        const buttons = Array.from(this.children);
        buttons.forEach(button => button.classList.toggle('hidden'))
    };
     player.addEventListener('click', clickHandler);

    $(".fake-player button").click(function(){
        $("#raindropset").toggleClass("pauseset");
    });
    }
});
$(".notification-message > a").click(function(){
    $(".notiction-action").addClass("show");
});
$(".cancel-actions").click(function(){
    $(".notiction-action ").removeClass("show");
});

if($('.noti-details ,.noti-time,.notification-message .avatar, .noti-title').length > 0 ){
    var h1 = $('.noti-details ,.noti-time,.notification-message .avatar, .noti-title');

    h1.hide().contents().each(function() {
        var words;
        if (this.nodeType === 3) {
            words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
            $(this).replaceWith(words);
        } else if (this.nodeType === 1) {
            this.innerHTML = '<span> ' + this.innerHTML.split(/\s+/).join(' </span><span> ') + ' </span>';
        }   
    });
    h1.find('span').hide().each(function() {
        if( !$.trim(this.innerHTML) ) {
            $(this).remove();
        }
    });
    h1.show().find('span').each(function(i) {
        $(this).delay(20 * i).fadeIn(300);
    });
}




