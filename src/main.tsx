import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'


import './scss/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {/* <Provider store={''}> */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>
)
