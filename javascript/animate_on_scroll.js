(function () {
    var square = document.querySelector('.animate_on_scroll');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add(str(entry.target.classList[0])+"animated");
        }
      });
    });
  
    observer.observe(square);
  })();