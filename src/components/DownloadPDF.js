const DownloadPDF = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Eduardo_Tornquist_Resume 1.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Eduardo_Tornquist_Resume 1.pdf'
        alink.click()
      })
    })
  }
  return (
    <>
      <center>
        <div className="text-center">
          <button className="resume-button" onClick={onButtonClick}>
            Download Resume
          </button>
        </div>
      </center>
    </>
  )
}
export default DownloadPDF
