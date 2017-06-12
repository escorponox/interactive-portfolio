export default () => {
  const extractCookies = () => {
    return document.cookie.split('; ').reduce((acc, curr) => {
      const equalIndex = curr.indexOf('=')
      acc[curr.slice(0, equalIndex)] = curr.slice(equalIndex + 1)
      return acc
    }, {})
  }

  const cookies = extractCookies()

  document.getElementById('greeting').innerHTML = cookies.visited ? 'About Me' : 'Carlos Coves'
  document.getElementById('welcome-paragraph').style.display = cookies.visited ? 'none' : 'block'

  const now = new Date()
  now.setTime(now.getTime() + (2592000000)) // 30 days
  document.cookie = `visited=true;expires=${now.toUTCString()};path=/`
}
