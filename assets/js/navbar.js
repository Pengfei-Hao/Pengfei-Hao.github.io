window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.glass-navbar');
    const navyear = document.querySelector('.navbar-year');
    const scroll = window.scrollY;

    navbar?.classList.toggle('scrolled', scroll > 0);
    navyear?.classList.toggle('scrolled', scroll > 0);
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll('.navbar-year .nav-link');
    navbarLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();  // 阻止默认的锚点跳转
        const targetId = this.getAttribute('href').substring(1);  // 获取目标ID
        const targetElement = document.getElementById(targetId);  // 获取目标元素

        // 计算目标元素的位置
        const elementTop = targetElement.offsetTop;
        const elementHeight = targetElement.offsetHeight;
        const windowHeight = window.innerHeight;

        let absoluteTop = elementTop;
        let currentElement = targetElement.offsetParent;
        while (currentElement) {
            absoluteTop += currentElement.offsetTop;
            currentElement = currentElement.offsetParent;
        }

        // 计算滚动位置使目标元素位于页面中部
        const scrollToPosition = absoluteTop  + (elementHeight / 2) - (windowHeight /3);
        // 平滑滚动到目标位置
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      });
    });
  });