import React from 'react'
import styles from '../scss/components/Copyright.module.scss'

const Copyright: React.FC = () => {
  return (
    <div className={styles.copyright}>
      <span>Frusty eCommerce © 2021. Все права защищены</span>
    </div>
  )
}

export default Copyright
