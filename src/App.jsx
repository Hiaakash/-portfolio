import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Socials } from './components'


const App = () => {

  const [isDark, setIsDark] = useState(true)

  {/* ToDo */ }
  {/* <Feedbacks /> */ }
  {/* <StarsCanvas /> */ }

  return (
    <BrowserRouter>
      <div className={`relative z-0 bg-primary`}></div>
      <div className={`${isDark ? 'bg-hero-pattern-dark' : 'bg-hero-pattern-light'} bg-cover bg-no-repeat bg-center`}>
        <Navbar isDark={isDark} />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />

      <Socials />
      <div className="relative z-0">
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
