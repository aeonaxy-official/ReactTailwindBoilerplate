import React from 'react'
import Header from '../Header/header'
import Articles from '../Articles/Articles'
import Firebase from '../Firebase/Firebase'
import Newsletter from '../Newsletter/Newsletter'
import Features from '../Features/Features'
import Case from '../CaseStudy/Case'
import Footer from '../Footer/Footer'

const home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Header/>
        <Articles/>
        <Firebase/>
        <Newsletter/>
        <Features/>
        <Case/>
        <Footer/>
    </div>
  )
}

export default home