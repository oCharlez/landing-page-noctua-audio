document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger-menu')
  const mainNav = document.querySelector('.main-nav')

  if (!hamburgerBtn || !mainNav) return

  hamburgerBtn.addEventListener('click', () => {
    const isActive = mainNav.classList.toggle('is-active')

    hamburgerBtn.setAttribute('aria-expanded', isActive)
    mainNav.setAttribute('aria-hidden', !isActive)
  })
})
