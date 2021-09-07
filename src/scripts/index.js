import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'

class Init {
  constructor() {
    this.init()
  }

  init() {
    if (document.querySelectorAll('.project__gallery').length) {
      const sliders = document.querySelectorAll('.project__gallery')
      sliders.forEach((item) => {
        this.actions().initProjectPageSlider(item)
      })
    }
  }

  actions() {
    return {
      initCardsSlider(el) {
        const swiper = el.querySelector('.projects-slider__swiper')
        const prevArr = el.querySelector('.swiper-button-prev')
        const nextArr = el.querySelector('.swiper-button-next')
        ;(() =>
          new Swiper(swiper, {
            slidesPerView: 1,
            resistanceRatio: 0,
            threshold: 5,
            navigation: {
              prevEl: prevArr,
              nextEl: nextArr
            },
            breakpoints: {
              768: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              }
            }
          }))()
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.controller = new Init()
})
