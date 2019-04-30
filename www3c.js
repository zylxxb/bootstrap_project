//原声js
//原声
window.onload = function(){
    var text = document.querySelector('#hidden-list')
    text.addEventListener('click',function(event){
      var a = text.innerText
      if (a === '<') {
        document.querySelector('#sidebar').style.width = '45px'
        document.querySelector('#container').style.left = '45px'
        document.querySelector('#container-header').style.left = '45px'
        document.querySelector('#container-content').style.left = '45px'
        this.innerText = '>'
      } else {
        document.querySelector('#sidebar').style.width = '220px'
        document.querySelector('#container').style.left = '220px'
        document.querySelector('#container-header').style.left = '220px'
        document.querySelector('#container-content').style.left = '220px'
        this.innerText = '<'
      }
    })
}

//jQuery书写
// $(function(){
//   $('#hidden-list').click(function() {
//     var a = $('#hidden-list').text()
//     if (a === '<') {
//       $('#sidebar').width('45px')
//       $('#container').css({'left':'45px'})
//       $('#container-header').css({'left':'45px'})
//       $('#container-content').css({'left':'45px'})
//       $('#hidden-list').text('>')
//     } else {
//       $('#sidebar').width('220px')
//       $('#container').css({'left':'220px'})
//       $('#container-header').css({'left':'220px'})
//       $('#container-content').css({'left':'220px'})
//       $('#hidden-list').text('<')
//     }
//   })
// })
