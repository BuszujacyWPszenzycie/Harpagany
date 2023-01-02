const mobileMenu = document.querySelector('.nav__box-mobile')
const allNavItems = document.querySelectorAll('.nav__link')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	mobileMenu.classList.toggle('nav__box-mobile--is-active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			mobileMenu.classList.remove('nav__box-mobile--is-active')
			navBtn.classList.remove('is-active')
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener('click', handleNav)
handleCurrentYear()
