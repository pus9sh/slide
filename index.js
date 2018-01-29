var a = document.querySelectorAll('#gallery .photos img')
var i = 0



// b.onclick = function () {
//   a[i].style.display = 'none' //убирает текущую картинку
//   i++
//   if (i >= a.length) {
//     i = 0
//   }
//   a[i].style.display ='block'
//
// }


    setInterval( function () {
  a[i].style.display = 'none' //убирает текущую картинку
  i++
  if (i >= a.length) {
    i = 0
  }
  a[i].style.display ='block'

}
,1000)

window.onload.setInterval()
