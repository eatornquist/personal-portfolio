import React from 'react'
import Typed from 'typed.js'

const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: [
        'Software Developer',
        'Frontend Developer',
        'Backend Developer',
        'Fullstack Developer',
      ],
      typeSpeed: 50,
      backSpeed: 50,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Eduardo Tornquist</h1>
        <p>
          I'm{' '}
          <span
            onClick={() => typed.current.reset()}
            className="typed"
            ref={el}
            // data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
      </div>
    </section>
  )
}
export default Hero
