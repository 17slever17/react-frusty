import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'

import styles from './scss/App.module.scss'
import BgShepes from './components/BgShepes'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App: React.FC = () => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        <div className='footer'>
          <div className='container'></div>
        </div>
      </div>
      <BgShepes />
    </div>
  )
}

export default App
