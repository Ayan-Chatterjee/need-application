import { Suspense, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Products from './components/Products'
import CallbackForm from './components/CallbackForm'
import Footer from './components/Footer'
import SEO from './components/SEO'
import { ShimmerSection } from './components/Shimmer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (sectionId) => {
    if (sectionId === 'why-us') {
      setCurrentPage('why-us')
      window.scrollTo(0, 0)
    } else if (sectionId === 'home') {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    } else {
      // Scroll to section on current page
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <SEO 
        title={currentPage === 'why-us' ? 'Why Us - Web Development Services' : 'Enterprise Solutions - Transform Your Business'}
        description={currentPage === 'why-us' ? 'Discover why we are the best choice for your web development needs. Expert team, proven results, and 24/7 support.' : 'Leading enterprise solutions provider offering innovative business services, products, and support for your organization. Scale your business with our industry-leading technology platform.'}
        url="https://enterprise-solutions.com"
      />
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      
      {currentPage === 'why-us' ? (
        <Suspense fallback={<ShimmerSection lines={5} />}>
          <WhyUs />
        </Suspense>
      ) : (
        <>
          <Suspense fallback={<ShimmerSection lines={5} />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<ShimmerSection lines={5} />}>
            <Products />
          </Suspense>
          <Suspense fallback={<ShimmerSection lines={5} />}>
            <CallbackForm />
          </Suspense>
        </>
      )}
      
      <Footer />
    </>
  )
}

export default App
