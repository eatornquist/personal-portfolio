import { useEffect, useRef, useState } from 'react'
import deepai from 'deepai'
import APIKEY from '../config'

function ImageGenerator2() {
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
        })
        .then((res) => {
          setResImage(res.output_url)
          setsucess("Here's your image 🥳")
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
    <div className="App">
      <div className="content">
        <h1>Image Generator</h1>
        <form onSubmit={onSubmit}>
          <input className="input" type="text" placeholder="Input your text here" ref={textRef} />
          <button type="submit">Get Image</button>
        </form>
        <span className="white">{sucess}</span>
        <span className="red">{error}</span>
        {resImage ? <img src={resImage} alt="generated" /> : <span>No image caught</span>}
      </div>
    </div>
  )
}

// const generateImage = async () => {
//   setPlaceholder(`Search ${prompt}..`)
//   setLoading(true)
//   try {
//     const res = await openai.createImage({
//       prompt: prompt,
//       n: 1,
//       size: '512x512',
//     })
//     setLoading(false)
//     console.log(res)
//     setResult(res.data.data[0].url)
//   } catch (error) {
//     setLoading(false)
//     console.error`Error generating image: ${error.response.data.error.message}`()
//   }
// }

export default ImageGenerator2
