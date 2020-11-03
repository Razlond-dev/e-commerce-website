const slider1 = document.getElementById('glide1')
const slider2 = document.getElementById('glide2')
const slider3 = document.getElementById('glide3')


if (slider1) {
  new Glide(slider1, {
    type: 'carousel',
    startAt: 0,
    autoplay: 3500,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: 'linear'
  }).mount()
}

if (slider2) {
  new Glide(slider2, {
    type: 'carousel',
    startAt: 0,
    autoplay: 2000,
    hoverpause: false,
    perView: 5,
    animationDuration: 800,
    animationTimingFunc: 'linear',
    breakpoints: {
      1200: {
        perView: 3
      },
      768: {
        perView: 2
      }
    }
  }).mount()
}

if (slider3) {
  new Glide(slider3, {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    rewin: false,
    autoplay: 10000,
    animationDuration: 800,
    animationTimingFunc: 'linear',
    breakpoints: {
      998: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount()
}