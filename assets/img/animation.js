// LOTTIE ANIMATION

const lottieAnimation = lottie.loadAnimation({
    container: document.querySelector('.animation__lottie--container'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/img/animation-animation.json'
})
lottieAnimation.playSegments([150,214],true)

console.log(document.querySelector('.animation__lottie--container'));