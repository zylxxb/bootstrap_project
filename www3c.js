hiddenList(event)
function hiddenList(event) {
  var a = $('#hidden-list').text()
  if ($('hidden-list').text = '<') {
    $('#hidden-list').click(function() {
      $('#sidebar').width('45px')
      $('#container').css({'left':'45px'})
      $('#container-header').css({'left':'45px'})
      $('#container-content').css({'left':'45px'})
      $('#hidden-list').text('>')
      return true
    })
  } else  {
    $('#hidden-list').click(function() {
      $('#sidebar').width('220px')
      $('#container').css({'left':'220px'})
      $('#container-header').css({'left':'220px'})
      $('#container-content').css({'left':'220px'})
      $('#hidden-list').text('<')
    })
  }
}
