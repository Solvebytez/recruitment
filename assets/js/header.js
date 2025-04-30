
document.addEventListener('DOMContentLoaded', function() {
  const bars = document.querySelector('.bars');
  const closeMenu = document.querySelector('.close-mobile-menu');
  const mobileMenu = document.querySelector('.mobile-menu-main');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const subMenus = document.querySelectorAll('.sub-mobile-menu > a');

  bars.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
  });

  closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
  });

  mobileOverlay.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
  });

  subMenus.forEach(menu => {
    menu.addEventListener('click', function(e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      if (submenu.classList.contains('open')) {
        submenu.classList.remove('open');
      } else {
        document.querySelectorAll('.submenu').forEach(sm => sm.classList.remove('open'));
        submenu.classList.add('open');
      }
    });
  });

  window.addEventListener('scroll', function() {
    const header = document.querySelector('.mobile-menu-area');
    if (window.scrollY > 50) {
      header.classList.add('sticky-menu');
    } else {
      header.classList.remove('sticky-menu');
    }
  });
});

/*=======sticky-header==============*/
window.addEventListener('scroll', function() {
    const header = document.getElementById('sticky-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/*=======Counter==================*/
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // speed kam zyada kar sakte ho

    const options = {
        threshold: 0.6
    };

    const animateCounter = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc) + '+';
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target + '+';
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


document.addEventListener("DOMContentLoaded", function () {
  // Select both images
  const zoomImages = document.querySelectorAll(".zoom-out-image, .zoom-out-on-scroll");

  // Create an IntersectionObserver to detect when images come into view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the image is intersecting (visible in the viewport)
      if (entry.isIntersecting) {
        entry.target.classList.add("zoom-active");
        observer.unobserve(entry.target); // Stop observing once the zoom effect is triggered
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the image is visible

  // Observe each image
  zoomImages.forEach(image => {
    observer.observe(image);
  });
});


    document.addEventListener("DOMContentLoaded", function () {
      const revealWrappers = document.querySelectorAll('.reveal-wrapper');
    
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5
      });
    
      revealWrappers.forEach(wrapper => {
        observer.observe(wrapper);
      });
    });



    const video = document.getElementById("heroVideo");
  const playButton = document.getElementById("playPauseBtn");
  const playIcon = document.getElementById("playIcon");

  playButton.addEventListener("click", function () {
    if (video.paused || video.ended) {
      video.play().then(() => {
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
      }).catch(error => {
        console.error("Video play failed:", error);
      });
    } else {
      video.pause();
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
    }
  });

