import Education from './Education'
import Experience from './Experience'
import DownloadPDF from './DownloadPDF'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Software Developer with 4.5 years of experience building scalable
            web applications. 2.5 years as a{' '}
            <strong>Full Stack Developer</strong> delivering production-grade
            solutions using{' '}
            <strong>React, Redux, Material UI, and NestJS</strong>. Experienced
            with <strong>Azure (Cosmos DB, Function Apps, Blob Storage)</strong>
            , cloud-native architectures,{' '}
            <strong>CI/CD pipelines, and GitHub workflows</strong>.{' '}
            <strong>AZ-900 </strong>
            certified with strong front-end foundations via the{' '}
            <strong>
              Frontend Web Development Certificate Program (Thinkful – Chegg
              Skills)
            </strong>
            . Focused on clean code, collaboration, and continuous improvement.
          </p>
        </div>
        <div className="row">
          <Education />

          <Experience />
        </div>
        <DownloadPDF
          fileName="Eduardo_Tornquist_-_Software_Developer.pdf"
          buttonText="Download Resume"
        />
      </div>
    </section>
  )
}
export default Resume
