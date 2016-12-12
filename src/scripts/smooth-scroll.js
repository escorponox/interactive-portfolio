(function (document) {

  function documentReady(cb) {
    document.readyState === "interactive" || document.readyState === "complete" ? cb() : document.addEventListener("DOMContentLoaded", cb);
  }

  documentReady(function () {

    var scrollToTopButton = document.querySelector('#scroll-to-top');

    window.addEventListener('scroll', function (event) {
      if (window.pageYOffset > 200) {
        scrollToTopButton.classList.add('c-to-top--show');
      }
      else {
        scrollToTopButton.classList.remove('c-to-top--show');
      }
    });

    scrollToTopButton.addEventListener('click', smoothScroll.bind(null, 500, 0, 0));


    function smoothScroll(duration, endScroll, offset) {
      var start = null;
      var initScroll = window.pageYOffset;
      offset = offset || 0;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, easing(progress, initScroll, endScroll - offset - initScroll, duration));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          endAnimation();
        }
      }

      // Easein Cubic - George McGinley Smith - https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
      function easing(t, b, c, d) {
        return c * (t /= d) * t * t + b;
      }

      function endAnimation() {
        window.scrollTo(0, endScroll - offset);
      }

      window.requestAnimationFrame(step);
    }

    [].forEach.call(document.querySelectorAll('a.section-link'), function (link) {
      link.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
        var linkHref = event.currentTarget.getAttribute('href');
        var target = document.querySelector(linkHref);
        smoothScroll(500, target.offsetTop);
      })
    });

    [].forEach.call(document.querySelectorAll('label.section-link'), function (link) {
      link.addEventListener('click', function (event) {
        event.stopPropagation();
        var linkHref = event.currentTarget.getAttribute('href');
        var target = document.querySelector(linkHref);
        var forInput = document.querySelector('#' + event.currentTarget.getAttribute('for'));
        if (!forInput.checked) {
          smoothScroll(500, target.offsetTop);
        }
      })
    });

    [].forEach.call(document.querySelectorAll('label.accordion-label'), function (label) {
      label.addEventListener('click', function (event) {
        event.stopPropagation();
        var forInput = document.querySelector('#' + event.currentTarget.getAttribute('for'));
        if (!forInput.checked) {
          var headerOffset = document.querySelector('header').offsetHeight;
          var target = event.currentTarget;
          setTimeout(function () {
            smoothScroll(500, target.offsetTop, headerOffset);
          }, 500);
        }
      })
    });

    [].forEach.call(document.querySelectorAll('label.accordion-label-menu'), function (label) {
      label.addEventListener('click', function (event) {
        event.stopPropagation();
        var labelFor = event.currentTarget.getAttribute('for');
        var headerOffset = document.querySelector('header').offsetHeight;
        var target = document.querySelector('label.accordion-label[for=' + labelFor + ']');
        setTimeout(function () {
          smoothScroll(500, target.offsetTop, headerOffset);
        }, 500);

      })
    });

  });
})(document);
