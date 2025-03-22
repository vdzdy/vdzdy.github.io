window.onload = function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
};

function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        sidebar.style.width = '250px';
        sidebar.style.opacity = '1';
    } else {
        sidebar.style.width = '0';
        sidebar.style.opacity = '0';
        setTimeout(() => {
            sidebar.style.display = 'none';
            sidebar.style.removeProperty('width');
            sidebar.style.removeProperty('opacity');
        }, 300);
    }
}