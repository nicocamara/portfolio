import { getAssetUrl } from '../../utils/tools'
import Logo from '../logos'
import './style.scss'

const CarouselPerfil = () => {
  //   const slider = document.querySelector('.container')
  const container = document.querySelectorAll('.slide')

  let current = 0
  let prev = 4
  let next = 1

  const toPrevious = () => {
    console.log('prev')
    if (current > 0) {
      toSlide(current - 1)
    } else {
      toSlide(container.length - 1)
    }
  }

  const toNext = () => {
    if (current < 4) {
      toSlide(current + 1)
    } else {
      toSlide(0)
    }
  }

  const toSlide = (number: number) => {
    current = number
    prev = current - 1
    next = current + 1

    for (let i = 0; i < container.length; i++) {
      container[i].classList.remove('active')
      container[i].classList.remove('prev')
      container[i].classList.remove('next')
    }

    if (next == 5) {
      next = 0
    }

    if (prev == -1) {
      prev = 4
    }

    container[current].classList.add('active')
    container[prev].classList.add('prev')
    container[next].classList.add('next')
  }
  return (
    <div className="container">
      <div className="slide active">
        <img src={getAssetUrl('NicoPerfil.png')} />
      </div>
      <div className=" slide next">
        <img src={getAssetUrl('trekking.png')} />
      </div>
      <div className="slide">
        <img src={getAssetUrl('Mountain.png')} />
      </div>
      <div className="slide">
        <img src={getAssetUrl('mydog.png')} />
      </div>
      <div className="slide prev">
        <img src={getAssetUrl('americanfootbal.png')} />
      </div>
      <div className="button-container">
        <div className="button" id="left" onClick={toPrevious}>
          <span className="fas fa-angle-left">{'<'}</span>
        </div>
        <div className="button" id="right" onClick={toNext}>
          <span className="fas fa-angle-right">{'>'}</span>
        </div>
      </div>
      <div className="carousel__logos">
        <Logo
          path="github"
          alt="github"
          className="gatito"
          link="https://github.com/Nico-app"
        />
        <Logo
          path="linkedin"
          alt="linkedin"
          className="linkedin"
          link="https://www.linkedin.com/in/nicolas-camara/"
        />
      </div>
    </div>
  )
}

export default CarouselPerfil
