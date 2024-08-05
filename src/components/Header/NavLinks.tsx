import styles from '../../scss/components/NavLinks.module.scss'
import VectorIcon from '../../assets/img/vector.svg?react'

const NavLinks: React.FC = () => {
  return (
    <div className={styles.navLinks}>
      <div className={styles.linkCategories}>
        <div className={`${styles.links} ${styles.active}`}>
          <span>Перейти к</span>
          <VectorIcon className={styles.active} />
        </div>
        {['Магазин', 'Страницы', 'Отзывы', 'ВКонтакте'].map((text, id) => (
          <div key={id} className={`${styles.links}`}>
            <span>{text}</span>
            <VectorIcon />
          </div>
        ))}
      </div>
      <div className={styles.call}>
        <img src='src/assets/img/phoneIcon.svg' alt='Телефон' />
        <a href='tel:(219) 555-0114' className={styles.callNumber}>
          (219) 555-0114
        </a>
      </div>
    </div>
  )
}

export default NavLinks