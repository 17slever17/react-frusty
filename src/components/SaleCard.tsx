import React from 'react'

import styles from '../scss/components/SaleCard.module.scss'

import product from '../assets/img/product.jpg'
import CartIcon from '../assets/img/cartBtnIcon.svg?react'
import FavoriteIcon from '../assets/img/favoriteBtnIcon.svg?react'
import Rating from './Rating'

const SaleCard = () => {
  return (
    <div className={`${styles.card} itemBox`}>
      <img src={product} alt='Продукт' />
      <div className={styles.productInfo}>
        <div className={styles.product}>
          <div className={styles.info}>
            <span className={styles.title}>Зелёное яблоко</span>
            <span className={styles.price}>$14.99</span>
          </div>
          <Rating rating={4} size='13' />
        </div>
        <button className={`mainBtn`}>
          <CartIcon />
        </button>
      </div>
      <button className={`${styles.favoriteBtn} mainBtn`}>
        <FavoriteIcon />
      </button>
    </div>
  )
}

export default SaleCard
