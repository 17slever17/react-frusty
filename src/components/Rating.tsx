import React from 'react'

import styles from '../scss/components/Rating.module.scss'
import RatingIcon from '../assets/img/ratingIcon.svg?react'

const Rating: React.FC<{ rating: number; size: string }> = ({ rating, size }) => {
  return (
    <div className={styles.rating}>
      <RatingIcon className={styles.ratingIcon} style={{ height: size }} />
      <div className={styles.starsWrapper} style={{ width: `${rating * 20}%` }}>
        <RatingIcon className={styles.stars} style={{ height: size }} />
      </div>
    </div>
  )
}

export default Rating
