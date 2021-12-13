// this is the body of your HTML. Means everything inside your website.
const body = document.querySelector("body")
const input = document.querySelector("input")

// this will change the background color style of the body.
input.addEventListener("change", () => {
  body.style.backgroundColor = input.value
})