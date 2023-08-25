const Header = () => {
  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="./img/profile-img.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Alex Smith</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-tornquist-albella-3b759b124/"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
