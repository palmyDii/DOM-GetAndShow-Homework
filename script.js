const inTitles = document.getElementById('inputTitles')
const inName = document.getElementById('inputName')
const inUsername = document.getElementById('inputUsername')

const outTitles = document.getElementById('outputTitles')
const outName = document.getElementById('outputName')
const outUsername = document.getElementById('outputUsername')

const submitButtom = document.getElementById('submit')
const countCheck = document.getElementById('countCheck')

submitButtom.addEventListener('click', addData)

let count = 0
countCheck.innerHTML = count
function addData() {
    addForm(inTitles, outTitles)
    addForm(inName, outName)
    addForm(inUsername, outUsername)

    count++
    countCheck.innerHTML = count
}

function addForm(inTopic, outTopic) {
    let topicName = inTopic.value
    console.log(topicName)

    let newTopic = document.createElement('div')
    newTopic.classList.add('col-12')
    newTopic.classList.add('border')

    newTopic.innerText = topicName
    outTopic.appendChild(newTopic)
}