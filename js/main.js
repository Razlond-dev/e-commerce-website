const nav = document.querySelector('.nav-menu')
const navigation = document.querySelector('.navigation')
const openBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')

const navLeft = nav.getBoundingClientRect().left
console.log(navLeft);
// open/close menu btn
openBtn.addEventListener('click', () => {
  if (navLeft < 0) {
    navigation.classList.add('show')
    nav.classList.add('show')
    document.body.classList.add('show')
  }
})

closeBtn.addEventListener('click', () => {
  if (navLeft < 0) {
    navigation.classList.remove('show')
    nav.classList.remove('show')
    document.body.classList.remove('show')
  }
})

// Fixed nav
const navBar = document.querySelector('.navigation')
const navHeight = navBar.getBoundingClientRect().height
window.addEventListener('scroll', ()=> {
  const scrollHeight = window.pageYOffset
  if(scrollHeight > navHeight) {
    navBar.classList.add('fix-nav')
  } else {
    navBar.classList.remove('fix-nav')
  }
})

// popup

const popup = document.querySelector('.popup')
const closePopupBtn = document.querySelector('.popup-close')

closePopupBtn.addEventListener('click', () => {
  popup.classList.remove('show')
})

window.addEventListener('load', () => {
  setTimeout(() => {
    popup.classList.add('show')
  }, 6000)
})

// preloader 
window.addEventListener('load', () => {
  const loader = document.querySelector('.preloader')
  setTimeout(() => {
    loader.classList.add('hide')

  }, 500)
})

// smooth scroll

const links = [...document.querySelectorAll('.scroll-link')]

links.map(link => {
  link.addEventListener('click', e => {
    e.preventDefault()

    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    const fixNav = navBar.classList.contains('fix-nav')
    let position = element.offsetTop - navHeight

    if(!fixNav) {
      position = position - navHeight
    }
    window.scrollTo({
      top: position,
      left: 0
    })

      navigation.classList.remove('show')
      nav.classList.remove('show')
      document.body.classList.remove('show')
  })
})