import styles from '../../scss/components/Header.module.scss'

import Saves from './Saves'
import Search from './Search'
import NavLinks from './NavLinks'

import mapPin from '../../assets/img/mapPin.svg'
import vector from '../../assets/img/vector.svg'
import logo from '../../assets/img/logo.svg'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.user}>
        <div className={styles.contact}>
          <img src={mapPin} alt='mapPin' />
          <span>Расположение магазина: Троицкая ул., 152, стр. 1, Москва, Россия</span>
        </div>
        <div className={styles.links}>
          <div className={styles.language}>
            <span>RU</span>
            <img src={vector} alt='icon' />
          </div>
          <div className={styles.currency}>
            <span>USD</span>
            <img src={vector} alt='icon' />
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.logo}>
          <img src={logo} alt='Логотип' />
          <span className='logoTitle'>Frusty</span>
        </div>
        <Search />
        <Saves />
      </div>
      <NavLinks />
      <div className={styles.info}></div>
    </div>
  )
}

export default Header
