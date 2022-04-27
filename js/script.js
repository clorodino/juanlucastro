/* MENU MOBILE */

// Menu

const toggleBtn = document.querySelector('.header__menu--toggle')
const menu = document.querySelector('.header__menu')
const burger = document.querySelector('.burger')

let reversed = true

/* const menuTl = gsap.timeline({reversed: true})
menuTl.paused(true)

menuTl.to('.header__menu', {
    duration: 1,
    y: '0%',
    ease: 'power3.inOut'
}) */


// Button Toggle

const toggleBtnTl = gsap.timeline()

// Trigger

toggleBtn.addEventListener('click', () => {
    
    menu.classList.toggle('header__menu--show')
    
    if (reversed){
        //menuTl.play()
        burger.setDirection(1);
        burger.play()
        reversed = false

    } else if (!reversed) {
        //menuTl.reverse(0.7)
        burger.setDirection(-1);
        burger.play();
        reversed = true

    }
})

// Menu reset when window resize

// window.addEventListener('resize', () => {
    
//         let currentWidth = window.innerWidth
//         console.log('resize--->', currentWidth);
    
// })


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
	x: -techList.offsetWidth,
	repeat: -1,
	ease: 'linear',
	duration: 25,
	force3D: true,
	rotation: 0.01,
})
