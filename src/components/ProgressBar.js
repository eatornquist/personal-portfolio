import { skills1, skills2 } from '../data'

const ProgressBar = () => {
  return (
    <>
      <div className="col-lg-6" data-aos="fade-up">
        {skills1.map((skill) => {
          return (
            <div className="progress">
              <span className="skill" key={skill.id}>
                {skill.title} <i className="val">{skill.percent}%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.percent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        {skills2.map((skill) => {
          return (
            <div className="progress">
              <span className="skill" key={skill.id}>
                {skill.title} <i className="val">{skill.percent}%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.percent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default ProgressBar
