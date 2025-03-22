// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    // 初始化状态
    sidebar.style.right = '-300px';
    
    // 全局点击监听
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            closeMenu();
        }
    });
    
    // 移动端滑动关闭
    let touchStartX = 0;
    document.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    document.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50 && sidebar.classList.contains('active')) {
            closeMenu();
        }
    }, { passive: true });
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    if (sidebar.style.right === '0px') {
        closeMenu();
    } else {
        sidebar.style.right = '0px';
        sidebar.classList.add('active');
        toggleBtn.style.transform = 'rotate(90deg)';
    }
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    sidebar.style.right = '-300px';
    sidebar.classList.remove('active');
    toggleBtn.style.transform = 'rotate(0deg)';
}
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');

    // 初始化侧边栏
    sidebar.style.right = '-300px';
    
    // 全局点击监听
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            closeMenu();
        }
    });

    // 移动端滑动关闭
    let touchStartX = 0;
    document.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    document.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50 && sidebar.classList.contains('active')) {
            closeMenu();
        }
    }, { passive: true });
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');

    if (sidebar.style.right === '0px') {
        closeMenu();
    } else {
        sidebar.style.right = '0px';
        toggleBtn.style.transform = 'rotate(180deg)';
        sidebar.classList.add('active');
    }
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    sidebar.style.right = '-300px';
    toggleBtn.style.transform = 'rotate(0deg)';
    sidebar.classList.remove('active');
}
