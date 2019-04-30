window.onload = function(){
  var height = parseInt(window.innerHeight)
  var contentHeight = height - 50
  var contentBodyHeight = height - 150
  // document.querySelector('#content').style.height =contentHeight + 'px'
  // document.querySelector('#sidebar').style.height =contentHeight + 'px'
  document.querySelector('#content-body').style.height =contentBodyHeight + 'px'
}
// jQuery书写
$(function(){
  $('#hidden-list').click(function() {
    var a = $('#hidden-list').text()
    if (a === '<') {
      $('#sidebar').width('45px')
      $('#content').css({'left':'55px'})
      $('#content-header').css({'left':'55px'})
      $('#content-body').css({'left':'55px'})
      $('#hidden-list').text('>')
    } else {
      $('#sidebar').width('220px')
      $('#content').css({'left':'230px'})
      $('#content-header').css({'left':'230px'})
      $('#content-body').css({'left':'230px'})
      $('#hidden-list').text('<')
    }
  })
})

$(function(){
  $('#sidebar ul li a').click(function(event){  //在sidebar li标签增加点击事件
    event.preventDefault();                     //阻止页面自动跳转
    var url = $(this).attr('href')              //获取加载文件地址
    var title = $(this).text()                  //获取加载标签的li内容
    var tabName = $(this).data('tab')           //获取加载标签data-tab属性值
    $('#content-header ul li').removeClass('active')           //移出选中li标签的 active 类
    //定义一个li标签
    var tabStr = '<li role="presentation" class="active"><a href="#' + tabName + '" aria-controls="' + tabName + '" role="tab" data-toggle="tab"><button type="button" class="close close-button" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + title + '</a></li>'
    //将新定义的li标签添加到指定的 conten-header 内容区域的导航标签，控制 tab-content部分内容显示
    $(tabStr).appendTo('#content-header ul')
    //通过Ajax建立节点，将获取的文件地址传入
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'html',
      success: function(data) {
        //移出当前选中tab-content 的 active 类，取消显示
        $('#content #container-content div').removeClass('active')
        //建立tab-content内容区的div标签，利用参数data把获取文件的结构插入新建div中
        var tabContent = '<div role="tabpanel" class="tab-pane active" id="' + tabName +'">' + data + '</div>'
        //把需要显示的新建div 内容 插入 content的内容显示区实现显示
        $(tabContent).appendTo('#content #container-content')
      }
    })
    $('.close-button').click(function(){
      $('#content-header ul .active').remove()
      $('#container-content .active').remove()
      $('#content-header ul li:last-child').addClass('active')
      $('#container-content div:last-child').addClass('active')
    })
  })
})
