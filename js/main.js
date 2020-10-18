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
    track: true,
    close: function () {$(".ui-helper-hidden-accessible").remove();  }
  });
});