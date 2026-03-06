import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Industries from './components/Industries'
import WhyChooseUs from './components/WhyChooseUs'
import Technologies from './components/Technologies'
import Pricing from './components/Pricing'
import PostLaunchServices from './components/PostLaunchServices'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import CTASection from './components/CTASection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans antialiased bg-[#050505] text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Industries />
        <WhyChooseUs />
        <Technologies />
        <Pricing />
        <PostLaunchServices />
        <AboutUs />
        <Testimonials />
        <Blog />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
