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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <Education
            city={'Miami, FL'}
            phoneNumber={'786-609-1118'}
            email={'eatornquist04@gmail.com'}
          />

          <Experience />
        </div>

        <DownloadPDF />
      </div>
    </section>
  )
}
export default Resume
