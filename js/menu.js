/* MENU MOBILE */

// Menu

const toggleBtn = document.querySelector('.header__menu--toggle')
const toggleMobile = document.querySelector('.header__menu--toggle-responsive')
const menu = document.querySelector('.header__menu')
const burger = document.querySelector('.burger')
const burgerMobile = document.querySelector('.burger-mobile')

let reversed = true

const menuResponsiveTl = gsap.timeline({ reversed: true })
menuResponsiveTl.paused(true)

menuResponsiveTl
	.to('.header__menu--responsive', {
		duration: 1,
		y: '0%',
		ease: 'power3.inOut',
	})
	.from(
		'.button-menu',
		{
			duration: 0.9,
			y: -80,
			ease: 'power3.inOut',
			stagger: 0.1,
		},
		'<0.3'
	)

// Top Button

const buttonTop = gsap.timeline({
	scrollTrigger: {
		trigger: '.front-end',
		start: 'top top',
		end: 'top top',
		toggleActions: 'restart none reverse none',
	},
})

buttonTop.to('.button-top', { duration: 0.5, opacity: 100, ease: 'power1.inOut' })

// Navbar animation

const navBarAnimation = () => {
	if (reversed) {
		menuResponsiveTl.play()
		burger.setDirection(1)
		burger.play()
		burgerMobile.setDirection(1)
		burgerMobile.play()
		buttonTop.to('.button-top', { duration: 0.5, opacity: 0, ease: 'power1.inOut' })
		reversed = false
	} else if (!reversed) {
		menuResponsiveTl.reverse(0.7)
		burger.setDirection(-1)
		burger.play()
		burgerMobile.setDirection(-1)
		burgerMobile.play()
		buttonTop.to('.button-top', { duration: 0.5, opacity: 100, ease: 'power1.inOut' })
		reversed = true
	}
}

// Burger Button
toggleBtn.addEventListener('click', () => navBarAnimation())
toggleMobile.addEventListener('click', () => navBarAnimation())

// Hide menu when click

const buttonMenu = document.querySelectorAll('.button-menu')

buttonMenu.forEach(el => {
	el.addEventListener('click', () => {
		!reversed && menuResponsiveTl.reverse(0.3)
		burger.setDirection(-1)
		burger.play()
		burgerMobile.setDirection(-1)
		burgerMobile.play()
		buttonTop.to('.button-top', { duration: 0.5, opacity: 100, ease: 'power1.inOut' })
		reversed = true
	})
})

// Hide menu on scroll

const hideMenu = gsap
	.timeline({
		scrollTrigger: {
			trigger: '.front-end',
			start: 'top top',
			end: 'top top',
			toggleActions: 'restart none reverse none',
		},
	})
	.to('.header__menu li', {
		y: -50,
		duration: 0.5,
		stagger: 0.05,
		ease: 'power1.inOut',
	})
	.to(
		'.header__menu--toggle',
		{
			y: -30,
			opacity: 1,
			duration: 0.5,
			ease: 'power1.inOut',
		},
		'< 0.2'
	)
