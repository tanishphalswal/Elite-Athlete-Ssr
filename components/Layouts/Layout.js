import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
// import WriteReviews from '../Modal/WriteReviews'
import { useSelector } from 'react-redux'
import WriteReviews from '@components/Modal/WriteReviews'
// import TrackOrder from '../Modal/TrackOrder'

function Layout({ children }) {

  const { popUpData } = useSelector((state) => state)

  return (
    <React.Fragment>
      {popUpData?.isOpen && popUpData?.popUpName == "Add_Review" &&
        // <TrackOrder />
        <WriteReviews />
      }
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
