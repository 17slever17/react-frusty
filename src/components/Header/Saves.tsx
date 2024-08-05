import styles from '../../scss/components/Saves.module.scss'

const Saves: React.FC = () => {
  return (
    <div className={styles.saves}>
      <div className={styles.favorites}>
        <img src='src/assets/img/favoriteIcon.svg' alt='Корзина' />
      </div>
      <div className={styles.devider}></div>
      <div className={styles.cart}>
        <img src='src/assets/img/cartIcon.svg' alt='Корзина' />
        <div className={styles.cartInfo}>
          <span className={styles.cartTitle}>Корзина:</span>
          <span className={styles.cartTotal}>$57.00</span>
        </div>
      </div>
    </div>
  )
}

export default Saves
