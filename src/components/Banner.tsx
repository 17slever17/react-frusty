import React from 'react'
import styles from '../scss/components/Banner.module.scss'
import LinkButton from './LinkButton'

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg1}>
        <img src='src/assets/img/bg1.jpg' alt='' />
        <div className={styles.info}>
          <span className={styles.title}>Свежие Продукты</span>
          <div className={styles.sale}>
            <div className={styles.rectangle}></div>
            <div className={styles.description}>
              <div className={styles.saleContainer}>
                <span className={styles.saleTitle}>Скидки до</span>
                <div className={styles.saleValue}>
                  <span>-30% !</span>
                </div>
              </div>
              <span className={styles.saleDecription}>Бесплатная доставка на все заказы</span>
            </div>
          </div>
          <LinkButton absolute={true} />
        </div>
      </div>
      <div className={styles.bg2}>
        <img src='src/assets/img/bg2.jpg' alt='' />
        <div className={styles.info}>
          <div className={styles.description}>
            <span className={`${styles.title} ${styles.titleBg}`}>ЛЕТНИЕ СКИДКИ</span>
            <span className={`${styles.sale} ${styles.saleBg}`}>ДО 75%</span>
            <span className={styles.saleDecription}>Только Фрукты и Овощи</span>
          </div>
          <LinkButton absolute={false} />
        </div>
      </div>
      <div className={styles.bg3}>
        <img src='src/assets/img/bg3.jpg' alt='' />
        <div className={styles.info}>
          <div className={styles.description}>
            <span className={`${styles.title} ${styles.titleBg}`}>ЛУЧШЕЕ</span>
            <span className={`${styles.saleDecription} ${styles.saleBg}`}>
              Спецпредложение этого месяца
            </span>
          </div>
          <LinkButton absolute={false} />
        </div>
      </div>
    </div>
  )
}

export default Banner
