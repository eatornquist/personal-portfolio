import React from 'react'
import { skillCategories } from '../data'

const ProgressBar = () => {
  return (
    <>
      {skillCategories.map((category) => {
        return (
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            key={category.id}
          >
            <h5 className="mb-3 fw-bold">{category.category}:</h5>
            <ul className="list-unstyled">
              {category.skills.map((skill, index) => (
                <li key={index} className="mb-2">
                  <i className="bx bx-check-double"></i> {skill}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </>
  )
}
export default ProgressBar
