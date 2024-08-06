import React from 'react'

import styles from '../scss/components/TopCategories.module.scss'
import { Link } from 'react-router-dom'

import vegetables from '../assets/img/vegetable.svg'
import fruits from '../assets/img/fruits.svg'
import fish from '../assets/img/fish.svg'
import meat from '../assets/img/meat.svg'
import drinks from '../assets/img/drinks.svg'
import snacks from '../assets/img/snacks.svg'

const TopCategories: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className='homeTitle'>
        <span>Топ категорий</span>
        <div className='titleLine'></div>
      </div>
      <div className={styles.categories}>
        <Link to='/' className={`${styles.card} itemBox`}>
          <img src={vegetables} alt='Овощи' />
          <div className={styles.info}>
            <span className={styles.cardTitle}>Овощи</span>
            <span className={styles.productsQuantity}>30 Продуктов</span>
          </div>
        </Link>
        <Link to='/' className={`${styles.card} itemBox`}>
          <img src={fruits} alt='Фрукты' />
          <div className={styles.info}>
            <span className={styles.cardTitle}>Фрукты</span>
            <span className={styles.productsQuantity}>30 Продуктов</span>
          </div>
        </Link>
        <Link to='/' className={`${styles.card} itemBox`}>
          <img src={fish} alt='Рыба' />
          <div className={styles.info}>
            <span className={styles.cardTitle}>Рыба</span>
            <span className={styles.productsQuantity}>30 Продуктов</span>
          </div>
        </Link>
        <Link to='/' className={`${styles.card} itemBox`}>
          <img src={meat} alt='Мясо' />
          <div className={styles.info}>
            <span className={styles.cardTitle}>Мясо</span>
            <span className={styles.productsQuantity}>30 Продуктов</span>
          </div>
        </Link>
        <Link to='/' className={`${styles.card} itemBox`}>
          <img src={drinks} alt='Напитки' />
          <div className={styles.info}>
            <span className={styles.cardTitle}>Напитки</span>
            <span className={styles.productsQuantity}>30 Продуктов</span>
          </div>
        </Link>
        <Link to='/' className={`${styles.card} itemBox`}>
          <img src={snacks} alt='Снэки' />
          <div className={styles.info}>
            <span className={styles.cardTitle}>Снэки</span>
            <span className={styles.productsQuantity}>30 Продуктов</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TopCategories
