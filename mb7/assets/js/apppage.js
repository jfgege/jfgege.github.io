// 从 URL 中获取应用名称参数
const urlParams = new URLSearchParams(window.location.search);
const appName = urlParams.get('appName');

// 读取 JSON 文件
fetch('apppage.json')
   .then(response => response.json())
   .then(data => {
        // 根据应用名称获取应用信息
        const appInfo = data[appName];
        if (appInfo) {
            // 动态填充网页
            const title = document.getElementById('title');
            const titlehtml = `详情-${appInfo.title}`;
            title.innerHTML = titlehtml;

            //const appicon = document.getElementById('appicon');
            //const appiconhtml = `<img style="height: 150px;width: 150px;" src="${appInfo.icon}" //alt="${appInfo.title}">`;
            //appicon.innerHTML = appiconhtml;

            document.getElementById('apptitle').textContent = appInfo.title;
            document.getElementById('details').textContent = appInfo.details;
            document.getElementById('category').textContent = appInfo.category;

            /*
            const appshot = document.getElementById('appshot');
            const appshothtml = `<div>
                                    <h1 class="content-h1">-小程序截图-</h1>
                                </div>

                                <a href="${appInfo.shot}" id="shotimg" style="height: 10%;display: flex;justify-content: center;" target="_blank">
                                    <div style="display: flex;justify-content: center;">
                                        <img src="${appInfo.shot}">
                                    </div>
                                </a>`;
            appshot.innerHTML = appshothtml;
            */

            const appsite = document.getElementById('appsite');
            const appsitehtml = `<div>
                                    <h1 class="content-h1">-小程序主页-</h1>
                                </div>

                                <div>
                                    <p class="content-p">
                                        原始发布页<button class="linkbt"><a href="${appInfo.originlink}" target="_blank">点击前往</a></button>
                                    </p>
                                </div>`;
            appsite.innerHTML = appsitehtml;

            const appdl = document.getElementById('appdl');
            const appdlhtml = `<div>
                                    <h1 class="content-h1">-下载地址-</h1>
                                </div>

                               <div>
                                    <p class="content-p">
                                        原始发布页-推荐<button class="linkbt"><a href="${appInfo.originlink}" target="_blank">点击前往</a></button>
                                    </p>

                                    <p class="content-p">
                                        Github<button class="linkbt"><a href="${appInfo.github}" target="_blank">点击前往</a></button>
                                    </p>
                                </div>`;
            appdl.innerHTML = appdlhtml;
        }
    });
