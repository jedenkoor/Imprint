import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'

class Init {
  constructor() {
    this.init()
  }

  init() {
    if (document.querySelectorAll('.tariffs__wrap').length) {
      const sliders = document.querySelectorAll('.tariffs__wrap')
      sliders.forEach((item) => {
        this.actions().iniTariffsSlider(item)
      })
    }
  }

  actions() {
    return {
      iniTariffsSlider(el) {
        const slider = el.querySelector('.tariffs__slider')
        const prevArr = el.querySelector('.swiper-button-prev')
        const nextArr = el.querySelector('.swiper-button-next')
        ;(() =>
          new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            resistanceRatio: 0,
            navigation: {
              prevEl: prevArr,
              nextEl: nextArr
            },
            breakpoints: {
              768: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3
              },
              1201: {
                slidesPerView: 4,
                spaceBetween: 40
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
