
function typeWriter(element) {
  const textArray = element.innerHTML.split("")
  element.innerHTML = ""

  textArray.forEach((letter, i) => {
    setTimeout(() => (element.innerHTML += letter), 100 * i)
  })
}

typeWriter(myName)

// Navegation in tabs
let tabs = document.querySelectorAll('.tabs__toggle'),
  contents = document.querySelectorAll('.tabs__content')

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    contents.forEach((content) => {
      content.classList.remove('is-active')
    })

    tabs.forEach((tab) => {
      tab.classList.remove('is-active')
    })

    contents[index].classList.add('is-active')
    tabs[index].classList.add('is-active')
  })
})