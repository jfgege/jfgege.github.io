document.addEventListener('DOMContentLoaded', () => {
    // 元素获取
    const searchInput = document.getElementById('searchInput');
    const appList = document.getElementById('appList');
    const filterBtn = document.getElementById('filter-btn');
    const filterBox = document.getElementById('filter-box');
    const gameCheckbox = document.getElementById('mini-game');
    const programCheckbox = document.getElementById('mini-program');
    const applyFilterBtn = document.getElementById('apply-filter-btn');
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.getElementById('search-box');
    const title = document.getElementById('title');

    // 状态变量
    let apps = []; // 原始应用数据
    let appPageData = {}; // apppage.json数据
    let activeFilters = {
        game: true,
        program: true
    };
    let currentSearchTerm = ''; // 当前搜索词

    // 加载应用数据
    function loadApps() {
        fetch('apps.json')
            .then(response => {
                if (!response.ok) throw new Error('网络响应异常');
                return response.json();
            })
            .then(data => {
                apps = data;
                loadAppPageData();
            })
            .catch(error => {
                console.error('数据加载失败:', error);
                showError();
            });
    }

    // 加载应用详情数据
    function loadAppPageData() {
        fetch('apppage.json')
            .then(response => {
                if (!response.ok) throw new Error('网络响应异常');
                return response.json();
            })
            .then(data => {
                appPageData = data;
                renderApps(); // 初始渲染应用列表
            })
            .catch(error => {
                console.error('应用详情数据加载失败:', error);
                renderApps(); // 加载失败时仍渲染应用列表
            });
    }

    // 渲染应用列表 - 关键排序逻辑在此实现
    function renderApps() {
        // 1. 先应用搜索过滤
        let filteredBySearch = apps;
        if (currentSearchTerm) {
            const searchTerm = currentSearchTerm.toLowerCase();
            filteredBySearch = apps.filter(app =>
                app.name.toLowerCase().includes(searchTerm)
            );
        }

        // 2. 再应用分类筛选
        let filteredApps = [];

        if (activeFilters.game && activeFilters.program) {
            // 如果两个都选，直接使用搜索结果
            filteredApps = filteredBySearch;
        } else {
            // 收集符合条件的应用名称
            const validAppNames = new Set();

            for (const appName in appPageData) {
                const app = appPageData[appName];
                if ((activeFilters.game && app.category === "小游戏") ||
                    (activeFilters.program && app.category === "小程序")) {
                    validAppNames.add(app.title);
                }
            }

            // 按照原始顺序筛选并保留顺序
            filteredBySearch.forEach(app => {
                if (validAppNames.has(app.name)) {
                    filteredApps.push(app);
                }
            });
        }

        // 3. 渲染最终结果
        if (filteredApps.length === 0) {
            showNoResult();
        } else {
            appList.innerHTML = filteredApps.map(app => `
                <a href="apppage.html?appName=${app.name}" target="_blank">
                    <div class="appbox">
                        <div class="appcontent">
                            <p class="apptitle">${app.name}</p>
                        </div>
                    </div>
                </a>
            `).join('');
        }
    }

    // 显示错误
    function showError() {
        appList.innerHTML = '<div class="error">应用加载失败，请刷新重试</div>';
    }

    // 显示无结果
    function showNoResult() {
        appList.innerHTML = '<div class="no-result">未找到相关应用</div>';
    }

    // 筛选按钮点击事件
    filterBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        filterBox.classList.toggle('expanded');
    });

    // 应用筛选按钮点击事件
    applyFilterBtn.addEventListener('click', function () {
        renderApps();
        filterBox.classList.remove('expanded');
    });

    // 复选框逻辑
    gameCheckbox.addEventListener('change', function () {
        if (!programCheckbox.checked && !this.checked) {
            this.checked = true; // 确保至少有一个复选框被选中
        }
        activeFilters.game = this.checked;
    });

    programCheckbox.addEventListener('change', function () {
        if (!gameCheckbox.checked && !this.checked) {
            this.checked = true; // 确保至少有一个复选框被选中
        }
        activeFilters.program = this.checked;
    });

    // 搜索按钮点击事件 - 修复搜索框显示问题
    searchBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        searchBox.classList.toggle('expanded');
        title.classList.toggle('hidden');

        // 聚焦到搜索输入框
        //if (searchBox.classList.contains('expanded')) {
        //searchInput.focus();
        //}
    });

    // 实时搜索功能
    searchInput.addEventListener('input', function () {
        currentSearchTerm = this.value.trim();
        renderApps();
    });

    // 清除搜索按钮点击事件
    document.getElementById('clear-search').addEventListener('click', function () {
        searchInput.value = '';
        currentSearchTerm = '';
        renderApps();
    });

    // 点击页面其他地方关闭筛选框和搜索框
    document.addEventListener('click', function (event) {
        if (!filterBox.contains(event.target) && !filterBtn.contains(event.target)) {
            filterBox.classList.remove('expanded');
        }

        if (!searchBox.contains(event.target) && !searchBtn.contains(event.target)) {
            searchBox.classList.remove('expanded');
            title.classList.remove('hidden');
        }
    });

    // 初始化加载
    loadApps();
});    