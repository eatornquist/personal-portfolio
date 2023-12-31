import Hero from './components/Hero'
import About from './components/About'
import Facts from './components/Facts'
import Skills from './components/Skills'
import Resume from './components/Resume'
// import Portfolio from './components/Portfolio'
// import Services from './components/Services'
// import Testimonials from './components/Testimonials'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactUs from './components/ContactUs'
// import TypedReactHooksDemo from './components/TypedReactHooksDemo'
import AdviceAPI from './components/AdviceAPI'
// import ImageGenerator from './components/ImageGenerator'
import ImageGeneratorApi from './components/ImageGeneratorApi'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <AdviceAPI />
        <ImageGeneratorApi />
        {/* <Portfolio /> */}
        {/* <Services /> */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
        <ContactUs />
        {/* <TypedReactHooksDemo /> */}
      </main>

      <Footer />

      {/* <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a> */}
    </>
  )
}

export default App
