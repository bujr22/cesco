// header
$("#gnb").on('mouseenter', function() {
  $("#header").addClass('on')
})
$("#header").on('mouseleave', function() {
  $("#header").removeClass('on')
})
$("#header div").on('mouseleave', function() {
  $("#header div").removeClass('on')
  // 모바일
  $('.gnbView').on('click', function () {
    $('#gnb').toggleClass('mobile');
  })
  $('.item').on('click', '#gnb.mobile .item', function () {
    $(this).children('.depth2').slideToggle().parents().siblings().children('.depth2').slideUp();
  })

})
// section1
  $('#consulting #textWrap div span').css({color:'#4096d4'})
  $('#consulting #textWrap div:first ').animate({opacity:1},1000)
  $('#consulting #textWrap div:last ').delay(400).animate({opacity:1},1000)
  $('#consulting #textWrap a').delay(1000).animate({opacity:1},1000)
// section2

// section3
$("#sliderList").prepend($("#sliderList li:last"))
$("#sliderList li").not($("#sliderList li:eq(1)")).css({ opacity: 0.5 })
$('.next:not(:animated)').on('click', function() {
  $("#sliderList:not(:animated)").animate({ marginLeft: `-=700` }, 600, function() {
    $(this).append($(">li:first", this)).css({ marginLeft: -700 },600)
  })
  $("#sliderList li:eq(1):not(:animated)").animate({ width: 500, height: 300, marginTop: 100, opacity: 0.5},600)
  $("#sliderList li:eq(1) div:not(:animated)").animate({ width: 500, height: 250, borderRadius: 15},600)
  $("#sliderList li:eq(1) a:not(:animated)").animate({ fontSize:15})
  $("#sliderList li:eq(2):not(:animated)").animate({ width: 1000, height: 600, marginTop: 0, opacity: 1 },600)
  $("#sliderList li:eq(2) div:not(:animated)").animate({ width: 1000, height: 500, borderRadius: 30},600)
  $("#sliderList li:eq(2) a:not(:animated)").animate({ fontSize:30})
})
$(".prev:not(:animated)").on('click', function() {
  $("#sliderList:not(:animated)").prepend($("#sliderList li:last")).css({ marginLeft: -1400 },600)
  $("#sliderList li:eq(1):not(:animated)").css({ width: 500, height: 300, marginTop: 100, opacity: 0.5 })
  $("#sliderList li:eq(2):not(:animated)").css({ width: 1000, height: 600, marginTop: 0, opacity: 1 })
  $("#sliderList:not(:animated)").animate({ marginLeft: `+=700`},600)
  $("#sliderList li:eq(1):not(:animated)").animate({ width: 1000, height: 600, marginTop: 0, opacity: 1 },600)
  $("#sliderList li:eq(1) div:not(:animated)").animate({ width: 1000, height: 500, borderRadius: 30},600)
  $("#sliderList li:eq(2):not(:animated)").animate({ width: 500, height: 300, marginTop: 100, opacity: 0.5 },600)
  $("#sliderList li:eq(2) div:not(:animated)").animate({ width: 500, height: 250, borderRadius: 15},600)
})
// section4
$('#membersWrap div.home').on('mouseenter', function () {
  $(this).stop().animate({marginTop:-20},10);
  $('div.home h3').stop().animate({paddingTop: 350},600)
  $('#membersWrap div.home div').animate({opacity:1})
})
$('#membersWrap div.home').on('mouseleave', function () {
  $(this).stop().animate({marginTop:0,},10)
  $('div.home h3').stop().animate({paddingTop: 500},600)
  $('#membersWrap div.home div').stop().animate({opacity:0});
})
$('#membersWrap div.food').on('mouseenter', function () {
  $(this).stop().animate({marginTop:-20,},10);
  $('div.food h3').stop().animate({paddingTop: 350},600)
  $('#membersWrap div.food div').css({opacity:1})
})
$('#membersWrap div.food').on('mouseleave', function () {
  $(this).stop().animate({marginTop:0,},10)
  $('div.food h3').stop().animate({paddingTop: 500},600)
  $('#membersWrap div.food div').css({opacity:0});
})
// section5
// footer
