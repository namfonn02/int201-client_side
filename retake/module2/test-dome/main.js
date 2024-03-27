function init() {
    const addBtn = document.getElementById('addButton')
    addBtn.addEventListener('click', listName)
}

function listName() {
    const inputBox = document.getElementById('yourName')

    const divShowName = document.getElementById('showName')

    const divEle = document.createElement('div')
    divEle.style = 'display:flex'

    const spanEle = document.getElementById('totalName')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    divEle.appendChild(checkbox)
    checkbox.addEventListener('click', () => {
        divEle.remove()

        spanEle.textContent = divShowName.childElementCount
    })

    const pEle = document.createElement('p')
    pEle.textContent = inputBox.value
    inputBox.value = ''

    // divShowName.textContent = ''
    divEle.appendChild(pEle)
    divShowName.appendChild(divEle)

    spanEle.textContent = divShowName.childElementCount

}

init()
