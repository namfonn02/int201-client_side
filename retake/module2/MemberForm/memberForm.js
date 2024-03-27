import { memberManagement } from './data/members.js'
const { getMembers, findMember } = memberManagement()

//your student id, firstname, and lastname here
function memberForm() {
    const addEventHandler = () => {
        const btnMember = document.getElementById('member')
        btnMember.addEventListener('click', memberHandler)
    }

    const memberHandler = () => {
        const divSearchMem = document.getElementById('searchMember')
        divSearchMem.textContent = ''

        const pEle = document.createElement('p')
        pEle.textContent = 'Your Member Id:'
        divSearchMem.appendChild(pEle)

        const input = document.createElement('input')
        input.id = 'memberId'
        divSearchMem.appendChild(input)

        const searchBtn = document.createElement('button')
        searchBtn.textContent = 'search'
        searchBtn.addEventListener('click', searchHandler)
        divSearchMem.appendChild(searchBtn)
    }

    const searchHandler = () => {
        const divFoundMember = document.getElementById('foundMember')
        const input = document.getElementById('memberId')
        const id = parseInt(input.value)
        const foundMember = findMember(id)

        divFoundMember.textContent = ''

        const pEleId = document.createElement('p')
        pEleId.textContent = `id: ${foundMember.id}`
        divFoundMember.appendChild(pEleId)

        const pEleFirstName = document.createElement('p')
        pEleFirstName.textContent = `firstname: ${foundMember.firstname}`
        divFoundMember.appendChild(pEleFirstName)

        const pEleLastName = document.createElement('p')
        pEleLastName.textContent = `lastname: ${foundMember.lastname}`
        divFoundMember.appendChild(pEleLastName)

        const pEleEmail = document.createElement('p')
        pEleEmail.textContent = `email: ${foundMember.email}`
        divFoundMember.appendChild(pEleEmail)

        const pEleAddress = document.createElement('p')
        pEleAddress.textContent = `address: ${foundMember.address}`
        divFoundMember.appendChild(pEleAddress)

        input.value = ''
    }

    return {
        addEventHandler
    }
}

const { addEventHandler } = memberForm()
addEventHandler()