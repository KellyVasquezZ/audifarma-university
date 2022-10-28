import { useState, useEffect } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Banner } from '../../components/banner/Banner'
import { Footer } from '../../components/footer/Footer'

const Home = () => {

  const [elevationNavbar, setElevationNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if(window.pageYOffset) {
      setElevationNavbar(true)
      return true
    }
    setElevationNavbar(false)
  };
  return (
    <main>
      <Navbar elevationNavbar={elevationNavbar} />
      <Banner/>
      <Footer/>
    </main>
  )
}

export default Home