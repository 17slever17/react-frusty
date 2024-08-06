import Slider from 'react-slick'
import styles from '../scss/components/SaleProducts.module.scss'
import SaleCard from './SaleCard'
import ArrowIcon from '../assets/img/arrowIcon.svg?react'

const NextArrow = (props: any) => {
  return (
    <div className={`${styles.arrow} ${styles.nextArrow} mainBtn`} onClick={props.onClick}>
      <ArrowIcon />
    </div>
  )
}

const PrevArrow = (props: any) => {
  return (
    <div className={`${styles.arrow} ${styles.prevArrow} mainBtn`} onClick={props.onClick}>
      <ArrowIcon />
    </div>
  )
}

const SaleProducts: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 4, // Количество отображаемых карточек
    slidesToScroll: 4, // Количество прокручиваемых карточек
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div className={styles.container}>
      <div className='homeTitle'>
        <span>Скидки недели</span>
        <div className='titleLine'></div>
      </div>
      <Slider {...settings}>
        {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3].map((_, id) => (
          <SaleCard key={id} />
        ))}
      </Slider>
    </div>
  )
}

export default SaleProducts
