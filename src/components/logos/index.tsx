import { getAssetUrl } from '../../utils/tools'
import './style.scss'

type LogoProps = {
  path: string
  alt: string
  className?: string
}

const Logo = (props: LogoProps) => {
  return (
    <img
      src={getAssetUrl(props.path)}
      alt={props.alt}
      className={`img${props.className ? ' ' + props.className : ''}`}
    />
  )
}

export default Logo
