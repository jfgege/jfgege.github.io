function redirectBasedOnDevice() {
    // 获取用户代理字符串
    var userAgent = navigator.userAgent;

    // 判断是否为移动设备（包括手机和平板）
    var isMobile = /Mobi|Android|iPad/i.test(userAgent);

    // 判断是否为桌面设备
    //var isDesktop = /Windows|Macintosh|Linux/i.test(userAgent) && !/Mobi|Android|iPad/i.test(userAgent);

    // 根据设备类型进行重定向
    if (isMobile) {
        // 如果是移动设备，跳转到移动版本的页面
        window.location.href = "mobile/index.html";
    //} else if (isDesktop) {
        // 如果是桌面设备，跳转到桌面版本的页面
        //window.location.href = "desktop/index.html";
    } else {
        // 对于所有其他设备，跳转到通用版本的页面
        window.location.href = "mobile/index.html";
    }
}

// 在页面加载完成后调用该函数
window.onload = redirectBasedOnDevice;