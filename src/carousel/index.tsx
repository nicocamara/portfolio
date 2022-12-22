import classNames from 'classnames'
import { useEffect, useState } from 'react'
import Project from '../components/project'
import { ProjectInstance } from '../utils/data'

import './style.scss'

type CarouselProps = {
  projects: ProjectInstance[]
}

const Carousel = (props: CarouselProps) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHovered, setHover] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveSlide(
          activeSlide === props.projects.length - 1 ? 0 : activeSlide + 1
        )
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [activeSlide, isHovered])

  const mouseEnterHandler = () => {
    setHover(true)
  }
  const mouseLeaveHandler = () => {
    setHover(false)
  }
  const onChance = (scenario: 'next' | 'prev') => {
    const lastItemIndex = props.projects.length - 1
    const nextItem = activeSlide === lastItemIndex ? 0 : activeSlide + 1
    const prevItem = activeSlide === 0 ? lastItemIndex : activeSlide - 1
    setActiveSlide(scenario === 'next' ? nextItem : prevItem)
  }

  return (
    <div
      className="carousel"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <span className="carousel__button" onClick={() => onChance('prev')}>
        {'<'}
      </span>
      <span
        className="carousel__button carousel__button-next"
        onClick={() => onChance('next')}
      >
        {'>'}
      </span>
      {props.projects.map((p, i) => (
        <div
          style={{ transform: `translate(-${activeSlide * 100}%)` }}
          key={p.name}
          className={classNames('carousel__item', `carousel__item-${i}`, {
            'carousel__item--active': i === activeSlide,
          })}
        >
          <Project name={p.name} project={p} />
        </div>
      ))}
    </div>
  )
}

export default Carousel
