
$("body").append(
    '<img id="sushi" src="' + chrome.extension.getURL('img/sushi_aburi_toro.png') + '"' + 
    ' style="left:' +  $(window).width() + 'px;"' + 
    ' alt="🍣"></img>');

$('#sushi').css({
    position:'absolute',
    width:'256px',
    height:'256px',
    bottom:'200px',
});

$(function(){
    var width = $('#sushi').width();
    $('#sushi').animate({'bottom':$('#sushi').offset().bottom, 'left':-width+'px'},5000, 'linear');
});