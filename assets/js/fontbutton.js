
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

/*
document.getElementById('fontToggle').addEventListener('click', function() {
    var fontList = document.getElementById('fontList');
    if (fontList.style.display === 'none') {
        fontList.style.display = 'block';
    } else {
        fontList.style.display = 'none';
    }
});
*/

/*
document.addEventListener('DOMContentLoaded', function() { //网页文档完全加载
    var fontList = document.getElementById('fontList');
    setTimeout(function() {
        fontList.classList.add('visible'); // 0.5秒后使列表可见
    }, 500);
});
*/
/*
document.getElementById('fontList').addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName === 'LI') {
        var body = document.body;
        body.style.fontFamily = target.getAttribute('data-font') + ', sans-serif';
        var button = document.button;
        button.style.fontFamily = target.getAttribute('data-font') + ', sans-serif';
        document.getElementById('fontList').style.display = 'none';
    }
});
*/

