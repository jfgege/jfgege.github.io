
document.getElementById('fontToggle').addEventListener('click', function() {
    var fontList = document.getElementById('fontList');
    fontList.classList.toggle('visible'); // 使用toggle方法切换.visible类
});


document.getElementById('fontList').addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName === 'LI') {
        var body = document.body;
        body.style.fontFamily = target.getAttribute('data-font') + ', sans-serif';
        document.getElementById('fontList').classList.remove('visible'); // 移除.visible类以隐藏列表
    }
});

