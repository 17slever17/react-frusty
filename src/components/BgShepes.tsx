import styles from '../scss/components/BgShepes.module.scss'

const BgShepes: React.FC = () => {
  return (
    <>
      <img
        className={`${styles.svgBody} ${styles.svgBody1}`}
        src='src/assets/img/body1.svg'
        alt='icon'
      />
      <img
        className={`${styles.svgBody} ${styles.svgBody2}`}
        src='src/assets/img/body2.svg'
        alt='icon'
      />
      <img
        className={`${styles.svgBody} ${styles.svgBody3}`}
        src='src/assets/img/body3.svg'
        alt='icon'
      />
      <img
        className={`${styles.svgBody} ${styles.svgBody4}`}
        src='src/assets/img/body4.svg'
        alt='icon'
      />
    </>
  )
}

export default BgShepes
