const nameEl = document.getElementById('name-el')
const emailEl = document.getElementById('email-el')
const messageEl = document.getElementById('message-el')
const submitBtn = document.getElementById('submit-btn')
const thank = document.getElementById('thanks')

console.log(thank)

let thanksMess = "Thanks for Shopping with us. Your message will be replied soon."

submitBtn.addEventListener('click', function() {
    localStorage.setItem('name', nameEl.value)
    localStorage.setItem('email', emailEl.value)
    localStorage.setItem('message', messageEl.value)
    nameEl.value = ""
    emailEl.value = ""
    messageEl.value = ""
    thank.textContent = thanksMess
})