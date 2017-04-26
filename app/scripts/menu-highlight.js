export default (sections) => Array.from(sections).reverse().find(
  (section) => section.offsetTop < window.pageYOffset + (window.innerHeight / 2)
).getAttribute('id')
