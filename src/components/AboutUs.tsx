import styles from '../scss/components/AboutUs.module.scss'

const AboutUs = () => {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <img src='src/assets/img/deliveryTruck.svg' alt='deliveryTruck' />
        <div className={styles.info}>
          <span className={styles.title}>Бесплатная доставка</span>
          <span className={styles.description}>Бесплатная для всех заказов</span>
        </div>
      </div>
      <div className={styles.feature}>
        <img src='src/assets/img/headphones.svg' alt='headphones' />
        <div className={styles.info}>
          <span className={styles.title}>Поддержка клиентов 24/7</span>
          <span className={styles.description}>Есть доступ к поддержке</span>
        </div>
      </div>
      <div className={styles.feature}>
        <img src='src/assets/img/shoppingBag.svg' alt='shoppingBag' />
        <div className={styles.info}>
          <span className={styles.title}>100% Безопасный платёж</span>
          <span className={styles.description}>Гарантия сохранности денег</span>
        </div>
      </div>
      <div className={styles.feature}>
        <img src='src/assets/img/package.svg' alt='package' />
        <div className={styles.info}>
          <span className={styles.title}>Гарантия возврата денег</span>
          <span className={styles.description}>30-Дневная гарантия на возврат</span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
