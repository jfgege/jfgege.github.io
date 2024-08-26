window.addEventListener('DOMContentLoaded', function() {
    var userAgent = navigator.userAgent;
    var isDesktop = /Windows|Macintosh|Linux/i.test(userAgent) && !/Mobi|Android|iPad/i.test(userAgent);

    if (isDesktop) {
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
        /*
        var link = document.createElement('a');
        link.href = '../desktop/index.html'; // 设置链接地址
        link.textContent = '前往桌面版页面'; // 设置链接文本
        link.style.cssText = `
            font-size:150%;
        `
        */

        // 将关闭按钮加入弹窗
        notice.appendChild(closeButton);

        // 设置弹窗内容
        var message = document.createElement('p');
        message.textContent = '桌面版页面暂未上线，建议使用移动设备浏览以获得更好体验';
        notice.appendChild(message);

        //检测到您使用桌面设备或大屏Apple设备，为了更好的浏览体验，请移步至桌面版页面

        // 在弹窗中添加链接
        //notice.appendChild(link);

        // 添加弹窗到页面
        document.body.appendChild(notice);
    }
});