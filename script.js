const eventKey = document.getElementById("event-key")
const eventWhich = document.getElementById("event-which")
const eventCode = document.getElementById("event-code")
const whichHead = document.getElementById("heading-which")


document.addEventListener('keydown', (e) => {
    eventKey.textContent = e.key
    eventWhich.textContent = e.keyCode
    eventCode.textContent = e.code
    whichHead.textContent = e.keyCode
});