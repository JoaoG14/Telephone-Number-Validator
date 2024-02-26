const userInput = document.getElementById("user-input")
const checkButton = document.getElementById("check-btn")
const clearButton = document.getElementById("clear-btn")
const result = document.getElementById("results-div")
const phoneRegex = /\(?\d{3}\)?[-\.]? *\d{3}[-\.]? *[-\.]?\d{4}/

clearButton.addEventListener("click", () => {
  result.innerText = "";
})

checkButton.addEventListener('click', () => {
  if (userInput.value === "") {
    window.alert("Please provide a phone number")
  } else if (phoneRegex.test(userInput.value)) {
    result.innerText = `Valid US number: ${userInput.value}`
  } else {
    result.innerText = `Invalid US number: ${userInput.value}`
  }
})