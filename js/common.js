let resizing = ()=> {
  if ( $(window).width() > 1400 ) {
    $("#gnb .depth2").css({ display: 'block' })
    $("#gnb").removeClass('mobile')
  }
  else {
    $("#gnb .depth2").css({ display: 'none' })
  }
}
$(window).on('resize', function() {
  resizing();
})
// header
$(".depth1").on('mouseenter', function() {
  $("#header").addClass('on')
})
$("#header").on('mouseleave', function() {
  $(this).removeClass('on')
})
  // 모바일
  $('.gnbView').on('click', function () {
    $('#gnb').toggleClass('mobile');
  })
  $(document).on('click', '#gnb.mobile .item', function () {
    $(this).children('.depth2:not(:animated)').slideToggle().parents().siblings().children('.depth2').slideUp();
  })
