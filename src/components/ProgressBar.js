import { skills1, skills2 } from '../data'
import React from 'react'
import { Waypoint } from 'react-waypoint'

const ProgressBar = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)

  new Waypoint({
    element: el,
    offset: '80%',
    handler: function (direction) {
      let progress = el
      progress.forEach((el) => {
        el.style.width = el.getAttribute('aria-valuenow') + '%'
      })
    },
  })

  return (
    <>
      <div className="col-lg-6" data-aos="fade-up">
        {skills1.map((skill) => {
          return (
            <div className="progress" key={skill.id}>
              <span className="skill">
                {skill.title} <i className="val">{skill.percent}%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  ref={el}
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
            <div className="progress" key={skill.id}>
              <span className="skill">
                {skill.title} <i className="val">{skill.percent}%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  ref={el}
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
