import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'

import styles from './scss/App.module.scss'
import BgShepes from './components/BgShepes'

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
        <div className='footer'>
          <div className='container'></div>
        </div>
      </div>
      <BgShepes />
    </div>
  )
}

export default App
