document.getElementById('sidebar-button').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-50rem';
        document.querySelector('.overlay').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.overlay').style.visibility = 'hidden';
    }, 300);
    } else {
        sidebar.style.left = '0px';
        document.querySelector('.overlay').style.visibility = 'visible';
        document.querySelector('.overlay').style.opacity = '1';
    }
});

function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-50rem';
    document.querySelector('.overlay').style.opacity = '0';
    setTimeout(function() {
        document.querySelector('.overlay').style.visibility = 'hidden';
    }, 300);
}