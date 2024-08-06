import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App'


import './scss/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {/* <Provider store={''}> */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>
)
