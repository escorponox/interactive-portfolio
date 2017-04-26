import { isEmpty, isOneOf } from './validators'

const questionnaire = () => {

  const radios = document.querySelector('#questionnaire-form').elements['find'];
  [].forEach.call(radios, function (radio) {
    radio.addEventListener('change', function () {
      const textInput = document.querySelector('#other-text')
      if (radios.value === 'other') {
        textInput.disabled = false
      }
      else {
        textInput.value = ''
        textInput.disabled = true
        textInput.setCustomValidity('')
      }
    })
  })

  document.getElementById('questionnaire-form').addEventListener('submit', event => {
    event.preventDefault() //this is just a demo, we don't want any submit
    const radios = event.target.elements['find']
    const errorBox = document.querySelector('#questionnaire__error-box')
    const textInput = document.querySelector('#other-text')
    const selectOptions = [].reduce.call(radios, (prev, curr) => {
      prev.push(curr.value)
      return prev
    }, [])
    if (!isOneOf(radios.value, selectOptions)) {
      errorBox.innerHTML = 'Please select one option'
      errorBox.style.display = 'inline-block'
      event.preventDefault()
    }
    else {
      errorBox.style.display = 'none'
    }
    if (radios.value === 'other' && isEmpty(textInput.value)) {
      const msg = 'Required when Other'
      textInput.nextElementSibling.innerHTML = msg
      textInput.setCustomValidity(msg)
      event.preventDefault()
    }
    else {
      textInput.setCustomValidity('')
    }
  })

}

export default questionnaire
