import { resumeExperience } from '../data'

const Experience = () => {
  return (
    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
      <h3 className="resume-title">Most Recent Professional Experience</h3>
      {resumeExperience.map((experience) => {
        return (
          <div className="resume-item" key={experience.id}>
            <h4>{experience.title}</h4>
            <h5>{experience.periodTime}</h5>
            <p>
              <em dangerouslySetInnerHTML={{ __html: experience.company }}></em>
            </p>
            <ul>
              {experience.responsabilities.map((responsability, index) => {
                return <li key={index}>{responsability}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
export default Experience
