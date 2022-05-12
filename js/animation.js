gsap.registerPlugin(ScrollTrigger)

// HOME

const homeAnimation = lottie.loadAnimation({
    container: document.querySelector('.home__illustration'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: './assets/img/home-animation.json',
})

homeAnimation.play()

const homeTl = gsap.timeline({
	scrollTrigger: {
		trigger: '.home',
		start: '80% bottom',
	},
})

homeTl
	.from('.home__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
	.from('.home__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2')
	.from('.home__title--text-03', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2')
	.to('.home__title--underline', { duration: 1, width: '22vh', ease: 'power2.inOut' }, '>')

// FRONT-END

// Console Date

const date = new Date()

const localeDate = `${date.toDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
const time = document.getElementById('time')
const newNode = document.createElement('span')
newNode.appendChild(document.createTextNode(`${localeDate}`))
time.appendChild(newNode)

gsap.to('.cursor', { opacity: 0, ease: 'power4.inOut', repeat: -1 })

gsap.to('.typewriter', {
	scrollTrigger: {
		trigger: '.front-end',
		start: '85% bottom',
	},
	duration: 1.5,
	text: "I'm a Front-End Developer",
})
	.repeat(-1)
	.repeatDelay(2)
	.yoyo(true)

// DESIGN

const semiCirclesTl = gsap.timeline({
	scrollTrigger: {
		trigger: '.design',
		start: '80% bottom',
		markers: false,
	},
})

semiCirclesTl
	.from('.boxes-mask', 1.2, { transformOrigin: '0 0', scaleY: 0, ease: 'power4.inOut' })
	.from('.box2', { duration: 0.6, ease: 'power4.out', y: 100 }, '>-.3')
	.from('.circle', { duration: 2, ease: 'power4.inOut', y: '100vh', stagger: 0.3 }, '>-1')
	.from('.semicircles', { duration: 0.01, opacity: 0, display: 'none' }, '>')
	.to('.circle', { duration: 0, opacity: 0, display: 'none', delay: 0.5 })
	.to('.semicircle-top-01', { duration: 0.8, ease: 'power4.inOut', x: '-50%' })
	.to('.semicircle-bottom-01', { duration: 0.8, ease: 'power4.inOut', x: '50%' }, '<')
	.to('.semicircle-top-02', { duration: 0.8, ease: 'power4.inOut', x: '-50%' }, '-=0.75')
	.to('.semicircle-bottom-02', { duration: 0.8, ease: 'power4.inOut', x: '50%' }, '<')
	.to('.semicircle-top-03', { duration: 0.8, ease: 'power4.inOut', x: '-50%' }, '-=0.75')
	.to('.semicircle-bottom-03', { duration: 0.8, ease: 'power4.inOut', x: '50%' }, '<')
	.from('.design__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
	.from('.design__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2')
	.from('.design__title--text-03', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2')
	.to('.design__title--underline', { duration: 1, width: '21.3vh', ease: 'power2.inOut' }, '>')

// ANIMATION

const animationTL = gsap.timeline({
	scrollTrigger: {
		trigger: '.animation',
		start: '80% bottom',
		onEnter: () => lottieAnimation.play(),
	},
})

animationTL
	.from('.animation__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
	.from('.animation__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2')
	.to('.animation__title--underline', { duration: 1, width: '31.5vh', ease: 'power2.inOut' }, '>')

// lottie animation

const lottieAnimation = lottie.loadAnimation({
	container: document.querySelector('.animation__lottie--container'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: './assets/img/animation-animation.json',
})

lottieAnimation.playSegments([150, 214], false)
lottieAnimation.pause()

// DETAILS

const detailsTL = gsap.timeline({
	scrollTrigger: {
		trigger: '.details',
		start: '80% bottom',
	},
})

detailsTL
	.from('.details__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
	.from('.details__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2')
	.from('.details__title--point', { duration: 1, y: '100vh', ease: 'power3.out' }, '<')
	.from('.details__title--underline', { duration: 1, width: 0, ease: 'power2.inOut' }, '>')
	.to('.details__title', { duration: 1.2, display: 'none', opacity: 0, ease: 'power1.out' })

// PROJECTS

const swiper = new Swiper('.mySwiper', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

// ABOUT

// News Ticker

const techList = document.querySelector('.tech-list').cloneNode(true)
document.querySelector('.about__technologies').appendChild(techList)

gsap.to('.tech-list', {
	x: -techList.offsetWidth,
	repeat: -1,
	ease: 'linear',
	duration: 25,
	force3D: true,
	rotation: 0.01,
})

// CONTACT

const contactTL = gsap.timeline({
	scrollTrigger: {
		trigger: '.contact',
		start: '80% bottom',
	},
})

contactTL
	.from('.contact__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
	.from('.contact__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2')
	.from('.contact__title--text-03', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2')
	.from('.contact__title--text-04', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2')
	.to('.contact__title--underline', { duration: 1, width: '20.5vh', ease: 'power2.inOut' }, '>')

// Jump to section

// const data = () => {
// 	const panels = gsap.utils.toArray('.panel ')
// 	const panelsTop = panels.map(el => {
// 		return el.offsetTop
// 	})
// 	const normalize = (min, max) => {
// 		let delta = max - min
// 		return val => {
// 			return (val - min) / delta
// 		}
// 	}
// 	return panelsTop.map(normalize(0, panelsTop[panelsTop.length - 1]))
// }

// const snapSection = () => {
// 	ScrollTrigger.create({
// 		start: 0,
// 		end: 'max',
// 		snap: data(),
// 	})
// }

// const reportWindowSize = () => {
// 	snapSection()
// }

// window.addEventListener('resize', reportWindowSize)
// snapSection()
