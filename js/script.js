/* MENU MOBILE */

// Menu

const toggleBtn = document.getElementsByClassName('header__menu--toggle')
const menu = document.getElementsByClassName('header__menu')

const menuTl = gsap.timeline({reversed: true})
menuTl.paused(true)

menuTl.to('.header__menu', {
    duration: 1,
    y: '0%',
    ease: 'power3.inOut'
})

// Button Toggle

const toggleBtnTl = gsap.timeline()

// Trigger

toggleBtn[0].addEventListener('click', () => {

    if (menuTl.reversed()){
        menuTl.play()
        // console.log('cambia el color blanco y la forma del boton toggle');
    } else if (!menuTl.reversed()) {
        menuTl.reverse(0.7)
        // console.log('cambia el color negro y la forma del boton toggle');
    }
})

// Menu reset when window resize

window.addEventListener('resize', () => {

    let currentWidth = window.innerWidth

    if (currentWidth > 768) {
       // gsap.set('.header__menu', {y: '0%'});
    }else {
    }
})


// Home

//Frontend

    // Console Date

    const date = new Date()

    const localeDate = `${date.toDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    const time = document.getElementById('time')
    const newNode = document.createElement('span')
    newNode.appendChild(document.createTextNode(`${localeDate}`))
    time.appendChild(newNode)

gsap.to('.cursor', { opacity: 0, ease: 'power4.inOut', repeat: -1 })

gsap.to('.typewriter', {
	// scrollTrigger: {
	// 	trigger: '#front-end',
	// 	start: '85% bottom',
	// 	markers: true,
	// },
	duration: 1.5,
	text: "I'm a Front-End Developer",
})
	.repeat(-1)
	.repeatDelay(2)
	.yoyo(true)





//Projects

// SWIPER

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    }
    })



//About

// News Ticker

const techList = document.querySelector('.tech-list').cloneNode(true)
document.querySelector('.about__technologies').appendChild(techList)

gsap.to('.tech-list', {
  x:-techList.offsetWidth,
  repeat:-1,
  ease:'linear', 
  duration: 20, 
  force3D: true, 
  rotation: 0.01
})
