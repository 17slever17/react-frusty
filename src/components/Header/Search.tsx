import styles from '../../scss/components/Search.module.scss'
import searchIcon from '../../assets/img/searchIcon.svg'
import searchClear from '../../assets/img/searchClear.svg'

const Search: React.FC = () => {
  return (
    <div className={styles.search}>
      <input type='text' placeholder='Поиск товаров...' className={styles.searchInput} />
      <img src={searchIcon} alt='Поиск' className={styles.searchIcon} />
      <img src={searchClear} alt='Сброс' className={styles.searchClear} />
    </div>
  )
}

export default Search
