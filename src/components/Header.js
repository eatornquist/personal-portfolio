import { socialLinks } from '../data'
import headerImg from '../img/profile-img.jpg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={headerImg} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">Eduardo Tornquist</a>
            </h1>
            <div className="social-links mt-3 text-center">
              {socialLinks.map((link) => {
                return (
                  <a key={link.id} href={link.href} className={link.text}>
                    <i className={link.icon}></i>
                  </a>
                )
              })}
            </div>
          </div>
          <Navbar />
        </div>
      </header>
    </>
  )
}
export default Header
