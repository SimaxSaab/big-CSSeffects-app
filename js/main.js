jQuery(document).ready(function($) {
  $(document).tooltip({
    show: {
      effect: "slideDown",
      duration: 500
    },
    hide: {
      effect: "explode",
      delay: 500
    },
    position: {
      my: "left bottom",
      at: "left top"
    },
    track: true,
    close: function () {$(".ui-helper-hidden-accessible").remove();  }
  });
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});