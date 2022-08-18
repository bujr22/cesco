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
