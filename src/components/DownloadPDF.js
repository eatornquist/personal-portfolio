const DownloadPDF = ({ fileName, buttonText }) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(fileName).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = fileName
        alink.click()
      })
    })
  }
  return (
    <>
      <center>
        <div className="text-center">
          <button className="resume-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </center>
    </>
  )
}
export default DownloadPDF
