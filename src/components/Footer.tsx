import React from 'react'
import styles from '../scss/components/Footer.module.scss'
import logo from '../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import AppleIcon from '../assets/img/appleIcon.svg?react'
import GooglePlayIcon from '../assets/img/googlePlayIcon.svg?react'

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.company}>
        <div className={styles.logo}>
          <img src={logo} alt='Логотип' />
          <span className='logoTitle'>Frusty</span>
        </div>
        <div className={styles.links}>
          <div>
            <a href='tel:(219) 555-0114' target='_blank' className={styles.number}>
              (219) 555-0114
            </a>
            <div className={`${styles.titleLine} titleLine`}></div>
          </div>
          <span className={styles.or}>or</span>
          <div>
            <a href='mailto:Proxy@gmail.com' target='_blank' className={styles.email}>
              Proxy@gmail.com
            </a>
            <div className={`${styles.titleLine} titleLine`}></div>
          </div>
        </div>
      </div>
      <div className={styles.myAccount}>
        <span className={styles.title}>Страницы</span>
        <div className={styles.links}>
          <Link to='/' className={styles.link}>
            Товары
          </Link>
          <Link to='/' className={styles.link}>
            Корзина
          </Link>
          <Link to='/' className={styles.link}>
            Избранное
          </Link>
        </div>
      </div>
      <div className={styles.download}>
        <span className={styles.title}>Скачать приложение</span>
        <div className={styles.container}>
          <a href='https://apps.apple.com/ru/charts/iphone' target='_blank' className={styles.app}>
            <AppleIcon />
            <div className={styles.info}>
              <div className={styles.description}>Скачать из</div>
              <div className={styles.titleApp}>App Store</div>
            </div>
          </a>
          <a href='https://play.google.com/store/apps' target='_blank' className={styles.app}>
            <GooglePlayIcon />
            <div className={styles.info}>
              <div className={styles.description}>Скачать из</div>
              <div className={styles.titleApp}>Google play</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
