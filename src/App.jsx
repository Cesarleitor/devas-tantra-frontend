

import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Footer from './components/Footer/Footer'

function App() {
  const [isAboutPage, setIsAboutPage] = useState(
    window.location.hash === '#/sobre'
  )

  useEffect(() => {
    const handleHashChange = () => {
      setIsAboutPage(window.location.hash === '#/sobre')
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <>
      <Header />
      {isAboutPage ? <Sobre /> : <Home />}
      <Footer />
    </>
  )
}

export default App
