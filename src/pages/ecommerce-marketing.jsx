import React, { useEffect } from 'react'
import Navbar from '../components/navbar'

const EcommerceMarketing = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
    </>
  )
}

export default EcommerceMarketing