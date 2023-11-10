import { useEffect, useRef, useState } from 'react'
import deepai from 'deepai'
import APIKEY from '../config'

function ImageGeneratorApi() {
  const textRef = useRef()
  const [resImage, setResImage] = useState('')
  const [error, setError] = useState('')
  const [sucess, setsucess] = useState('')

  useEffect(() => {
    // deepai.setApiKey(process.env.TEST_KEY)
    // deepai.setApiKey(APIKEY.KEY)
    deepai.setApiKey(APIKEY.DEEPAI_API_KEY)
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    const text = textRef.current.value

    if (text) {
      deepai
        .callStandardApi('text2img', {
          text,
          grid_size: '1',
          image_generator_version: 'hd',
          negative_prompt: 'blurry',
        })
        .then((res) => {
          setResImage(res.output_url)
          // setsucess("Here's your image 🥳")
          setError('')
        })
        .catch((err) => {
          setError('Failed to get image')
          setsucess('')
        })
    } else {
      setError('Please enter some text')
      setsucess('')
    }
  }

  return (
    <section id="image_generator" className="image_generator">
      <div className="container">
        <div className="section-title">
          <h2>AI Image Generator? Why not</h2>
          <p>Pixels pirouette, AI draws a sheep, but dreams of counting them puts the generator to sleep.</p>
        </div>
        <div>
          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <form onSubmit={onSubmit}>
                  <input className="form-control" type="text" placeholder="Describe your Image" ref={textRef} />
                  <div className="text-center">
                    <button className="image_generator-button" type="submit">
                      Get Image
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span className="white">{sucess}</span>
        <span className="red">{error}</span>
        <div className="polaroid">
          {resImage ? (
            <>
              <img src={resImage} alt="generated" />
              <div className="caption">
                <p>{textRef.current.value}</p>
              </div>
            </>
          ) : (
            // <span>No image caught</span>
            ''
          )}
        </div>
      </div>
    </section>
  )
}

export default ImageGeneratorApi

{
  /* <section id="advice" className="advice">
      <div className="container">
        <div className="section-title">
          <h2>Advice?</h2>
          <p>Seek the North Star of advice, for in its guidance, wisdom lies.</p>
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
    </section> */
}
