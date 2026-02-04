import { resumeEducation } from '../data'
import DownloadPDF from './DownloadPDF'

const Education = () => {
  return (
    <div className="col-lg-6" data-aos="fade-up">
      <h3 className="resume-title">Education</h3>
      {resumeEducation.map((education) => {
        return (
          <div className="resume-item" key={education.id}>
            <h4 dangerouslySetInnerHTML={{ __html: education.title }}></h4>
            <h5>{education.periodTime}</h5>
            <p>
              <em>{education.institution}</em>
            </p>
            <p dangerouslySetInnerHTML={{ __html: education.description }}></p>

            {education.id === 1 && (
              <DownloadPDF
                fileName="REPORT OF EVALUATION OF EDUCATIONAL CREDENTIALS .pdf"
                buttonText="Download Evaluation"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
export default Education
