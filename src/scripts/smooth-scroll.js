import throttle from 'lodash.throttle';

(function (document) {

  function documentReady(cb) {
    document.readyState === "interactive" || document.readyState === "complete" ? cb() : document.addEventListener("DOMContentLoaded", cb);
  }

  documentReady(function () {

    const scrollToTopButton = document.getElementById('scroll-to-top');
    const header = document.querySelector('header');

    window.addEventListener('scroll', throttle(showScrollToTopButton, 50));
    scrollToTopButton.addEventListener('click', smoothScroll.bind(null, 500, 0, 0));

    [].forEach.call(document.querySelectorAll('a.section-link'), (link) => {
      link.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
        const linkHref = event.currentTarget.getAttribute('href');
        const target = document.querySelector(linkHref);
        smoothScroll(500, target.offsetTop);
      })
    });

    [].forEach.call(document.querySelectorAll('label.section-link'), (link) => {
      link.addEventListener('click', function (event) {
        event.stopPropagation();
        const linkHref = event.currentTarget.getAttribute('href');
        const target = document.querySelector(linkHref);
        const forInput = document.querySelector('#' + event.currentTarget.getAttribute('for'));
        if (!forInput.checked) {
          smoothScroll(500, target.offsetTop);
        }
      })
    });

    [].forEach.call(document.querySelectorAll('label.accordion-label'), (label) => {
      label.addEventListener('click', function (event) {
        event.stopPropagation();
        const forInput = document.querySelector('#' + event.currentTarget.getAttribute('for'));
        if (!forInput.checked) {
          const target = event.currentTarget;
          setTimeout(function () {
            smoothScroll(500, target.offsetTop, header.offsetHeight);
          }, 500);
        }
      })
    });

    [].forEach.call(document.querySelectorAll('label.accordion-label-menu'), (label) => {
      label.addEventListener('click', function (event) {
        event.stopPropagation();
        const labelFor = event.currentTarget.getAttribute('for');
        const target = document.querySelector('label.accordion-label[for=' + labelFor + ']');
        setTimeout(function () {
          smoothScroll(500, target.offsetTop, header.offsetHeight);
        }, 500);

      })
    });

    function showScrollToTopButton() {
      window.pageYOffset > 200 ? scrollToTopButton.classList.add('c-to-top--show') : scrollToTopButton.classList.remove('c-to-top--show');
    }

    function smoothScroll(duration, endScroll, offset) {
      let start = null;
      const initScroll = window.pageYOffset;
      offset = offset || 0;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
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

  });
})(document);
