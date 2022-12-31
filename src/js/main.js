const navBtn = document.querySelector('.hamburger')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	// navMobile.classList.toggle('nav-mobile--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			// navMobile.classList.remove('nav-mobile--active')
			navBtn.classList.remove('is-active')
		})
	})
}

navBtn.addEventListener('click', handleNav)
