import { resumeEducation } from '../data'

const Education = ({ city, phoneNumber, email }) => {
  return (
    <div className="col-lg-6" data-aos="fade-up">
      <h3 className="resume-title">Sumary</h3>
      <div className="resume-item pb-0">
        <h4>Eduardo Tornquist</h4>
        <p>
          <em>
            Experienced Software Developer with expertise in analysis, design,
            implementation and maintenance of software systems. Equipped with a
            diverse and promising skill-set. Proficient in an assortment of
            technologies, including C#, .NET, PHP, MySQL, and Microsoft SQL
            Server. Able to effectively self-manage during independent projects,
            as well as collaborate in a team setting.
          </em>
        </p>
        <ul>
          <li>{city}</li>
          <li>{phoneNumber}</li>
          <li>{email}</li>
        </ul>
      </div>

      <h3 className="resume-title">Education</h3>
      {resumeEducation.map((education) => {
        return (
          <div className="resume-item" key={education.id}>
            <h4>{education.title}</h4>
            <h5>{education.periodTime}</h5>
            <p>
              <em>{education.institution}</em>
            </p>
            <p>{education.description}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Education
