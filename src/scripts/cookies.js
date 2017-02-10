export default () => {
  const extractCookies = () => {
    return document.cookie.split('; ').reduce((acc, curr) => {
      const equalIndex = curr.indexOf('=');
      acc[curr.slice(0, equalIndex)] = curr.slice(equalIndex + 1);
      return acc;
    }, {})
  };

  const setTabCookie = function (event) {
    const now = new Date();
    now.setTime(now.getTime() + (2592000000)); // 30 days
    document.cookie = `${event.target.getAttribute('name')}=${event.target.id};expires=${now.toUTCString()};path=/`;
  };

  const tabInputs = Array.from(document.querySelectorAll('.vertical-tab__radio'));
  const carouselInputs = Array.from(document.querySelectorAll('.c-carousel__radio'));

  tabInputs.concat(carouselInputs).forEach(input => input.addEventListener('change', setTabCookie));

  const cookies = extractCookies();
  Object.keys(cookies)
    .filter(key => key.match(/(tab)|(car\d{2})/))
    .forEach((name) => {
      document.getElementById(cookies[name]).checked = true
    });

  document.getElementById('greeting').innerHTML = cookies.firstTime ? 'About Me' : 'Welcome';

  const now = new Date();
  now.setTime(now.getTime() + (2592000000)); // 30 days
  document.cookie = `firstTime=false;expires=${now.toUTCString()};path=/`;
}
