import React from 'react'

import styles from '../scss/components/Reviews.module.scss'
import ReviewLogo from '../assets/img/reviewLogo.svg?react'
import reviewer1 from '../assets/img/reviewer1.png'
import reviewer2 from '../assets/img/reviewer2.png'
import reviewer3 from '../assets/img/reviewer3.png'
import Rating from './Rating'

const Reviews = () => {
  return (
    <div className={styles.wrapper}>
      <div className='homeTitle'>
        <span>Отзывы покупателей</span>
        <div className='titleLine'></div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.review}>
            <ReviewLogo />
            <span className={styles.title}>
              Приятное место для покупок: большой выбор, свежие продукты и приветливые сотрудники. Цены
              разумные, часто бывают акции и скидки.
            </span>
          </div>
          <div className={styles.client}>
            <div className={styles.reviewer}>
              <img src={reviewer1} alt='Клиент' />
              <div className={styles.info}>
                <span className={styles.name}>Максим Райнов</span>
                <span className={styles.description}>Клиент</span>
              </div>
            </div>
            <Rating rating={5} size='20' />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.review}>
            <ReviewLogo />
            <span className={styles.title}>
              Обожаю этот магазин! Всегда нахожу здесь свежие овощи и фрукты. Персонал доброжелательный и
              всегда готов помочь. Удобное расположение.
            </span>
          </div>
          <div className={styles.client}>
            <div className={styles.reviewer}>
              <img src={reviewer2} alt='Клиент' />
              <div className={styles.info}>
                <span className={styles.name}>Максим Райнов</span>
                <span className={styles.description}>Клиент</span>
              </div>
            </div>
            <Rating rating={5} size='20' />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.review}>
            <ReviewLogo />
            <span className={styles.title}>
              Прекрасный выбор продуктов и всегда чисто. Нравится, что можно найти все необходимое в
              одном месте. Цены адекватные, всем рекомендую!
            </span>
          </div>
          <div className={styles.client}>
            <div className={styles.reviewer}>
              <img src={reviewer3} alt='Клиент' />
              <div className={styles.info}>
                <span className={styles.name}>Максим Райнов</span>
                <span className={styles.description}>Клиент</span>
              </div>
            </div>
            <Rating rating={5} size='20' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
