import React from 'react'
import Header from '../Components/Home/Header'
import About from '../Components/Home/About'
import OurMenu from '../Components/Home/OurMenu'
import Testemonial from '../Components/Home/Testemonial'
import Faq from '../Components/Home/Faq'

function HomePage() {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <About/>
      <OurMenu/>
      <Testemonial/>
      <Faq/>
    </div>
  )
}

export default HomePage
