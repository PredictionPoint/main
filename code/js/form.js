$('select.dropdown')
  .dropdown()
;

$('.dropdown')
  .dropdown()
;

$('.ui.checkbox')
  .checkbox()
;

$('.ui.form')
  .form({
    name: {
      identifier  : 'first-name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
      ]
    },
    email: {
      identifier  : 'email',
      rules: [
        {
          type   : 'email',
          prompt : 'Please enter a valid Email id'
        }
      ]
    },
    username: {
      identifier : 'username',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a username'
        }
      ]
    },
    password: {
      identifier : 'password1',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a password'
        },
        {
          type   : 'length[4]',
          prompt : 'Your password must be at least 4 characters'
        }
      ]
    },
    
    terms: {
      identifier : 'terms',
      rules: [
        {
          type   : 'checked',
          prompt : 'You must agree to the terms and conditions'
        }
      ]
    }
  })
;