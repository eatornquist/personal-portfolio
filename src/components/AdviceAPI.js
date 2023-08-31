import { useEffect, useState } from 'react'

const AdviceAPI = () => {
  const [advice, setAdvice] = useState('')
  //   const [count, setCount] = useState(0)

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    // console.log(data)
    setAdvice(data.slip.advice)
    // setCount((c) => c + 1)
  }

  //function use to being execute when the component get loaded
  useEffect(function () {
    getAdvice()
  }, [])

  return (
    <section id="advice" className="advice">
      <div className="container">
        <div className="section-title">
          <h2>Advice?</h2>
          <p>
            Seek the North Star of advice, for in its guidance, wisdom lies.
          </p>
        </div>
        <div>
          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <h4>{advice}</h4>
                <div className="text-center">
                  <button className="advice-button" onClick={getAdvice}>
                    Get advice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AdviceAPI
