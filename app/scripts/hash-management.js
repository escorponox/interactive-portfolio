export default () => {
  window.addEventListener('hashchange', (event) => console.log('hash', event));
}