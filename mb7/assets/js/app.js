document.addEventListener('DOMContentLoaded', () => {
    // 元素获取
    const searchInput = document.getElementById('searchInput');
    const appList = document.getElementById('appList');


    // 实时搜索功能
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    // 加载应用数据
    let apps = [];
    function loadApps() {
        fetch('apps.json')
            .then(response => {
                if (!response.ok) throw new Error('网络响应异常');
                return response.json();
            })
            .then(data => {
                apps = data;
                renderApps(apps);
            })
            .catch(error => {
                console.error('数据加载失败:', error);
                showError();
            });
    }

    // 处理搜索
    function handleSearch(value) {
        const keyword = value.trim().toLowerCase();
        filterApps(keyword);
    }

    // 过滤应用
    function filterApps(keyword) {
        const filtered = keyword ? 
            apps.filter(app => app.name.toLowerCase().includes(keyword)) : 
            [...apps];
        
        if (filtered.length === 0) {
            showNoResult();
        } else {
            renderApps(filtered);
        }
    }

    // 渲染应用列表
    function renderApps(apps) {
        appList.innerHTML = apps.map(app => `
            <a href="apppage.html?appName=${app.name}" target="_blank">
                <div class="appbox">
	    <!--
                    <div class="appicon">
                        <img src="${app.icon}" alt="${app.name}" height="100%" width="100%">
                </div>
	-->

                <div class="appcontent">
                    <p class="apptitle">${app.name}</p>
                    </div>
                </div>
            </a>
        `).join('');
    }

    // 显示错误
    function showError() {
        appList.innerHTML = '<div class="error">应用加载失败，请刷新重试</div>';
    }

    // 显示无结果
    function showNoResult() {
        appList.innerHTML = '<div class="no-result">未找到相关应用</div>';
    }

    // 初始化加载
    loadApps();
});


//搜索部分
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');
const title = document.getElementById('title');

searchBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // 阻止事件冒泡
    searchBox.classList.toggle('expanded');
    title.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
    if (!searchBox.contains(event.target) && !searchBtn.contains(event.target)) {
        searchBox.classList.remove('expanded');
        title.classList.remove('hidden');
    }
});