function formValidation() {



  const addEventHandler = () => {
    const buttonSave = document.getElementById('save')
    // console.log(buttonSave)
    const buttonReset = document.getElementById('reset')
    // console.log(buttonReset)

    buttonSave.addEventListener('click', saveHandler)
    buttonReset.addEventListener('click', resetHandler)
  }

  const saveHandler = () => {
    const nameField = document.getElementById('fullname')
    const feedbackField = document.getElementById('feedback')

    const errMsgName = document.getElementById('nameValidateMsg')
    const errMsgFeedback = document.getElementById('feedbackValidateMsg')

    if (nameField.value.length === 0) {
      errMsgName.textContent = 'please enter your name'
    } else
      errMsgName.textContent = ''

    if (feedbackField.value.length === 0) {
      errMsgFeedback.textContent = 'please enter your feedback'
    } else
      errMsgFeedback.textContent = ''

  }

  const resetHandler = () => {
    const nameField = document.getElementById('fullname')
    const feedbackField = document.getElementById('feedback')

    nameField.value = ''
    feedbackField.value = ''
  }

  return {
    addEventHandler
  }
}

const { addEventHandler } = formValidation()
addEventHandler()
