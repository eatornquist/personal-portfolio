import { personalInformation1 } from '../data'
import { personalInformation2 } from '../data'

const Details = () => {
  return (
    <>
      <div className="col-lg-6">
        <ul>
          {personalInformation1.map((information) => {
            return (
              <li key={information.id}>
                <i className="bi bi-chevron-right"></i>{' '}
                <strong>{information.title}</strong>{' '}
                <span>{information.info}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="col-lg-6">
        <ul>
          {personalInformation2.map((information) => {
            return (
              <li key={information.id}>
                <i className="bi bi-chevron-right"></i>{' '}
                <strong>{information.title}</strong>{' '}
                <span>{information.info}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default Details
