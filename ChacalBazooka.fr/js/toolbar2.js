let menu = document.querySelector('.menu');
document.addEventListener('scroll', function (e) {
      if (document.documentElement.scrollTop === 0) {
            menu.classList.remove('black');
      } else {
            menu.classList.add('black');
      }
});