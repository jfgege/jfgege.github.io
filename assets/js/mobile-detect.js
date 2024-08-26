window.addEventListener('DOMContentLoaded', function() {
    var userAgent = navigator.userAgent;
    var isMobile = /Mobi|Android|iPad|iPhone|iPod/i.test(userAgent);

    if (isMobile) {
        // 创建弹窗
        var notice = document.createElement('div');
        notice.id = 'desktopNotice';
        notice.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border: 1px solid #ccc;
            box-shadow: 2px 2px 5px #ccc;
            z-index: 1000;
            border-radius: 30px;
        `;

        // 创建关闭按钮
        var closeButton = document.createElement('button');
        closeButton.textContent = '关闭';
        closeButton.style.cssText = `
            float: right;
            margin-left: 10px;
            padding:5px 10px;
            cursor: pointer;
            background-color: #ff9b18;
            border-radius: 30px;
            border:none;
        `;
        closeButton.addEventListener('click', function() {
            notice.remove();
        });

        // 创建链接元素
        var link = document.createElement('a');
        link.href = '../mobile/index.html'; // 设置链接地址
        link.textContent = '前往移动版页面'; // 设置链接文本
        link.style.cssText = `
            font-size:150%;
        `


        // 将关闭按钮加入弹窗
        notice.appendChild(closeButton);

        // 设置弹窗内容
        var message = document.createElement('p');
        message.textContent = '检测到您使用移动设备，为了更好的浏览体验，请移步至移动版页面';
        notice.appendChild(message);

        // 在弹窗中添加链接
        notice.appendChild(link);

        // 添加弹窗到页面
        document.body.appendChild(notice);
    }
});