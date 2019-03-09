/**
 *
 * @authors panrong
 * @date    2019-01-04 14:18:53
 * @version $Id$
 */

$(function () {
  // 隐藏 / 显示左下角固定导航栏
  $('#expandNav').click(function (e) {
    $('#nav').fadeToggle('slow');
  })

  // 隐藏 / 显示 右下角固定工具栏
  $('#expandTool').click(function (e) {
    $('#toolBottom').fadeToggle('slow');
  })

  var tools = {
    name: [
      { status: 1, label: '显示姓名', icon: 'name_hl.png' },
      { status: 0, label: '不显示姓名', icon: 'name.png' }
    ],
    background: [
      { status: 1, label: '恢复底色', icon: 'background_color_hl.png' },
      { status: 0, label: '去除底色', icon: 'background_color.png' }
    ]
  }
  var toolStatus = [1, 1]

  $('#toolName').hover(function (e) {
    $(this).children('label').html(tools.name[toolStatus[0]].label)
    $(this).children('label').show()
  }, function (e) {
    $(this).children('label').hide()
  })
  $('#toolName').click(function (e) {
    $(this).children('label').hide()
    var src = 'static/images/' + tools.name[toolStatus[0]].icon
    $(this).children('img').attr('src', src)
    toolStatus[0] = tools.name[toolStatus[0]].status
  })

  $('#toolBackground').hover(function (e) {
    $(this).children('label').html(tools.background[toolStatus[1]].label)
    $(this).children('label').show()
  }, function (e) {
    $(this).children('label').hide()
  })
  $('#toolBackground').click(function (e) {
    $(this).children('label').hide()
    var src = 'static/images/' + tools.background[toolStatus[1]].icon
    $(this).children('img').attr('src', src)
    toolStatus[1] = tools.background[toolStatus[1]].status
  })
})

// 信息弹窗
function showInfoWin (direction, left='50%', top='10%') {
  $('.info-win').css({ 'left': left, 'top': top })
  if (direction === 'left') {
    $('.triangle').css({
      'left': '-50px',
      'top': '50px',
      'transform': 'rotate(50deg)'
    })
  }
  if (direction === 'right') {
    $('.triangle').css({
      'left': '240px',
      'top': '50px',
      'transform': 'rotate(-120deg)'
    })
  }
  if (direction === 'top') {
    $('.triangle').css({
      'left': '100px',
      'top': '-100px',
      'transform': 'rotate(-160deg)'
    })
  }
  if (direction === 'bottom') {
    $('.triangle').css({
      'left': '100px',
      'top': '240px',
      'transform': 'rotate(-20deg)'
    })
  }
  $('.info-win').show('slow')
}
