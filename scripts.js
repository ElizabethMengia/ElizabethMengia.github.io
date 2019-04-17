// Flip it

var body = document.querySelector('body')
var next = document.querySelector('.next')

next.addEventListener('click', flipIt)

function flipIt(e) {
  e.preventDefault()
  body.classList.toggle('flip')
}


