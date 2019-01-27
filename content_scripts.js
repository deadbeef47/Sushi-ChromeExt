
function CreateSushi(){
    var sushi = $('<div class="sushi"' +
    // ' style="font-size:60pt;left:' + ($(window).width()) + 'px;"' + 
    ' style="font-size:60pt;right:0px;"' + 
    '>🍣</div>').appendTo('#sushis');

    var width = sushi.width();
    sushi.hide().fadeIn(700).animate({'bottom':$(sushi).offset().bottom, 'left':-width+'px'}, { duration: 7000, queue: false, easing: 'linear' }, function(){
        $(this).remove();
    });
}

$('body').append('<div id="sushis"></div>');

setInterval("CreateSushi()", 1000);