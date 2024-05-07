const Copy = function (button) {
  this.button = button

  // If the browser supports the Clipboard API, show the copy button
  if (navigator.clipboard) {
    this.button.classList.remove('app-u-hidden')
  }

  button.addEventListener('click', (e) => this.handleCopyClick(e))
}

Copy.prototype.handleCopyClick = function (e) {
  e.preventDefault()
  const copyFrom = this.button.getAttribute('data-clipboard-target')
  const str = document.querySelector(copyFrom).innerText
  navigator.clipboard.writeText(str)

  // Change the button text to "Copied" for 5 seconds
  const originalText = this.button.innerText
  this.button.innerText = 'Copied'
  setTimeout(() => {
    this.button.innerText = originalText
  }, 5000)
}

document
  .querySelectorAll('[data-module="app-copy"]')
  .forEach(function (element) {
    new Copy(element)
  })
