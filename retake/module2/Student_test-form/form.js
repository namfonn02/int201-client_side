//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:       Name:

function init() {
    const body = document.querySelector('body')

    const showFormBtn = document.createElement('button')
    showFormBtn.textContent = 'Show Form'
    showFormBtn.addEventListener('click', showForm)
    body.appendChild(showFormBtn)
}

function showForm() {
    const body = document.querySelector('body')
    
    const showFormBtn = document.querySelector('button')
    body.removeChild(showFormBtn)

    const inputBox = document.createElement('input')
    inputBox.type = 'text'
    inputBox.id = 'textInput'
    inputBox.placeholder = 'Enter text'

    const textArea = document.createElement('textarea')
    textArea.id = 'textArea'
    textArea.placeholder = 'Enter more text'

    const divInput = document.createElement('div')
    divInput.id = 'divInput'
    divInput.appendChild(inputBox)

    const divTextArea = document.createElement('div')
    divTextArea.id = 'divTextArea'
    divTextArea.appendChild(textArea)

    const displayBtn = document.createElement('button')
    displayBtn.textContent = 'Display'
    displayBtn.addEventListener('click', display)

    const clearBtn = document.createElement('button')
    clearBtn.textContent = 'Clear'
    clearBtn.addEventListener('click', clear)

    const divDisplayArea = document.createElement('div')
    divDisplayArea.id = 'displayArea'

    body.appendChild(divInput)
    body.appendChild(divTextArea)
    body.appendChild(displayBtn)
    body.appendChild(clearBtn)
    body.appendChild(divDisplayArea)

}

function display() {
    const divDisplayArea = document.getElementById('displayArea')

    const inputBox = document.getElementById('textInput')
    const textArea = document.getElementById('textArea')

    if (inputBox.value.trim().length > 0 && textArea.value.trim().length > 0) {

        clear()

        const h1 = document.createElement('h1')
        const pEle = document.createElement('p')

        h1.textContent = inputBox.value
        pEle.textContent = textArea.value

        divDisplayArea.appendChild(h1)
        divDisplayArea.appendChild(pEle)

    } else {

        clear()
        divDisplayArea.innerHTML = '<p style="color: red;">Error: Both input and textarea must contain text.</p>'

    }
}

function clear() {
    const divDisplayArea = document.getElementById('displayArea')
    divDisplayArea.textContent = ''
}

init();
