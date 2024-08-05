import styles from '../scss/components/LinkButton.module.scss'
import ArrowIcon from '../assets/img/arrowIcon.svg?react'
import { Link } from 'react-router-dom'

const LinkButton: React.FC<{ absolute: boolean }> = ({ absolute }) => {
  return (
    <Link to='/' className={`${styles.link} ${absolute && styles.linkBtn}`}>
      <div className={`${styles.linkContainer} ${absolute && styles.linkContainerAbsolute}`}>
        <span className='linkTitle'>К товарам</span>
        <ArrowIcon />
      </div>
    </Link>
  )
}

export default LinkButton
