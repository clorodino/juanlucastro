
// HOME 

const homeTl = gsap.timeline()

homeTl.from('.home__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
    .from('.home__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2' )
    .from('.home__title--text-03', { duration: 1, y: '100vh', ease: 'power3.out', }, '<.2' )
    .to('.home__title--underline', { duration: 1, width: '22vh', ease: 'power2.inOut', }, '>' )



// DESIGN 

const designTL = gsap.timeline()

designTL.from('.design__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
.from('.design__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2' )
.from('.design__title--text-03', { duration: 1, y: '100vh', ease: 'power3.out', }, '<.2' )
.to('.design__title--underline', { duration: 1, width: '21.3vh', ease: 'power2.inOut', }, '>' )


// ANIMATION

const animationTL = gsap.timeline()

animationTL.from('.animation__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
.from('.animation__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2' )
.to('.animation__title--underline', { duration: 1, width: '31.5vh', ease: 'power2.inOut', }, '>' )

// LOTTIE ANIMATION

const lottieAnimation = lottie.loadAnimation({
    container: document.querySelector('.animation__lottie--container'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: './assets/img/animation-animation.json'
})
lottieAnimation.playSegments([150,214],false)


// DETAILS

const detailsTL = gsap.timeline()

detailsTL.from('.details__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
.from('.details__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2' )
.from('.details__title--point', { duration: 1, y: '100vh', ease: 'power3.out' }, '<' )
.to('.details__title--underline', { duration: 1, width: '21.3vh', ease: 'power2.inOut', }, '>' )


// CONTACT

const contactTL = gsap.timeline()

contactTL.from('.contact__title--text-01', { delay: 0.5, duration: 1, y: '100vh', ease: 'power3.out' }, '<-0.5')
.from('.contact__title--text-02', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2' )
.from('.contact__title--text-03', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2' )
.from('.contact__title--text-04', { duration: 1, y: '100vh', ease: 'power3.out' }, '<.2' )
.to('.contact__title--underline', { duration: 1, width: '20.5vh', ease: 'power2.inOut', }, '>' )