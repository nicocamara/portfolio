import classNames from 'classnames'
import { useEffect, useState } from 'react'
import Project from '../components/project'
import { Projectvevo } from '../components/texts/Index'
import './style.scss'

type CarouselProps = {
  projects: Projectvevo[]
}

const Carousel = (props: CarouselProps) => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(
        activeSlide === props.projects.length - 1 ? 0 : activeSlide + 1
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [activeSlide])

  return (
    <div className="carousel">
      {props.projects.map((p, i) => (
        <p
          style={{ transform: `translate(-${activeSlide * 100}%)` }}
          key={p.name}
          className={classNames('carousel__item', `carousel__item-${i}`, {
            'carousel__item--active': i === activeSlide,
          })}
        >
          <Project name={p.name} project={p} />
        </p>
      ))}
    </div>
  )
}

export default Carousel
