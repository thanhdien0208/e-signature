$(document).ready(function() {
        
    $(".popup").hide();

    $("#button-open").click(function(e) {

        openPopup();

    });

    $(".close").click(function (e) {

        closePopup();

        e.preventDefault();

    });

    $("#background").click(function () {

        closePopup();

    });

});

function openPopup(){

    var dheight = document.body.clientHeight;

    var dwidth = document.body.clientWidth;

    $("#background").width(dwidth).height(dheight);

    $("#background").fadeTo("slow",0.8);

    var $popup1=$("#popup-main");

    $popup1.css("top", (dheight-$popup1.height())/2);

    $popup1.css("left",(dwidth-$popup1.width())/2);

    $popup1.fadeIn();

}

function closePopup(){

    $("#background").fadeOut();

    $(".popup").hide();

}