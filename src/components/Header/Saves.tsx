import styles from '../../scss/components/Saves.module.scss'
import favoriteIcon from '../../assets/img/favoriteIcon.svg'
import cartIcon from '../../assets/img/cartIcon.svg'

const Saves: React.FC = () => {
  return (
    <div className={styles.saves}>
      <div className={styles.favorites}>
        <img src={favoriteIcon} alt='Корзина' />
      </div>
      <div className={styles.devider}></div>
      <div className={styles.cart}>
        <img src={cartIcon} alt='Корзина' />
        <div className={styles.cartInfo}>
          <span className={styles.cartTitle}>Корзина:</span>
          <span className={styles.cartTotal}>$57.00</span>
        </div>
      </div>
    </div>
  )
}

export default Saves
