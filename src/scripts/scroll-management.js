import smoothScroll from './smooth-scroll';
import throttle from 'lodash.throttle';
import menuHighlight from './menu-highlight';

export default () => {
  let previousScroll = 0;
  const scrollToTopButton = document.getElementById('scroll-to-top');
  const header = document.querySelector('header');
  const menuInput = document.getElementById('menu-toggle');
  const subMenuInput = document.getElementById('sub-menu-toggle');
  const sections = document.querySelectorAll('section');
  const sectionLinks = document.querySelectorAll('.section-link');

  const showScrollToTopButton = throttle(() => {
    window.pageYOffset > 200
      ? scrollToTopButton.classList.add('c-to-top--show')
      : scrollToTopButton.classList.remove('c-to-top--show');
  }, 200);

  const hideSideBar = throttle(() => {
    menuInput.checked = false;
    subMenuInput.checked = false;
  }, 200);

  const showHideHeader = throttle(() => {
    const currentScroll = window.pageYOffset;
    currentScroll - previousScroll > 0
      ? header.classList.add('header--hide')
      : header.classList.remove('header--hide');
    previousScroll = currentScroll;
  }, 200);

  const highlightSection = throttle(() => {
    const sectionId = menuHighlight(sections);
    sectionLinks.forEach((link) => {
      link.getAttribute('href').slice(1) === sectionId
        ? link.classList.add('t-highlighted-link')
        : link.classList.remove('t-highlighted-link');
    })
  }, 100);

  window.addEventListener('scroll', showScrollToTopButton);
  window.addEventListener('scroll', hideSideBar);
  window.addEventListener('scroll', showHideHeader);
  window.addEventListener('scroll', highlightSection);
  scrollToTopButton.addEventListener('click', smoothScroll.bind(null, 500, 0, 0));

  [].forEach.call(document.querySelectorAll('.section-link'), (link) => {
    link.addEventListener('click', function (event) {
      event.stopPropagation();
      event.preventDefault();
      const linkHref = event.currentTarget.getAttribute('href');
      const target = document.querySelector(linkHref);
      smoothScroll(500, target.offsetTop, header.offsetHeight);
    })
  });

  [].forEach.call(document.querySelectorAll('label[for=menu-toggle]'), (label) => {
    label.addEventListener('click', () => {
      subMenuInput.checked = false;
    })
  });

  [].forEach.call(document.querySelectorAll('label.accordion-label'), (label) => {
    label.addEventListener('click', function (event) {
      event.stopPropagation();
      const forInput = document.getElementById(event.currentTarget.getAttribute('for'));
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

}
