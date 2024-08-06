import styles from '../scss/components/AboutUs.module.scss'
import deliveryTruck from '../assets/img/deliveryTruck.svg'
import headphones from '../assets/img/deliveryTruck.svg'
import shoppingBag from '../assets/img/deliveryTruck.svg'
import packageImg from '../assets/img/deliveryTruck.svg'

const AboutUs = () => {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <img src={deliveryTruck} alt='deliveryTruck' />
        <div className={styles.info}>
          <span className={styles.title}>Бесплатная доставка</span>
          <span className={styles.description}>Бесплатная для всех заказов</span>
        </div>
      </div>
      <div className={styles.feature}>
        <img src={headphones} alt='headphones' />
        <div className={styles.info}>
          <span className={styles.title}>Поддержка клиентов 24/7</span>
          <span className={styles.description}>Есть доступ к поддержке</span>
        </div>
      </div>
      <div className={styles.feature}>
        <img src={shoppingBag} alt='shoppingBag' />
        <div className={styles.info}>
          <span className={styles.title}>100% Безопасный платёж</span>
          <span className={styles.description}>Гарантия сохранности денег</span>
        </div>
      </div>
      <div className={styles.feature}>
        <img src={packageImg} alt='package' />
        <div className={styles.info}>
          <span className={styles.title}>Гарантия возврата денег</span>
          <span className={styles.description}>30 Дней гарантии на возврат</span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
