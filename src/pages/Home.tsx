import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'

const Home: React.FC = () => {
  return (
    <div className='container'>
      <div>
        <Banner />
        <AboutUs />
      </div>
      <div className='sales'></div>
      <div className='categories'></div>
      <div className='info'></div>
      <div className='reviews'></div>
      <div className='vk'></div>
    </div>
  )
}

export default Home
