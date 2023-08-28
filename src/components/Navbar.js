import { pageLinks } from '../data'

const Navbar = () => {
  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className={link.aClassName}>
                <i className={link.icon}></i> <span>{link.text}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar
