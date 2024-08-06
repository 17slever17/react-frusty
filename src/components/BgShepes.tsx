import styles from '../scss/components/BgShepes.module.scss'
import body1 from '../assets/img/body1.svg'
import body2 from '../assets/img/body2.svg'
import body3 from '../assets/img/body3.svg'
import body4 from '../assets/img/body4.svg'

const BgShepes: React.FC = () => {
  return (
    <>
      <img className={`${styles.svgBody} ${styles.svgBody1}`} src={body1} alt='icon' />
      <img className={`${styles.svgBody} ${styles.svgBody2}`} src={body2} alt='icon' />
      <img className={`${styles.svgBody} ${styles.svgBody3}`} src={body3} alt='icon' />
      <img className={`${styles.svgBody} ${styles.svgBody4}`} src={body4} alt='icon' />
    </>
  )
}

export default BgShepes
