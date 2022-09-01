// //스크롤
// let n = 1;
// let num;
// let state = 1;
// let scrolling = function(e) {
//   let secPos;
//   if ( e.wheelDelta < 0 && state == 1 ) {
//     state = 0;
//     n++;
//     if ( n==5 ) {
//       n=4;
//       state = 1;
//       window.addEventListener('load', function () {
//         this.setTimeout(function() {
//             scrollTo(0,0)
//         }, 10)
//       })
//     }
//     else {
//       secPos = $("#sec"+n).position().top;
//       $("html, body").animate({ scrollTop: secPos }, 500, function() {
//         state = 1;
//       })
//     }
//   }
//   else if ( e.wheelDelta > 0 && state == 1 ) {
//     state = 0;
//     n--;
//     if ( n<1 ) {
//       n=1;
//       state = 1;
//     }
//     else {
//       secPos = $("#sec"+n).position().top;
//       $("html, body").animate({ scrollTop: secPos }, 500, function() {
//         state = 1;
//       })
//     }
//   }
//   console.log(n)
//   num = n-1;
// }
// document.addEventListener('wheel', function(e){
//     e.preventDefault();
//     scrolling(e)
//   }, {passive: false})

$("#gnb li").on('click', function() {
    let idName = $(this).children('a').attr('href')
    let idLength = idName.length;
    console.log(idLength)
    let pos = $(idName).position().top;
    $("html, body").animate({ scrollTop: pos }, 500)
    n = idName.substr(idLength-1,1)
    console.log(n)
  })
