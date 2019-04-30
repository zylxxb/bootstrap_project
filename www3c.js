
window.onload = function() {
  var hiddenList = document.querySelector('#hidden-list')
  hiddenList.addEventListener('click', function (event) {
    var text = this.innerText
    if (text === '<') {
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

$(function(){
  $('#sidebar ul li a').click(function(event){
    event.preventDefault();
    var url = $(this).attr('href')            //this.getAttribute('href')
    var title = $(this).text()
    var tabName = $(this).data('tab')
    $('#container-header ul li').removeClass('active')
    var tabStr = '<li role="presentation" class="active"><a href="#' + tabName + '" aria-controls="' + tabName + '" role="tab" data-toggle="tab"><button type="button" class="close close-button" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + title + '</a></li>'
    $(tabStr).appendTo('#container-header ul')
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'html',
      success: function(data) {
        $('#container-content div').removeClass('active')
        var tabContent = '<div role="tabpanel" class="tab-pane active" id="' + tabName +'">' + data + '</div>'
        $(tabContent).appendTo('#container-content')
      }
    })
  })
})
