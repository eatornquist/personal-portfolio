import aboutImg from '../img/profile-img2_Fotor.jpeg'
import Details from './Details'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            I’m a Full Stack Developer with over 4 years of experience building
            web and enterprise applications. I work with technologies such as
            React, NestJS, and TypeScript to deliver reliable, scalable
            solutions, and leverage Microsoft Azure to support cloud-based
            systems.
          </p>
          <p>
            Most of my experience comes from business-critical applications,
            including ERP systems and internal platforms used across multiple
            departments.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full-Stack Developer.</h3>
            <br />
            <div className="row">
              <Details />
            </div>
            <p>
              I enjoy solving real-world problems, improving system reliability,
              and writing code that’s easy to maintain and evolve. I’m currently
              focused on modern web and cloud development, and I value
              continuous learning, clean architecture, and contributing to
              meaningful, long-term projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
