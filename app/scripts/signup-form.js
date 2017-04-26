import * as validator from './validators'

const signUp = () => {

  validator.addValidation('#username', ['blur'], input => !validator.isEmpty(input.value) && !validator.isBetween(input.value.length, 6, 20), 'Length not between 6 and 20')

  validator.addOK('#username', ['blur'], input => validator.isBetween(input.value.length, 6, 20))

  validator.addValidation('input[id$=-name]', ['blur'], input => !validator.isEmpty(input.value) && validator.isLength(input.value, 2), 'Minimum length 3')

  validator.addOK('input[id$=-name]', ['blur'], input => validator.isOfLength(input.value, 3))

  validator.addValidation('#email', ['blur'], input => !validator.isEmpty(input.value) && !validator.isEmailAddress(input.value), 'Not a valid email')

  validator.addOK('#email', ['blur'], input => validator.isEmailAddress(input.value))

  validator.addValidation('#birth', ['blur'], input => !validator.isEmpty(input.value) && !validator.isDate(input.value), 'Not a valid date')

  validator.addOK('#birth', ['blur'], input => validator.isDate(input.value))

  const passInput = document.getElementById('pass')
  const passRepeatInput = document.querySelector('#pass-repeat');
  ['keyup', 'blur'].forEach(event => {
    passInput.addEventListener(event, function () {
      if (validator.isLength(passInput.value, 5)) {
        passInput.nextElementSibling.innerHTML = 'Minimum length 6'
        passInput.setCustomValidity('Minimum length 6')
      }
      else {
        passInput.setCustomValidity('')
        if (passInput.value !== passRepeatInput.value) {
          passRepeatInput.nextElementSibling.innerHTML = 'Passwords must match'
          passRepeatInput.setCustomValidity('Passwords must match')
        }
        else {

          passRepeatInput.setCustomValidity('')
        }
      }
    })
  })

  validator.addOK('#pass', ['keyup', 'blur'], input => validator.isOfLength(input.value, 6))

  validator.addOK('#pass-repeat', ['keyup', 'blur'], input => input.value === passInput.value)

  validator.addValidation('#pass-repeat', ['keyup', 'blur'], input => input.value !== passInput.value, 'Passwords must match')

  document.getElementById('signup-form').addEventListener('submit', event => {
    event.preventDefault() //this is just a demo, we don't want any submit
    const inputs = Array.from(document.querySelectorAll('.coves-form__input--required'))
    const someInputEmpty = inputs.some(input => validator.isEmpty(input.value))
    if (event.target.checkValidity() || someInputEmpty) {
      if (someInputEmpty) {
        document.querySelector('#signup__error-box').style.display = 'inline-block'
      }
      else {
        document.querySelector('#signup__error-box').style.display = 'none'
      }
    }
  })
}

export default signUp
