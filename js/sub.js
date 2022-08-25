$('#clientSystem ul li').hover(function () {
    $(this).css({borderColor: '#0074b7'});
    $(this).stop().animate({paddingTop:10});
    $('>p', this).css({color:'#0074b7'});
    $('>p:last', this).stop().animate({opacity:1});
}, function () {
    $(this).css({borderColor: '#dedede'});
    $(this).stop().animate({paddingTop:30});
    $('>p', this).css({color:'#000'});
    $('>p:last', this).stop().animate({opacity:0});
})
//
$('#solStep ul li').on('click', function () {
  $('#solStep ul li').removeClass('on')
  $(this).addClass('on')
})
$('#solStep ul li:eq(0)').on('click', function () {
  $('#stepWrap ul').css({marginLeft:0})
})
$('#solStep ul li:eq(1)').on('click', function () {
  $('#stepWrap ul').css({marginLeft:'-100%'})
})
$('#solStep ul li:eq(2)').on('click', function () {
  $('#stepWrap ul').css({marginLeft:'-200%'})
})
$('#solStep ul li:eq(3)').on('click', function () {
  $('#stepWrap ul').css({marginLeft:'-300%'})
})
