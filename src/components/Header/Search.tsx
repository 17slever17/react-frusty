import styles from '../../scss/components/Search.module.scss'

const Search: React.FC = () => {
  return (
    <div className={styles.search}>
      <input type='text' placeholder='Поиск товаров...' className={styles.searchInput} />
      <img src='src/assets/img/searchIcon.svg' alt='Поиск' className={styles.searchIcon} />
      <img src='src/assets/img/searchClear.svg' alt='Сброс' className={styles.searchClear} />
    </div>
  )
}

export default Search
