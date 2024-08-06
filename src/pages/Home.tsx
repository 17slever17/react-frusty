import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import TopCategories from '../components/TopCategories'
import SaleProducts from '../components/SaleProducts'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

const Home: React.FC = () => {
  return (
    <div className='container'>
      <div>
        <Banner />
        <AboutUs />
      </div>
      <TopCategories />
      <SaleProducts />
      <Reviews />
			<Footer />
			<Copyright />
      <div className='vk'></div>
    </div>
  )
}

export default Home
