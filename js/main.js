 // section1
$('#consulting #textWrap div span').css({color:'#4096d4'})
$('#consulting #textWrap div:eq(0) ').animate({opacity:1},800)
$('#consulting #textWrap div:eq(1) ').delay(300).animate({opacity:1},800)
$('#consulting #textWrap a').delay(500).animate({opacity:1},800)

$('#consulting #textWrap a').hover(function () {
  $('#consulting #textWrap a > div').stop().animate({opacity:1})
}, function () {
  $('#consulting #textWrap a > div').stop().animate({opacity:0})
})

// section2
$('#cescoInfo article a').hover(function () {
  $('#cescoInfo article a > div').stop().animate({opacity:1})
}, function () {
  $('#cescoInfo article a > div').stop().animate({opacity:0})
})
// section3
$('#serviceWrap > a').hover(function () {
  $('#serviceWrap > a > div').stop().animate({opacity:1})
}, function () {
  $('#serviceWrap > a > div').stop().animate({opacity:0})
})
//

$("#sliderList").prepend($("#sliderList li:last"))
// $('#sliderList li:eq(1)').css({width: 1000, height:600, marginTop:0, opacity:1})
// $('#sliderList li:eq(1) div').css({width: 1000, height:500, borderRadius: 30})
let slider = function() {

  $("#sliderList li").not($("#sliderList li:eq(1)")).css({ opacity: 0.5 })
  $('.next').on('click', function() {
  $("#sliderList:not(:animated)").animate({ marginLeft: `-=700` }, 600, function() {
    $(this).append($(">li:first", this)).css({ marginLeft: -700 },600)
  })
  $("#sliderList li:eq(1):not(:animated)").animate({ width: 500, height: 300, marginTop: 100, opacity: 0.5},600)
  $("#sliderList li:eq(1) div:not(:animated)").animate({ width: 500, height: 250, borderRadius: 15},600)
  $("#sliderList li:eq(1) a:not(:animated)").animate({ fontSize:15},600)
  $("#sliderList li:eq(2):not(:animated)").animate({ width: 1000, height: 600, marginTop: 0, opacity: 1 },600)
  $("#sliderList li:eq(2) div:not(:animated)").animate({ width: 1000, height: 500, borderRadius: 30},600)
  $("#sliderList li:eq(2) a:not(:animated)").animate({ fontSize:30},600)
  })
  $(".prev").on('click', function() {
  $("#sliderList:not(:animated)").prepend($("#sliderList li:last")).css({ marginLeft: -1400 })
  $("#sliderList li:eq(2) a").css({fontSize:30},600)
  $("#sliderList li:eq(2)").css({ width: 1000, height: 600, marginTop: 0, opacity: 1 })
  $("#sliderList li:eq(2) div").css({ width: 1000, height: 500, borderRadius: 30})


  $("#sliderList li:eq(1):not(:animated)").animate({ width: 1000, height: 600, marginTop: 0, opacity: 1 },600)
  $("#sliderList li:eq(1) div:not(:animated)").animate({ width: 1000, height: 500, borderRadius: 30},600)
  $("#sliderList li:eq(1) a:not(:animated)").animate({fontSize:30},600)
  $("#sliderList li:eq(2):not(:animated)").animate({ width: 500, height: 300, marginTop: 100, opacity: 0.5 },600)
  $("#sliderList li:eq(2) div:not(:animated)").animate({ width: 500, height: 250, borderRadius: 15},600)
  $('#sliderLIst li:eq(2) a:not(:animated)').animate({fontSize:15})
  $("#sliderList:not(:animated)").animate({ marginLeft: `+=700`},600)
  })
}
let mobileSlider = function () {
  $('.sliderList').slick();
}
let sliderAction = function () {
  if ( $(window).innerWidth() < 1000 ) {
    $('#sliderList li').css({opacity:1})
    $('#sliderList li:eq(1)').css({width:400, height:240, marginTop:0})
    $('#sliderList li:eq(1) div').css({width: 400, height:200, borderRadius: 15})
    mobileSlider()
  }
  else {
    slider();
    $('#sliderList li:eq(1)').css({width: 1000, height:600, marginTop:0, opacity:1})
    $('#sliderList li:eq(1) div').css({width: 1000, height:500, borderRadius: 30})
  }
  }
  sliderAction();
  $(window).on('resize', function () {
    sliderAction();
  })
// section4

let member = function() {
$('#membersWrap > div').on('mouseenter', function () {
  $(this).stop().animate({marginTop:-20},0.01);
  $('h3', this).stop().animate({paddingTop: 350},400)
  $('div', this).stop().animate({opacity:1})
})
$('#membersWrap > div').on('mouseleave', function () {
  $(this).stop().animate({marginTop:0,},10)
  $('h3', this).stop().animate({paddingTop: 500},600)
  $('div', this).stop().animate({opacity:0});
})
}
let memberAction = function() {
if ( $(window).innerWidth() < 1000 ) {
  $("#membersWrap > div").off();
  $("#membersWrap > div").css({ marginTop: 0 })
  $('#membersWrap > div h3').css({paddingTop: 350})
  $('#membersWrap > div div').css({opacity:1});
}
else {
  member();
  $("#membersWrap > div").css({ marginTop: -20 })
  $('#membersWrap > div h3').css({paddingTop: 500})
  $('#membersWrap > div div').css({opacity:0});
}
}
memberAction();
$(window).on('resize', function() {
memberAction();
})
// section5
// footer
