document.getElementById('sidebar-button').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-50rem';
    } else {
        sidebar.style.left = '0px';
    }
});

// 可选：添加关闭按钮的点击事件
document.getElementById('sidebar-close').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-50rem';
});


/*
// 为文档添加点击事件处理器，用于处理侧边栏的收回
document.addEventListener('click', function(event) {
    // 检查点击的元素是否为侧边栏或其子元素
    if (!sidebar.contains(event.target)) {
        // 如果点击的是侧边栏之外，将侧边栏收回
        sidebar.style.left = '-40rem';
    }
});
*/